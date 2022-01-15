import { S3 } from 'aws-sdk'
import { S3CreateEvent } from 'aws-lambda'
import File from './file'
import CopyFileService from './copy-file-service'

const s3: S3 = new S3({ apiVersion: '2006-03-01' })

const copyFileService: CopyFileService = new CopyFileService(s3)

export const handler = async (event: S3CreateEvent) => {
  try {
    if (!isValidEvent) {
      console.warn(JSON.stringify(event), 'Invalid S3 create event received, no records found.')
      return
    }

    const files: Array<File> = copyFileService.createFileArray(event.Records)
    console.info(`${files.length} files to copy.`)

    await copyFileService.copyFilesAddingDatePrefix(files)
    console.info(JSON.stringify(files), 'Date prefixed files created on S3.')
  } catch (error) {
    console.error(JSON.stringify(error), 'Error to create a date prefixed file.')
  }
}

function isValidEvent (event: S3CreateEvent) {
  return event && event.Records && event.Records.length > 0
}
