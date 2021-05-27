const Hapi = require('@hapi/hapi');
const Routers = require('../Routers/routers')

const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    });

    Routers.routes.forEach( (route) => {
        console.log(`adding endpoint ${route.path}`);
        server.route(route);
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);

};
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
