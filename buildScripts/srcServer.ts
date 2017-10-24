import * as express from 'express';
import * as path from 'path';
// tslint:disable-next-line:no-var-requires
const open = require('open');

const port: number = 3000;
const app: any = express();

app.get('/', (req: any, res: any) => res.sendFile(path.join(__dirname, '../src/index.html')) );

app.listen(port, (err) => {
    if (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
