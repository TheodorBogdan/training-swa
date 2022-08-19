using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;
using TrainingSWA.Models;

namespace TrainingSWA
{
    public static class GetProductsFunction
    {
        [FunctionName("GetProductsFunction")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "products")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            var random = new Random();

            var products = Enumerable.Range(0, random.Next(10)).Select(t => new Product
            {
                Id = t,
                Name = "Product " + t,
                Description = "Description " + t,
                Quantity = random.Next(100)
            });

            return new OkObjectResult(products);
        }
    }
}
