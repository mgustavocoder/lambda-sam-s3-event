import File from '../../../src/functions/create-date-prefixed-files/file'

process.env.SOURCE_PATH = 'src-path'
process.env.DESTINATION_PATH = 'destination-path'
process.env.FILE_PATH = 'files'

describe('File model unit tests.', () => {
  test('The file model properly returns the getDatePrefixedKey.', () => {
    const objectKey: string = 'files/file.txt'
    const bucketName: string = 'test-bucket'
    const eventTime: string = '2021-10-24T20:32:55.124Z'

    const file: File = new File(objectKey, bucketName, eventTime)

    expect(file.getDatePrefixedKey()).toEqual('files/2021-10-24_20:32:55-file.txt')
  })
})
