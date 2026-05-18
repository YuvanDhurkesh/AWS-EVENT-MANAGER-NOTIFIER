# Event Notification System using AWS Serverless Services

A fully serverless event announcement platform built using AWS S3, API Gateway, Lambda, and SNS.

Users can:
- Subscribe using email
- Create new events
- Receive automated email notifications
- Store event details in Amazon S3

---

# Architecture

## Services Used

- Amazon S3
- Amazon API Gateway
- AWS Lambda
- Amazon SNS
- IAM
- CloudWatch

---

# Architecture Flow

1. Static frontend website hosted on Amazon S3
2. User interacts with the website
3. API Gateway receives HTTPS requests
4. Lambda functions process backend logic
5. SNS manages subscribers and sends notifications
6. Event details are stored in S3 (`events.json`)

---

# Features

- Serverless architecture
- Static website hosting
- Event creation
- Email subscription system
- SNS email notifications
- Event data persistence in S3
- REST API integration
- Low-cost AWS cloud solution

---

# Project Structure

```bash
event-notification-system/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── events.json
│
├── lambda/
│   ├── subscription-lambda.py
│   └── event-registration-lambda.py
│
├── architecture.png
│
└── README.md
```

---

# Frontend Setup

## Files

### index.html
Frontend UI for:
- Event creation
- Email subscription

### style.css
Basic styling for the application.

### script.js
Handles API requests to API Gateway.

### events.json
Stores all event details.

---

# AWS Setup

## 1. Create S3 Bucket

- Enable static website hosting
- Upload frontend files
- Make bucket public

---

## 2. Create SNS Topic

Create:
```text
event-topic
```

---

## 3. Create Lambda Functions

### subscription-lambda
Responsible for:
- Adding email subscribers to SNS topic

### event-registration-lambda
Responsible for:
- Creating events
- Updating `events.json`
- Sending SNS notifications

---

## 4. Create API Gateway

Create REST APIs:

| Endpoint | Method | Lambda |
|---|---|---|
| /subscribe | POST | subscription-lambda |
| /new-event | POST | event-registration-lambda |

Enable CORS.

Deploy API to:
```text
prod
```

---

# IAM Permissions

## subscription-lambda

Attach:
```text
AmazonSNSFullAccess
```

## event-registration-lambda

Attach:
```text
AmazonSNSFullAccess
AmazonS3FullAccess
```

---

# Example API Request

## Subscribe

```json
{
  "email": "user@example.com"
}
```

---

## Create Event

```json
{
  "title": "AWS Workshop",
  "date": "2026-05-20",
  "description": "Cloud Computing Session"
}
```

---

# Screenshots

Add:
- Architecture diagram
- S3 website
- API Gateway
- Lambda functions
- SNS Topic
- Email notification screenshots

---

# Future Improvements

- DynamoDB integration
- Authentication using Cognito
- Event listing UI
- Admin dashboard
- CI/CD pipeline
- CloudFront integration
- HTTPS custom domain
- Terraform deployment

---

# Learning Outcomes

This project demonstrates:
- Serverless application development
- Event-driven architecture
- AWS cloud integration
- REST API development
- Cloud storage management
- SNS notification systems

---

# Author

Yuvan Dhurkesh SJ

AWS Certified Cloud Practitioner  
AWS Certified Solutions Architect – Associate  
AWS Certified Developer – Associate
