import EmberUploader from 'ember-uploader';

export default EmberUploader.S3Uploader.reopen({
  didSign: function(response) {
    var data = {
      "acl": response.data.amazonS3acl,
      "awsaccesskeyid": response.data.amazonS3accessKeyId,
      "endpoint": response.data.uploadUrl,
      "Content-Type": this.get('_file').type,
      "key": this.get('_file').name,
      "policy": response.data.amazonS3policy,
      "signature": response.data.amazonS3signature,
      "success_action_status": "201",
      //"Filename": this.get('file').name
    };
    this.trigger('didSign', data);
    return data;
  },
  sign: function(file) {
    this.set('_file', file);
    return this._super(...arguments);
  }
});
