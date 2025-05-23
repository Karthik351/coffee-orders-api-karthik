const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const id = event.pathParameters.id;

  await db.delete({
    TableName: process.env.ORDERS_TABLE,
    Key: { id }
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Order deleted successfully' })
  };
};
