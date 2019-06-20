'use strict'
const Customers = use('App/Models/Customer')

class CustomerController {

  async all() {
    return await Customers.all()
  }

  async customerByCode({ params }) {

    //  const filteredUsers 

    return await Customers
      .query()
      .select('Name', 'Code', 'Phone', 'Mobile', 'Street', 'Zip', 'Area')
      .where('Name', 'LIKE', '%' + params.code + '%')
      .orWhere('Code', 'LIKE', '%' + params.code + '%')
      .orWhere('Phone', 'LIKE', '%' + params.code + '%')
      .orWhere('Mobile', 'LIKE', '%' + params.code + '%')
      .fetch()
  }

  async addCustomer({ request, response }) {
    //const newCust = request.only(['Code', 'Name', 'Street', 'Phone','Mobile','Floor'])

    const newCust = request.all()

    const customer = new Customers
    customer.Code = newCust.Code
    customer.Name = newCust.Name
    customer.Street = newCust.Street
    customer.Floor = newCust.Floor
    customer.Area = newCust.Area
    customer.Zip = newCust.ZipCode
    customer.Phone = newCust.Phone
    customer.Mobile = newCust.Mobile
    customer.Notes = newCust.Notes
    customer.VATNumber = newCust.VATNumber
    customer.MapPage = newCust.MapPage
    customer.Customer_VATType2=newCust.Customer_VATType2

    await customer.save()

    return response.status(201).json(customer)
  }

  async editCustomer({ params, request, response }) {

    const custInfo = request.all()
    await Customers
      .query()
      .select()
      .where('Id', params.id)
      .update({
        "Code": custInfo.Code,
        "Name": custInfo.Name,
        "Street": custInfo.Street,
        "Phone": custInfo.Phone,
        "Mobile": custInfo.Mobile,
        "Floor": custInfo.Floor
      })

    return response.status(200).json("OK")

  }

  async deleteCustomer({ params, response }) {

    await Customers
      .query()
      .select()
      .where('Id', params.id)
      .delete()

    return response.status(204).json("Deleted")
  }

}

module.exports = CustomerController

