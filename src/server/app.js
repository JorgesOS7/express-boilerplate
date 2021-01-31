import server from '@configs/server.js';
import routes from '@root/router/routes';
class App {

    constructor() {
        this.app = server;
        this.port = process.env.PORT || 3000;
    }

    initApi() {
        this.initRoutes();
        this.app.listen(this.port, () => {
            console.log(`\n- localhost :: http://localhost:${this.port}\n- network :: http://192.168.0.118:${this.port}
            `);

        }); 
    }

    initRoutes() {
        this.app.use(routes);
    }
}

export default new App();