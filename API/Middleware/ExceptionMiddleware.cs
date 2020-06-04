using System;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using API.Errors;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;
        private readonly IHostEnvironment _env;
        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env) // which environment
        {
            _env = env;
            _logger = logger;
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        { // middle ware task
            try
            {
                await _next(context); // if no exception request pass to next stage
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message); // output to logging system for our console
                context.Response.ContentType = "application/josn"; // send to client
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError; // 500 server code 
                var response = _env.IsDevelopment()
                ? new ApiException((int)HttpStatusCode.InternalServerError, ex.Message, ex.StackTrace.ToString()) // more info for developper
                : new ApiException((int)HttpStatusCode.InternalServerError);

                var options = new JsonSerializerOptions // return response in camel case
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                };

                var json = JsonSerializer.Serialize(response, options); // serialized

                await context.Response.WriteAsync(json);
            }
        }
    }
}