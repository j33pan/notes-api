import * as uuid from 'uuid';
import db from './libs/dblibs';
import handler from './libs/handlerlib';

export const main = handler(async (event, context) => {
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

    await db.put(dbparams);

    return dbparams.Item;
});