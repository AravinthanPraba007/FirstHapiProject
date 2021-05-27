const siteStatusService = require('../Service/site_status_service');
exports.routes = [
    {
        method: 'POST',
        path: '/siteStatus',
        handler: (request, h) => {
            return h.response(siteStatusService.checkSiteStatus(request));
        }
    }
];