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


