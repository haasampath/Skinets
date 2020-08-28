using API.Dtos;
using AutoMapper;
using Core.Entity;
using Core.Entity.Identity;
using Core.Entity.OrderAggregate;
using Address = Core.Entity.Identity.Address;

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
            CreateMap<AddressDto, Core.Entity.OrderAggregate.Address>(); // 214 for order addressdto need to map address of order aggregate
            CreateMap<Order, OrderToReturnDto>() // 224
            .ForMember(d => d.DeliveryMethod, o => o.MapFrom(s => s.DeliveryMethod.ShortName))
            .ForMember(d => d.ShippingPrice, o => o.MapFrom(s => s.DeliveryMethod.Price));
            CreateMap<OrderItem, OrderItemDto>() // 224
            .ForMember(d => d.ProductId, o => o.MapFrom(s => s.ItemOrdered.ProductItemId))
            .ForMember(d => d.ProductName, o => o.MapFrom(s => s.ItemOrdered.ProductName))
            .ForMember(d => d.PictureUrl, o => o.MapFrom(s => s.ItemOrdered.PictureUrl))
            .ForMember(d => d.PictureUrl, o => o.MapFrom<OrderItemUrlResolver>());

        }
    }
}