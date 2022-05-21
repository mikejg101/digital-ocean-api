import camelCase from 'camelcase';

const camelCaseObjectProperties = <T>(obj: Record<string, any>): T => {
    const newObject: any = {};
    for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            newObject[camelCase(prop)] = obj[prop];
        }
    }
    return newObject;
};

export default {
    shallow: camelCaseObjectProperties,
};
