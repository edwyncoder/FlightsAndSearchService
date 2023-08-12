const { AirportService } = require('../services/index');

let airportService = new AirportService()
const create = async (req, res) => {
    try {
        const result = await airportService.create(req.body)
        res.status(201).json({
            error: {},
            message: 'Sucessfully created airport',
            data: result,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: 'Error creating airport in conterllers',
            data:{},
            success: false
        })
    }
}

module.exports = {create}