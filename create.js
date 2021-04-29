import * as uuid from 'uuid';
import AWS from 'aws-sdk';

const db = new AWS.DynamoDB.DocumentClient();

export const main = async (event, context) => {
  const data = JSON.parse(event.body);

  const dbparams = {
    TableName: process.env.tableName,
    Item: {
      userId: '123',
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now(),
    },
  };

  try {
    await db.put(dbparams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(dbparams.Item),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
