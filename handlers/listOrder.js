const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
  const result = await db.scan({
    TableName: process.env.ORDERS_TABLE
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Items)
  };
};
