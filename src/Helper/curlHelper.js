const { curly } = require('node-libcurl');

module.exports.getSiteStatus = async (siteUrl) => {
    const { statusCode, data, headers } = await curly.get(siteUrl);
        console.log(statusCode);
        const returnData ={
            statusCode : 200,
            message : "Site is up"
        }
        return returnData;
   
}