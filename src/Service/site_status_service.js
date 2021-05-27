const curlHelper = require('../Helper/curlHelper');
module.exports.checkSiteStatus = async (request) => {
    const STATUS_503_MESSAGE = "Service Unavailable";
    const siteUrl = request.payload.siteUrl;
    const responseData = {};
    const siteStatus = await curlHelper.getSiteStatus(siteUrl)
    if(siteStatus.error){
        responseData.errorMessage = siteStatus.error;
    }
    else if(siteStatus.statusCode) {
        const statusCode =siteStatus.statusCode
        responseData.statusCode = statusCode;
        if(statusCode === 200) {
            responseData.message = `${siteUrl} is UP`;
        }
        else {
            responseData.message = `${siteUrl} is DOWN`;
        }
    }
    else {
        responseData.message = "Unable to get the Site status";
    }

    
    return responseData;
}