# AWS Lambda S3 Trigger with SAM

Lambda function that receives an event when a txt file is created on the S3 source bucket, under the config folder, then make a copy of this file to the destination folder, renaming the file to include the datetime of the file creating event as preffix.

## Requirement
SAM CLI, version 1.34.1


