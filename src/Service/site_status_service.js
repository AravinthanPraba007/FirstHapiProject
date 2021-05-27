const curlHelper = require('../Helper/curlHelper');
module.exports.checkSiteStatus = async (request) => {
    const siteUrl = request.payload.siteUrl;
    const response = {};
    const data = curlHelper.getSiteStatus(siteUrl)
    console.log("Data");
    console.log(data);
    response = {
        URL: siteUrl,
        Status_Code: 200,
        Message: "hello"
    };
    console.log(response);
    return response;
}