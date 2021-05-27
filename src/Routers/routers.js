exports.routes = [
    {
        method: 'POST',
        path: '/siteStatus',
        handler: (request, h) => {
            const requestData = request.payload;
            return h.response(
                {
                    URL: requestData.siteUrl

                }
            );
        }
    }
];