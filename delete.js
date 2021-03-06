import db from './libs/dblibs';
import handler from './libs/handlerlib';

export const main = handler(async (event, context) => {
  const dbparams = {
    TableName: process.env.tableName,
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id,
    },
  };

  await db.delete(dbparams);

  return { status: true };
});
