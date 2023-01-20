import { isObject } from 'lodash';
import { buildGetKeys } from './getKeys';

const getKeys = buildGetKeys(isObject);

export { getKeys };