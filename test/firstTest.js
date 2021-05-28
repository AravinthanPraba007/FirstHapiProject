const Lab = require('lab');
const Code = require('code');
const Hapi = require('@hapi/hapi');
const Routers = require('../src/Routers/routers');

// Test files must require the lab module, and export a test script
const lab = (exports.lab = Lab.script())

// shortcuts to functions from lab
const { it } = lab
const { expect } = Code;

it('Testing the /siteStatus endpoint with sucess case', async () => {
    const server = new Hapi.Server();
    server.route(Routers.routes[0]);

    const url = "http://www.goo.com/";
    const injectOptions = {
        method: 'POST',
        url: '/siteStatus',
        payload: {
            "siteUrl": url
        }
    }

    const response = await server.inject(injectOptions);
    console.log(response.payload);
    const payload = JSON.parse(response.payload || {});
    console.log(payload)
    expect(payload.statusCode).to.equal(200);
    expect(payload.message).to.equal(`${url} is UP`);

})


it('Testing the /siteStatus endpoint with pre error case', async () => {
    const server = new Hapi.Server();
    server.route(Routers.routes[0]);

    const url = "https://www.goo.com/";
    const injectOptions = {
        method: 'POST',
        url: '/siteStatus',
        payload: {
            "siteUrl": url
        }
    }

    const response = await server.inject(injectOptions);
    console.log(response.payload);
    const payload = JSON.parse(response.payload || {});
    console.log(payload)
    expect(payload.statusCode).to.equal(400);
    expect(payload.message).to.equal("Cannot process the Url with https://");

})

it('Testing the /siteStatus endpoint with curl error case', async () => {
    const server = new Hapi.Server();
    server.route(Routers.routes[0]);

    const url = "http://www.ghghoo.com/";
    const injectOptions = {
        method: 'POST',
        url: '/siteStatus',
        payload: {
            "siteUrl": url
        }
    }

    const response = await server.inject(injectOptions);
    console.log(response.payload);
    const payload = JSON.parse(response.payload || {});
    console.log(payload)
    expect(payload.errorMessage).to.equal("Error: Couldn't resolve host name");

})