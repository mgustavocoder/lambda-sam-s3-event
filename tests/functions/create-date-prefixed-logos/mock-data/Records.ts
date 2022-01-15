export default [
  {
    eventVersion: '2.1',
    eventSource: 'aws:s3',
    awsRegion: 'us-east-1',
    eventTime: '2021-10-24T20:32:55.124Z',
    eventName: 'ObjectCreated:Put',
    userIdentity: {
      principalId: 'A2RCS8LD5QVOK6'
    },
    requestParameters: {
      sourceIPAddress: '201.82.35.93'
    },
    responseElements: {
      'x-amz-request-id': 'DRTXPPVW80RG5NMT',
      'x-amz-id-2': 'OTVKoDFg9tDSP/s/jEnSs4GTNQNnz3GSmWpUjDd4A3UIZBXQpsYyZoVPLuc/ODiye3AbeuQLa7LPLDH5F3gASCDG0AWGR7od'
    },
    s3: {
      s3SchemaVersion: '1.0',
      configurationId: 'f8207c39-d49c-4f1a-abf8-35210c0832a9',
      bucket: {
        name: 'source-files-bucket',
        ownerIdentity: {
          principalId: 'A2RCS8LD5QVOK6'
        },
        arn: 'arn:aws:s3:::source-files-bucket'
      },
      object: {
        key: 'files/file.txt',
        size: 377,
        eTag: '2ba40816c1ae2c8f3b97ddeaae054265',
        sequencer: '006175C2F719AFF268'
      }
    }
  },
  {
    eventVersion: '2.1',
    eventSource: 'aws:s3',
    awsRegion: 'us-east-1',
    eventTime: '2021-10-24T20:32:55.124Z',
    eventName: 'ObjectCreated:Put',
    userIdentity: {
      principalId: 'A2RCS8LD5QVOK6'
    },
    requestParameters: {
      sourceIPAddress: '201.82.35.93'
    },
    responseElements: {
      'x-amz-request-id': 'DRTXPPVW80RG5NMT',
      'x-amz-id-2': 'OTVKoDFg9tDSP/s/jEnSs4GTNQNnz3GSmWpUjDd4A3UIZBXQpsYyZoVPLuc/ODiye3AbeuQLa7LPLDH5F3gASCDG0AWGR7od'
    },
    s3: {
      s3SchemaVersion: '1.0',
      configurationId: 'f8207c39-d49c-4f1a-abf8-35210c0832a9',
      bucket: {
        name: 'source-files-bucket',
        ownerIdentity: {
          principalId: 'A2RCS8LD5QVOK6'
        },
        arn: 'arn:aws:s3:::source-files-bucket'
      },
      object: {
        key: 'files/file1.txt',
        size: 377,
        eTag: '2ba40816c1ae2c8f3b97ddeaae054265',
        sequencer: '006175C2F719AFF268'
      }
    }
  }
]
