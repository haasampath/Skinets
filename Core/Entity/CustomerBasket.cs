using System.Collections.Generic;

namespace Core.Entity
{
    public class CustomerBasket
    {
        public CustomerBasket() // without to neeed in id create empty constructor too 136
        {
        }

        public CustomerBasket(string id)
        {
            Id = id;
        }
 
        public string Id { get; set; }
        public List<BasketItem> Items { get; set; } = new List<BasketItem>(); // initialized basket items
    }
}