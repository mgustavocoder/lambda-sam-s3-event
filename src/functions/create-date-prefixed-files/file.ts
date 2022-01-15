import { formatDate } from './util'

export default class Logo {
  constructor (
      public objectKey: String,
      public bucketName: string,
      private eventTime: string) {
  }

  public getDatePrefixedKey () {
    const eventTime = formatDate(new Date(this.eventTime))
    const fileName = this.objectKey.split('/').pop()
    const datePrefixedKey = `${process.env.FILE_PATH}/${eventTime}-${fileName}`
    return datePrefixedKey
  }
}
