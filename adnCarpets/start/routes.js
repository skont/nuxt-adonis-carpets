'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.on('/').render('welcome')


//Customers routes
Route.get('customers', 'CustomerController.all')
Route.get('customers/:code', 'CustomerController.customerByCode')
Route.post('customers/add', 'CustomerController.addCustomer')
Route.put('customers/edit/:id', 'CustomerController.editCustomer')
Route.delete('customers/delete/:id', 'CustomerController.deleteCustomer')

//Carpets routes
Route.get('carpets', 'CarpetController.all')
Route.get('carpets/:code', 'CarpetController.carpetByCode')