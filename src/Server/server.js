const Hapi = require('@hapi/hapi');
const Routers = require('../Routers/routers');


const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    });

    Routers.routes.forEach((route) => {
        console.log(`-> Adding Endpoint: ${route.path}`);
        server.route(route);
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);

// https://github.com/jedireza/hapi-node-postgres/issues/29
    // const plugin = {
    //     register: require('hapi-node-postgres'),
    //     options: {
    //         connectionString: 'postgres://postgres:root@localhost:5432/school'
    //     }
    // };
    // await server.register(plugin, (err) => {

    //     if (err) {
    //         console.error('Failed loading "hapi-postgres" plugin');
    //     }
    //  })

};
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
