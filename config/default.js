const apiPort = process.env.NODE_PORT || 3000;
const secureApiPort = process.env.SECURE_NODE_PORT || 3443;

const apiUrl = 'https://s3-eu-west-1.amazonaws.com/spx-development/contents/';
const encryption_privkey = './encryption/ca.key';
const encryption_fullchain = './encryption/ca.crt';
const redis_host = process.env.REDIS_HOST || 'localhost';
const redis_port = process.env.REDIS_PORT || 6379;

module.exports = {
    appName: 'Spendesk',
    apps: {
        frontend: {
            apiUrl,
            api_port: apiPort,
            secure_api_port: secureApiPort,
            baseName: {
                production: '/',
                debug: '/meals/build/ssr/client/',
            },
            meta: {
                description: 'Spendesk',
            },
        },
    },
    encryption: {
        privkey: encryption_privkey,
        fullchain: encryption_fullchain,
    },
    redis: {
        host: redis_host,
        redis: redis_port,
    },
};
