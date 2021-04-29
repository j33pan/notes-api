import db from './libs/dblibs';
import handler from './libs/handlerlib';

export const main = handler(async (event, context) => {
  const dbparams = {
    TableName: process.env.tableName,
    Key: {
      userId: '123',
      noteId: event.pathParameters.id,
    },
  };

  const response = await db.get(dbparams);
  if (!response.Item) throw new Error('Item not found.');

  return response.Item;
});
