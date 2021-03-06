const { curly } = require('node-libcurl');

module.exports.getSiteStatus = async (siteUrl) => {
    let returnData = {};
    try {
        const { statusCode, data, headers } = await curly.get(siteUrl);
        console.log(headers);
        returnData.statusCode = statusCode;
        returnData.reason = (returnData.reason = headers[0].result.reason);
    } catch (e) {
        console.log(e.toString());
        returnData.error = e.toString();
    }
        return returnData;
}