'use strict';

module.exports = function(Map) {
  Map.disableRemoteMethod('exists', true);
  Map.disableRemoteMethod('findOne', true);
  Map.disableRemoteMethod('count', true);
  Map.disableRemoteMethod('createChangeStream', true);
  Map.disableRemoteMethod('updateAll', true);
  Map.disableRemoteMethod('replaceOrCreate', true);
  Map.disableRemoteMethod('replaceById', true);
  Map.disableRemoteMethod('upsertWithWhere', true);
};
