import Ember from 'ember';
import DocS3Uploader from 'extracted-file-upload/utils/doc-s3-uploader';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  url: undefined, //passed in
  filesDidChange: function(files) {
    var signUrl = this.get('url');

    var uploader = DocS3Uploader.create({
      url: signUrl,
      headers: {
        'bearer' : 'secret_api_access_token'
      }
    });

    uploader.on('didUpload', function(response) {
      // S3 will return XML with url
      console.log(response);
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0]);
    }
  }
});
