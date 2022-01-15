const formatDate = (date: Date): string => {
  return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}_${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
}

const normalizeS3ObjectKey = (objectKey: string): string => {
  // Object key may have spaces or unicode non-ASCII characters.
  return decodeURIComponent(objectKey.replace(/\+/g, ' '))
}

const getNestedValue = (object: object, path: string) => {
  return path.replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.')
    .reduce((obj: any, key: any) => (obj || {})[key], object)
}

export {
  formatDate,
  normalizeS3ObjectKey,
  getNestedValue
}
