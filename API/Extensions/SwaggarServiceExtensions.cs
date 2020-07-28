using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace API.Extensions
{
    public static class SwaggarServiceExtensions
    {
        public static IServiceCollection AddSwaggerDocumentation(this IServiceCollection services)
        {

            services.AddSwaggerGen(c =>
          { // v 54
              c.SwaggerDoc("v1", new OpenApiInfo { Title = "SkiNet API", Version = "v1" });

              var securitySchema = new OpenApiSecurityScheme // 183 
              {
                  Description = "JWT Auth Bearer Scheme",
                  Name= "Authorization",
                  In = ParameterLocation.Header,
                  Type= SecuritySchemeType.Http,
                  Scheme = "bearer",
                  Reference = new OpenApiReference
                  {
                      Type = ReferenceType.SecurityScheme,
                      Id = "Bearer"
                  }
              };

              c.AddSecurityDefinition("Bearer", securitySchema);
              var securityRequirement = new OpenApiSecurityRequirement { { securitySchema, new[] { "Bearer" } } };
              c.AddSecurityRequirement(securityRequirement);
          });

            return services;
        }

        public static IApplicationBuilder UseSwaggerDocumentation(this IApplicationBuilder app)
        {
            app.UseSwagger(); //v 54
            app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "SkiNet API v1"); } // v 54
            );
            return app;
        }
    }
}