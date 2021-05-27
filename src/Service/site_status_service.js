module.exports = function siteStatusService(request) {
    const siteUrl = request.payload.siteUrl;
    console.log(siteUrl);
    const response = {
        URL: siteUrl

    };
    return response;
}