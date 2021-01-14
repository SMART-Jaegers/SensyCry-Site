import AWS from "aws-sdk"

const getBucketFile=()=>{
  Aws.config.update({
      accessKeyId: "ASIAUGAIH7HBTATBSOCG",
      secretAccessKey: "/B9VU9zG/B12ied4vT4VRg/klzTiOmYVMeGWrEZO"
  })

  let myBucket = new AWS.S3({
  params: { Bucket: 'sensycry-records'},
  region: 'us-east-1',
})

const params = {
    ACL: 'public-read',
    Key: file.name,
    ContentType: file.type,
    Body: file,
  }

  

}