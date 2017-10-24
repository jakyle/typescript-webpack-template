import * as numeral from 'numeral';
import './index.scss';

export const courseValue: string = numeral(1000).format('$0,0.00');

// tslint:disable-next-line:no-console
console.log(`I would pay ${courseValue} for this awesome course!, okay?`);
