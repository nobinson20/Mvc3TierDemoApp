<Project name: Mvc3TierDemoApp3>

Author: Byeongho Hwang

* Explanation:
This is a 3 tier architecture project, which consists of
data access layer, biz logic layer, and presentation layer.

* How it's built:
I started with creating blank C# solution, then created
two projects with .NET C# library template for DAL and BLL.
Then, I created presentation layer with .NET standard MVC template.
References of each project are linear as following:

Presentation layer -> Biz layer -> DAL

* How data is transferred:
[DAL] project
- Customer.cs and CusomerV2.css contain two partial classes for
a full Customer class.
- At DAL_Layer.cs, GetCustomer_DAL() method creates directly three
customer objects and they are stored in a list and returned.

[BLL] project
Since presentation layer should not have access to DAL, there should be
an object in BLL that bridges the data. Because of this, I created
-CustomerBO.cs: this has exactly same member field as DAL's Customer class.
-BLL_Layer.cs has these three fields:

private static List<Customer> CustomerList;
static BLL_Layer(); // constructor that takes data from DAL and
		    // initializes CustomerList
public List<CustomerBO> GetCustomer_BLL(); // this returns
				// List<CustomerBO> list

[Presentation_Layer]
In HomeController,
public ActionResult Customers() is a action method that takes data
from BLL layer and inject the data to ViewData.
- Customers.cshtml
: this is merely created using 'Add view' of Visual Studio. The model
it references is defined in BLL, and it gets data from its corresponding
controller.






