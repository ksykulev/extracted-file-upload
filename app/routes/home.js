import Ember from 'ember';
import uuid from 'extracted-file-upload/utils/uuid';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('document', { signUrl: `/api/${uuid()}/sign` });
  }
});
