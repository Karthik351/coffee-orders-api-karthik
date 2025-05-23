# ☕ Coffee Orders API (Serverless - AWS Lambda + DynamoDB)

A production-ready **Serverless REST API** built using **AWS Lambda**, **API Gateway**, and **DynamoDB**, deployed via the **Serverless Framework** with **GitHub Actions** CI/CD. The project supports full CRUD operations for managing coffee orders, follows Infrastructure as Code (IaC) practices, and is structured for scalability and maintainability.

---

## ✅ Key Features

- ⚡ Event-driven microservices architecture.
- 🗃️ Data persistence using DynamoDB with `PAY_PER_REQUEST` billing mode.
- 🧪 Full CRUD support: create, retrieve, update, and delete orders.
- 🌍 Multi-stage deployment: `dev` and `prod`.
- 🤖 Automated CI/CD pipeline using GitHub Actions.
- 📦 Clean folder structure with modular handlers and shared helpers.
- 📈 Ready for production workloads with scalable AWS services.

---

## 🏗️ Architecture Overview

```
Client --> API Gateway --> AWS Lambda --> DynamoDB
                        |
                     Serverless.yml (IaC)
                        |
                GitHub Actions (CI/CD)
```

- **API Gateway**: Acts as a REST interface.
- **AWS Lambda**: Stateless functions written in JavaScript.
- **DynamoDB**: NoSQL database used to store order records.
- **Serverless Framework**: Manages infrastructure and deployments.
- **GitHub Actions**: Automates testing and deployment per branch/stage.

---

## 🛠️ Tech Stack

| Layer         | Technology          |
|---------------|---------------------|
| Runtime       | Node.js (JavaScript)|
| IaC           | Serverless Framework|
| CI/CD         | GitHub Actions      |
| API Gateway   | REST API            |
| Compute       | AWS Lambda          |
| Database      | AWS DynamoDB        |
| Monitoring    | CloudWatch (logs)   |
| Stages        | dev, prod           |

---

## 📁 Project Structure

```
coffee-orders-api/
├── handlers/
│   ├── createOrder.js       # POST /orders
│   ├── getOrder.js          # GET /orders/{id}
│   ├── listOrders.js        # GET /orders
│   ├── updateOrder.js       # PUT /orders/{id}
│   └── deleteOrder.js       # DELETE /orders/{id}
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD pipeline
├── serverless.yml           # Infra-as-Code config
├── package.json             # Dependencies
├── package-lock.json        # Version lock
├── README.md                # Project documentation
└── .gitignore
```

---

## 🔗 API Endpoints

Base URL (example):  
`https://<api-id>.execute-api.<region>.amazonaws.com/{stage}`

| Method | Endpoint          | Description            |
|--------|-------------------|------------------------|
| POST   | `/orders`         | Create a new order     |
| GET    | `/orders/{id}`    | Retrieve a specific order |
| GET    | `/orders`         | List all orders        |
| PUT    | `/orders/{id}`    | Update an existing order |
| DELETE | `/orders/{id}`    | Delete an order        |

---

## 📦 Sample Request Payload

### ➕ Create Order (POST `/orders`)
```json
{
  "customerName": "Alice Smith",
  "items": [
    { "name": "Cappuccino", "quantity": 1 },
    { "name": "Mocha", "quantity": 2 }
  ],
  "total": 11.75
}
```

---

## 🚀 Deployment Instructions

### Install Dependencies
```bash
npm install
```

### Deploy to Dev
```bash
npx serverless deploy --stage dev
```

### Deploy to Prod
```bash
npx serverless deploy --stage prod
```

### Remove Dev Stack
```bash
npx serverless remove --stage dev
```

---

## 🛡️ serverless.yml Highlights

```yaml
resources:
  Resources:
    OrdersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: orders-${opt:stage, 'dev'}
        AttributeDefinitions:
          - AttributeName: id
            AttributeType: S
        KeySchema:
          - AttributeName: id
            KeyType: HASH
        BillingMode: PAY_PER_REQUEST
```

- Stage-aware table naming (e.g., `orders-dev`, `orders-prod`)
- No capacity provisioning required
- Infra is managed with version control

---

## ⚙️ CI/CD (GitHub Actions)

GitHub Actions handles automated deployment for every push to the `main` branch.

**Workflow Steps:**
- Checkout code
- Install dependencies
- Configure AWS credentials via secrets
- Run `serverless deploy` to target stage

Example Workflow File (`.github/workflows/deploy.yml`):
```yaml
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - uses: serverless/github-action@v3.1
        with:
          args: deploy --stage prod
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

---

## 🧪 Testing the API

Use tools like **Postman** or **curl** to test endpoints.

```bash
curl -X POST https://<api-id>.execute-api.amazonaws.com/dev/orders \
     -H "Content-Type: application/json" \
     -d '{"customerName":"Karthik","items":[{"name":"Latte","quantity":1}],"total":5.00}'
```

---

## 🧠 Best Practices Followed

- ✅ Modular handler structure for clarity
- ✅ Error handling with proper HTTP responses
- ✅ Separation of environments via stages
- ✅ Git commit messages follow Conventional Commits (`feat:`, `chore:`, `ci:` etc.)

---


---

## 👤 Author

**Karthik**  
[GitHub](https://github.com/Karthik351)  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
