const apiUrl = process.env.API_URL || 'https://s3-eu-west-1.amazonaws.com/spx-development/contents';

module.exports = {
    apps: {
        frontend: {
            apiUrl,
        },
    },
};
