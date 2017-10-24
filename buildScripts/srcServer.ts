import * as express from 'express';
import * as path from 'path';
// tslint:disable-next-line:no-var-requires
const open = require('open');
import * as webpack from 'webpack';
import config from '../webpack.config.dev';

const port: number = 3000;
const app: any = express();

const compiler: any = webpack(config);

// tslint:disable-next-line:no-var-requires
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

app.get('/', (req: any, res: any) => res.sendFile(path.join(__dirname, '../src/index.html')) );

app.listen(port, (err: any) => {
    if (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
