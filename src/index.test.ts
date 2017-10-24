 import {expect} from 'chai';
 import 'mocha';
 import { courseValue } from './index';

 describe('course value', () => {
    it('should pass', () => {
        const result = courseValue;
        expect(result).to.equal('$1,000.00');
    });
});
