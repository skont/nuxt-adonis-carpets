'use strict'
const Customers = use('App/Models/Customer')

class CustomerController {
      
    async all () {
        return await Customers.all()
    }

    async customerByCode ({params}) {

        // return await Customers
        // .query()
        // .where(
        //     function () {
        //         this.where('Code','LIKE','%'+params.code+'%') || this.where('Phone','LIKE','%'+params.p+'%')
        //       })
        // .fetch()
        
        // return await Customers
        // .query('Code','Name')
        // .where('Code','LIKE','%'+params.code+'%')
        // .orWhere('Name','LIKE','%'+params.code+'%')
        // .fetch()

        return await Customers
        .query()
        .select('Name','Code','Phone','Mobile')
        .where('Name','LIKE','%'+params.code+'%')
        .orWhere('Code','LIKE','%'+params.code+'%')
        .orWhere('Phone','LIKE','%'+params.code+'%')
        .orWhere('Mobile','LIKE','%'+params.code+'%')
        .fetch()
    }
}

module.exports = CustomerController

