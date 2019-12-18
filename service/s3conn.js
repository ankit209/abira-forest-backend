const AWS = require('aws-sdk');
const s3_config = require('../config/config')['s3'];
AWS.config.update(s3_config);


const s3_bucket = new AWS.S3({ params: { Bucket: 'app-media-files' } });

module.exports = {

    async uploadToBucket(fileNameWithPath, raw_data) {
        
        const base64Image = raw_data.replace(/^data:image\/\w+;base64,/, '');
    
        const data = {
    
            Key: `${fileNameWithPath}.jpg`,
            Body: new Buffer(base64Image, 'base64'),
            ContentEncoding: 'base64',
            ACL: 'public-read',
            ContentType: 'image/jpeg'
    
        };
    
        return new Promise(function(resolve, reject) {
    
            s3_bucket.upload(data, function(err, response) {
                
                if (err) {
                    console.log('upload failed');
                    return reject(err);
                }
        
                console.log('upload successful');
                resolve(response.Location);
        
            });
    
        });
    
    }

}