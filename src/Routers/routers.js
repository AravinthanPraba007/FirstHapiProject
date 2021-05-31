const Joi = require("joi");
const Boom = require('@hapi/boom');
const siteStatusService = require('../Service/site_status_service');
const teacherService = require('../Service/teacher_service');
const Connection = require('../Database/index');

const preCheck = function (request, h) {
    console.log("Entered preCheck")
    if (request.payload.siteUrl.includes("https://")) {
        const error = Boom.badRequest('Cannot process the Url with https://');
        throw error;
    }

    return 'request containig Http url';
};


exports.routes = [
    {
        method: 'POST',
        path: '/siteStatus',
        // config: {
        //     validate: {
        //         payload: Joi.object({
        //             siteUrl: Joi.string().uri()
        //         })
        //     }
        // },
        options: {
            pre: [
                { method: preCheck, assign: 'm1', failAction: 'error' }
            ],
            validate: {
                payload: Joi.object({
                    siteUrl: Joi.string().uri()
                })
            },
            handler: async (request, h) => {
                console.log("Entered route")
                // const data = await siteStatusService.checkSiteStatus(request);
                // const res = h.response();
                // res.code(200);
                // res.source = data;
                // return res ;
                const data = siteStatusService.checkSiteStatus(request);
                return data;
            }
        }
    },

    {
        method: 'GET',
        path: '/teachers',
        handler: async (request, h) => {
            let result = teacherService.getAllTeachers();
            return result;
        }

    },

    {
        method: 'GET',
        path: '/teachersNativeQuery',
        handler: async (request, h) => {
            let result = teacherService.getAllTeachersthroughQuery();
            return result;
        }

    },

];