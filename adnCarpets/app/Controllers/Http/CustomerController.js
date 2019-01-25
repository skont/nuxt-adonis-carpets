'use strict'
const Customers = use('App/Models/Customer')

class CustomerController {
      
    async all () {
        return await Customers.all()
    }

    async customerByCode ({params}) {

      //  const filteredUsers 

        return await Customers
        .query()
        .select('Name','Code','Phone','Mobile','Street','Zip','Area')
        .where('Name','LIKE','%'+params.code+'%')
        .orWhere('Code','LIKE','%'+params.code+'%')
        .orWhere('Phone','LIKE','%'+params.code+'%')
        .orWhere('Mobile','LIKE','%'+params.code+'%')
        .fetch()
    }
}

module.exports = CustomerController

