using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entity;

namespace Core.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> GetProductByAsync(int id);

        Task<IReadOnlyList<Product>> GetProductsByAsync();
        Task<IReadOnlyList<ProductType>> GetProductTypesByAsync();
        Task<IReadOnlyList<ProductBrand>> GetProductBrandsByAsync();

    }
}