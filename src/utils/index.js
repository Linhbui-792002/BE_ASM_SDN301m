'use strict';

import _ from 'lodash';

const getInfoData = (fieldMappings, object) => {
  return _.reduce(fieldMappings, (result, field) => {
    if (_.isPlainObject(field)) {
      const [originalFieldName, newFieldName] = _.toPairs(field)[0];
      result[newFieldName] = object[originalFieldName];
    } else {
      result[field] = object[field];
    }
    return result;
  }, {});
};
export { getInfoData };
