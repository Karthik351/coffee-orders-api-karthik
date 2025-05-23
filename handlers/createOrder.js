const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const body = JSON.parse(event.body || '{}');
  const id = uuidv4();

  const order = {
    id,
    customerName: body.customerName,
    coffeeType: body.coffeeType,
    size: body.size,
    createdAt: new Date().toISOString()
  };

  await db.put({
    TableName: process.env.ORDERS_TABLE,
    Item: order
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(order)
  };
};
