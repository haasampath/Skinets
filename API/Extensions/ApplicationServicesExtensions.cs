using System.Linq;
using API.Errors;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Infrastructure.Services;

namespace API.Extensions
{
    public static class ApplicationServicesExtensions // v 56 Cleaning up the Startup class 
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<ITokenService, TokenService>(); // 172
            services.AddScoped<IOrderService, OrderService>(); // 212
            services.AddScoped<IPaymentService, PaymentService>(); // 258
            services.AddScoped<IUnitOfWork, UnitOfWork>(); // 217
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IBasketRepository, BasketRepository>(); //v 137
            services.AddScoped(typeof(IGenericRepository<>), (typeof(GenericRepository<>)));

            services.Configure<ApiBehaviorOptions>(options =>
           { // v 53 ApiControleer enhanced to model state error 
                options.InvalidModelStateResponseFactory = actionContext =>
               {
                   var errors = actionContext.ModelState  // go inside model state if any error populate error message to array
                    .Where(e => e.Value.Errors.Count > 0)
                    .SelectMany(x => x.Value.Errors)
                    .Select(x => x.ErrorMessage).ToArray();

                   var errorResponse = new ApiValidationErrorResponse
                   {
                       Errors = errors
                   };
                   return new BadRequestObjectResult(errorResponse);
               };
           });

           return services;
        }


    }
}