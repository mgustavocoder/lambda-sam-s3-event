import { S3 } from 'aws-sdk'
import { CopyObjectRequest } from 'aws-sdk/clients/s3'
import { S3EventRecord } from 'aws-lambda/trigger/s3'
import File from './file'
import { normalizeS3ObjectKey, getNestedValue } from './util'

export default class CopyFileService {
  constructor (private s3: any) {}

  public async copyFilesAddingDatePrefix (files: File[]) {
    return Promise.all(this.groupCopyPromises(files))
  }

  public createFileArray (Records: Array<S3EventRecord>): File[] {
    const records = Records.map(record => {
      const objectKey: string = normalizeS3ObjectKey(getNestedValue(record, 's3.object.key'))
      const bucketName: string = getNestedValue(record, 's3.bucket.name')
      const eventTime: string = record.eventTime
      return new File(objectKey, bucketName, eventTime)
    })

    return records
  }

  private groupCopyPromises (files: File[]) {
    return files.map(file => {
      const copyOptions: CopyObjectRequest = this.buildCopyOptions(file)
      return this.s3.copyObject(copyOptions).promise()
    })
  }

  private buildCopyOptions (files: File): S3.CopyObjectRequest {
    return {
      Bucket: String(process.env.DESTINATION_BUCKET_NAME),
      CopySource: `${files.bucketName}/${files.objectKey}`,
      Key: `${files.getDatePrefixedKey()}`,
      CacheControl: String(process.env.CACHE_CONTROL),
      MetadataDirective: String(process.env.METADATA_DIRECTIVE)
    }
  }
}
