const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  const body = JSON.parse(event.body || '{}');

  const params = {
    TableName: process.env.ORDERS_TABLE,
    Key: { id },
    UpdateExpression: 'set customerName = :n, coffeeType = :c, size = :s',
    ExpressionAttributeValues: {
      ':n': body.customerName,
      ':c': body.coffeeType,
      ':s': body.size
    },
    ReturnValues: 'ALL_NEW'
  };

  const result = await db.update(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Attributes)
  };
};
