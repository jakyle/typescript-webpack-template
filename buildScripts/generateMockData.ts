/* This script generates mock data for locak development.
   This way you don't have to point to an actual API, but you
   can enjoy realistic, but randomized data, and rapid page
   loads due to local, static data.
*/
import * as chalk from 'chalk';
import * as fs from 'fs';
import mocker from 'mocker-data-generator';
import {schema} from './mockDataSchema';

const json = mocker()
    .schema('users', schema, {min: 3, max: 5})
    .build((data: any) => JSON.stringify(data));

fs.writeFile('./src/api/db.json', json, (err: any) => {
    if (err) {
        return console.log(chalk.red( err ));
    } else {
        console.log(chalk.green('Mock data generated.'));
    }
});
