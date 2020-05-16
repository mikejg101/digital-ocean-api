/* eslint-disable @typescript-eslint/camelcase */
import camelCaseObjectProperties from '../src/camel-case-object-properties';

const mockPreCamelCaseObject = {
    some_var: 1,
    some_var_2: 1,
    some_mixedVar: 1,
};
const mockPostCamelCaseObject = {
    someVar: 1,
    someVar2: 1,
    someMixedVar: 1,
};

describe('camelCaseObjectProperties', () => {
    test('camel cases object properties of shallow object', () => {
        const result = camelCaseObjectProperties.shallow(mockPreCamelCaseObject);
        expect(result).toStrictEqual(mockPostCamelCaseObject);
    });
});
