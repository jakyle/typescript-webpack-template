/* tslint:disable:no-var-requires */
import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as webpack from 'webpack';
import config from '../webpack.config.dev';

const port: number = 3000;
const app: any = express();
const compiler: any = webpack(config);

(() => {

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler, {
    heartbeat: 10 * 1000, log: console.log, path: '/__webpack_hmr',
  }));
})();

app.get('/', (req: any, res: any) => res.sendFile(path.join(__dirname, '../src/index.html')) );

app.get('/users', (req: any, res: any) => {
    res.json([
        {id: 1, firstName: 'Bob', lastName: 'Smith', email: 'bob@gmail.com'},
        {id: 2, firstName: 'Tammy', lastName: 'Norton', email: 'tnorton@yahoo.com'},
        {id: 3, firstName: 'Tina', lastName: 'Lee', email: 'lee.tina@hotmail.com'},
    ]);
});

if (require.main === module) {
    const server = http.createServer(app);
    server.listen(process.env.PORT || port, () => {
      // tslint:disable-next-line:no-console
      console.log('Listening on %j', server.address());
    });
  }
