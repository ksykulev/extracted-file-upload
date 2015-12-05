/* global Pretender */
import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import uuid from 'extracted-file-upload/utils/uuid';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

var server = new Pretender(
  function(){
    this.get('/api/:id/sign', function(req) {
      var id = req.params.id,
          response = {
            "data": {
              "id": id,
              "contentId": uuid(),
              "uploaderId": uuid(),
              "uploadUrl": <https:\/\/[bucket].s3.amazonaws.com>,
              "amazonS3accessKeyId": <accessKey>,
              "amazonS3policy": <policy>,
              "amazonS3signature": <signature>,
              "amazonS3acl": "private"
            }
          };

      return [200, {'Content-Type':'application/json'}, JSON.stringify(response)];
    });
    this.post('https://lkbksdrop.s3.amazonaws.com', this.passthrough);
  }
);
server.handledRequest = function(verb, path, request) {
  console.log('REQUEST/RESPONSE', {
    verb: verb,
    path: path,
    responseStatus: request.status,
    request: request
  });
};

export default App;
