import db from './libs/dblibs';
import handler from './libs/handlerlib';

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const dbparams = {
    TableName: process.env.tableName,
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id,
    },
    UpdateExpression: 'SET content = :content, attachment = :attachment',
    ExpressionAttributeValues: {
      ':attachment': data.attachment || null,
      ':content': data.content || null,
    },
    ReturnValues: 'ALL_NEW',
  };

  await db.update(dbparams);

  return { status: true };
});
