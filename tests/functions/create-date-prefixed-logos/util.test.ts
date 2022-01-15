import { formatDate, normalizeS3ObjectKey, getNestedValue } from '../../../src/functions/create-date-prefixed-files/util'

describe('Helper functions unit tests.', () => {
  test('The formatDate function properly parse a date to the expected formated string.', () => {
    const formatedDate = formatDate(new Date('2021-10-24T20:32:55.124Z'))
    expect(formatedDate).toEqual('2021-10-24_20:32:55')
  })

  test('The normalizeS3ObjectKey function properly decode non-ASCII characters.', () => {
    const normalizedKey = normalizeS3ObjectKey('/src-path/file%20name')
    expect(normalizedKey).toEqual('/src-path/file name')
  })

  test('The getNestedValue function return undefined if key id not found.', () => {
    const nestedValue = getNestedValue({}, 's3.invalidPath.key')
    expect(nestedValue).toBeUndefined()
  })

  test('The getNestedValue function properly get the value in a 3 level deep key.', () => {
    const nestedValue = getNestedValue({
      eventSource: 'aws:s3',
      s3: {
        s3SchemaVersion: '1.0',
        bucket: {
          name: 'coupon-tools-bucket-1cqhrs1da1s78'
        },
        object: {
          key: 'logo-path/4-Logo-80x80.png'
        }
      }
    }, 's3.object.key')

    expect(nestedValue).toEqual('logo-path/4-Logo-80x80.png')
  })
})
