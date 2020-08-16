var bucketName = "uploadimagekusu";
var bucketRegion = "us-east-1";
var IdentityPoolId = "us-east-1:85b04243-e738-4617-92f1-4bf03045bb60";

AWS.config.update({
region: bucketRegion,
credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
})
});

var s3 = new AWS.S3({
apiVersion: "2006-03-01",
params: { Bucket: bucketName }
});

