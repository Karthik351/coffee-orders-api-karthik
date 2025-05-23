☕ Coffee Orders API - Serverless REST Application
This project is a Serverless RESTful API designed to manage coffee orders. It uses AWS Lambda, API Gateway, and DynamoDB to provide a cloud-native, scalable, and cost-effective backend. It supports multiple environments (dev and prod) and automates deployment using GitHub Actions CI/CD.






📌 Features
Supports Create, Read, Update, and Delete (CRUD) operations on coffee orders.

Separate stages (dev, prod) for better environment separation.

Infrastructure as Code using the Serverless Framework.

Integrated with DynamoDB using PAY_PER_REQUEST billing mode.

Fully automated CI/CD pipeline with GitHub Actions.

Clean and modular codebase with shared logic and utilities.






🧱 Tech Stack
Compute: AWS Lambda

API Management: Amazon API Gateway

Database: Amazon DynamoDB

Infrastructure as Code: Serverless Framework

Programming Language: Node.js

CI/CD: GitHub Actions

Monitoring: AWS CloudWatch




🗂️ Project Structure
pgsql
Copy
Edit
coffee-orders-api/
├── handlers/
│   ├── createOrder.js
│   ├── getOrder.js
│   ├── listOrders.js
│   ├── updateOrder.js
│   └── deleteOrder.js
├── helpers/
│   └── response.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── serverless.yml
├── package.json
├── package-lock.json
├── README.md
└── .gitignore






🔧 Setup & Installation
Clone the repository

Install dependencies using npm install

Install the Serverless Framework globally

Configure your AWS credentials using aws configure






🌐 API Endpoints
The base URL will be generated after deployment. Example: https://<api-id>.execute-api.<region>.amazonaws.com/dev

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| POST   | /orders      | Create a new order |
| GET    | /orders/{id} | Get order by ID    |
| GET    | /orders      | List all orders    |
| PUT    | /orders/{id} | Update an order    |
| DELETE | /orders/{id} | Delete an order    |






📘 Sample Payloads
Example payload for POST /orders:
{
  "customerName": "John Doe",
  "items": [
    { "name": "Latte", "quantity": 1 },
    { "name": "Espresso", "quantity": 2 }
  ],
  "total": 12.5
}






🛠️ CI/CD with GitHub Actions
Deployment is fully automated using GitHub Actions. The workflow runs on every push to the main branch, installs dependencies, and deploys the application using the Serverless Framework.

Example:
git add .
git commit -m "feat: add new endpoint"
git push origin main






⚙️ serverless.yml Overview
Defines two stages: dev and prod.

Uses dynamic table naming: orders-${opt:stage, 'dev'}

Maps API Gateway events to Lambda functions.

Grants precise IAM permissions scoped to DynamoDB access.

Configurable environment variables (can be extended with AWS Secrets Manager).





🧪 Testing
You can test endpoints using Postman, curl.

Example for listing all orders:
curl https://<api-id>.execute-api.<region>.amazonaws.com/dev/orders





🔐 Security & Cost Optimization
Uses PAY_PER_REQUEST billing for DynamoDB to eliminate unnecessary costs.

IAM permissions follow the principle of least privilege.

Environment separation ensures isolation and safety between dev/prod.

Serverless secrets and environment configurations can be extended with AWS SSM/Secrets Manager.

👨‍💻 Author
Karthik
[www.linkedin.com/in/jayakarthikr]





📄 License
MIT License. You are free to use, modify, and distribute this project.