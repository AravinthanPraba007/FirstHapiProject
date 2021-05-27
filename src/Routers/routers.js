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
            return h.response(siteStatusService.checkSiteStatus(request));
        }
    }
];