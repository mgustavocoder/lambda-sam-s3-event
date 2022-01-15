import CopyFileService from '../../../src/functions/create-date-prefixed-files/copy-file-service'
import records from './mock-data/Records'

const s3Mock = {
  copyObject: jest.fn().mockReturnValue({ promise: jest.fn })
}

const copyFileService = new CopyFileService(s3Mock)

describe('CopyFileService service unit tests.', () => {
  test('Test copyObject function is called once when one record in the event.', async () => {
    records.shift()
    const fileArray = copyFileService.createFileArray(records)

    await copyFileService.copyFilesAddingDatePrefix(fileArray)

    expect(s3Mock.copyObject).toHaveBeenCalledTimes(1)
  })

  test('Test copyObject function is called twice when two records in the event.', async () => {
    const fileArray = copyFileService.createFileArray(records)

    await copyFileService.copyFilesAddingDatePrefix(fileArray)

    expect(s3Mock.copyObject).toHaveBeenCalledTimes(2)
  })
})
