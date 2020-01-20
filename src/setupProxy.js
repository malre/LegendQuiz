

const proxy = require("http-proxy-middleware");

module.export = app => {
    app.use(
        "/api",
        proxy({
            target: "http://localhost:3000",
            changeOrigin: true
        })
    );

};