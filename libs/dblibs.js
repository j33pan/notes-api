import AWS from 'aws-sdk';

const dbclient = new AWS.DynamoDB.DocumentClient();

export default {
  put: (params) => dbclient.put(params).promise(),
  get: (params) => dbclient.get(params).promise(),
  query: (params) => dbclient.query(params).promise(),
  update: (params) => dbclient.update(params).promise(),
  delete: (params) => dbclient.delete(params).promise(),
};
