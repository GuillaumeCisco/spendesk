const encryption_privkey = '/etc/letsencrypt/live/meals.com/privkey.pem';
const encryption_fullchain = '/etc/letsencrypt/live/meals.com/fullchain.pem';

const apiUrl = process.env.API_URL;

module.exports = {
    apps: {
        frontend: {
            apiUrl,
            api_port: process.env.PORT || 5000,
        },
    },
    encryption: {
        privkey: encryption_privkey,
        fullchain: encryption_fullchain,
    },
};
