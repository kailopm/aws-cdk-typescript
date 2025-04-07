import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkTypescriptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // L1 and L2 Constructs of an S3 Bucket
    const level1Bucket = new cdk.aws_s3.CfnBucket(this, 'MyLevel1Bucket', {
      versioningConfiguration: {
        status: 'Enabled',
      }
    });
    const level2Bucket = new cdk.aws_s3.Bucket(this, 'MyLevel2Bucket', {
      versioned: true,
    });
  }
}