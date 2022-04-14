using DAL;
using System.Collections.Generic;

namespace BLL
{
    public class BLL_Layer
    {
        private static List<Customer> CustomerList;

        static BLL_Layer()
        {
            CustomerList = DAL_layer.GetCustomer_DAL();
        }

        public List<CustomerBO> GetCustomer_BLL()
        {
            List<CustomerBO> list = new List<CustomerBO>();

            foreach (Customer customer in CustomerList)
            {
                CustomerBO customerBO = new CustomerBO()
                {
                    CustomerAddress = customer.CustomerAddress,
                    CustomerAge = customer.CustomerAge,
                    CustomerId = customer.CustomerId,
                    CustomerName = customer.CustomerName
                };
                list.Add(customerBO);
            }

            return list;

        }
    }
}

