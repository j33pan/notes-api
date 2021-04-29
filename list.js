import db from './libs/dblibs';
import handler from './libs/handlerlib';

export const main = handler(async (event, context) => {
  const dbparams = {
    TableName: process.env.tableName,
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': '123',
    },
  };

  const response = await db.query(dbparams);

  return response.Items;
});
