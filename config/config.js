module.exports = {
    development: {
        port: process.env.PORT || 3000
    },
    dbURL : 'mongodb://localhost:27017/forum',
    production: {},
    jwtSecret:"password"
};