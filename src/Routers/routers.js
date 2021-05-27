const Joi = require("joi");
const siteStatusService = require('../Service/site_status_service');
exports.routes = [
    {
        method: 'POST',
        path: '/siteStatus',
        config: {
            validate: {
                payload: Joi.object({
                    siteUrl: Joi.string().uri()
                })
            }
        },
        handler: (request, h) => {
            // const data = siteStatusService.checkSiteStatus(request);
            // return h.response(data);
            return siteStatusService.checkSiteStatus(request);
            // return h.response(siteStatusService.checkSiteStatus(request));
        }
    }
];