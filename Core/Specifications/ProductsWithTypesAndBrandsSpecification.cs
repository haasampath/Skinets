using System;
using System.Linq.Expressions;
using Core.Entity;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification(ProductSpecParams productParams)// sort v 60
        : base(x =>
        (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) &&  // v 66
         (!productParams.BrandId.HasValue || x.ProductBrandId == productParams.BrandId) &&
         (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId)
        )
        
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
            AddOrderBy(x => x.Name);
            ApplyPaging(productParams.Pagesize * (productParams.PageIndex - 1), productParams.Pagesize);
            
            if (!string.IsNullOrEmpty(productParams.Sort))
            {

                switch (productParams.Sort)
                {
                    case "priceAsc":
                        AddOrderBy(p => p.Price);
                        break;

                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                        break;
                    default:
                        AddOrderBy(p => p.Name);
                        break;
                }
            }
        }

        public ProductsWithTypesAndBrandsSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
    }
}