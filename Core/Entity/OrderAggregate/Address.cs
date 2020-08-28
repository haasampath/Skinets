namespace Core.Entity.OrderAggregate
{
    public class Address // own by order
    {
        public Address() // entity framework need parameter less constructor for generate
        {
        }

        public Address(string firstName, string lastName, string street, string city, string state, string zipcode)
        {
            FirstName = firstName;
            LastName = lastName;
            Street = street;
            City = city;
            this.state = state;
            Zipcode = zipcode;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string state { get; set; }
        public string Zipcode { get; set; }

    }
}