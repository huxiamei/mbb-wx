const util = require('../util/util.js')

const getLineDetails = () => {
    return new Promise((resolve, reject) => {
        util.post('/busService/client/bus/vehicle/dynamic/line/details',util.params).then(
            res => resolve(res)
        )
    });
}

module.exports = {
    getLineDetails: getLineDetails
}