using API.Dtos;
using AutoMapper;
using Core.Entity;
using Core.Entity.Identity;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
            .ForMember(d => d.ProductBrand, o => o.MapFrom(s => s.ProductBrand.Name))
            .ForMember(d => d.ProductType, o => o.MapFrom(s => s.ProductType.Name))
            .ForMember(d => d.PictureUrl, o => o.MapFrom<ProductUrlResolver>());

            CreateMap<Address, AddressDto>().ReverseMap(); // 177 since property name exact match no need columns
            CreateMap<CustomerBasketDto, CustomerBasket>(); // 182
            CreateMap<BasketItemDto, BasketItem>(); // 182


        }
    }
}