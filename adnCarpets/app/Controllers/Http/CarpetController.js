'use strict'

const Carpets = use('App/Models/Carpet')

class CarpetController {
    async all () {
        return await Carpets.all()
    }

    async carpetsByCode ({params}) {

        return await Carpets
        .query()
        .where('Code','LIKE','%'+params.code+'%')
        .fetch()
    }
}

module.exports = CarpetController
