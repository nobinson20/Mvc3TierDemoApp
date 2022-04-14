using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DAL_layer
    {
        public static List<Customer> GetCustomer_DAL()
        {
            Customer customer0 = new Customer()
            {
                CustomerId = 0,
                CustomerAge = 19,
                CustomerAddress = "511 W 112th Street, New York, NY 10025"
            };

            Customer customer1 = new Customer()
            {
                CustomerId = 1,
                CustomerAge = 30,
                CustomerAddress = "1725 Bishop Street, Concord, California 90151"
            };

            Customer customer2 = new Customer()
            {
                CustomerId = 2,
                CustomerAge = 45,
                CustomerAddress = "280 Anderson Dr., Piscataway, New Jersey 19301"
            };

            return new List<Customer>() { customer0, customer1, customer2 };
        }
    }
}