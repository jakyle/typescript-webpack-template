import * as compression from 'compression';
import * as express from 'express';
import * as path from 'path';
// tslint:disable-next-line:no-var-requires
const open = require('open');
import * as webpack from 'webpack';
import config from '../webpack.config.dev';

const port: number = 3000;
const app: any = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req: any, res: any) => res.sendFile(path.join(__dirname, '../dist/index.html')) );

app.get('/users', (req: any, res: any) => {
    res.json([
        {id: 1, firstName: 'Bob', lastName: 'Smith', email: 'bob@gmail.com'},
        {id: 2, firstName: 'Tammy', lastName: 'Norton', email: 'tnorton@yahoo.com'},
        {id: 3, firstName: 'Tina', lastName: 'Lee', email: 'lee.tina@hotmail.com'},
    ]);
});

app.listen(port, (err: any) => {
    if (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
