const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const id = event.pathParameters.id;

  const result = await db.get({
    TableName: process.env.ORDERS_TABLE,
    Key: { id }
  }).promise();

  if (!result.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Order not found' })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result.Item)
  };
};
