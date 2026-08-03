# Practical Interview Task: IT Specialist & Team Manager

## Purpose

This practical task is designed to evaluate technical ability, IT operations thinking, cybersecurity awareness, AWS/cloud knowledge, CI/CD understanding, documentation quality, troubleshooting skills, and team management approach.

This is not only a coding task. We want to see how you work in a realistic IT environment.

## Time Limit

Recommended time: 1 to 2 hours.

## Important Rules

- Do not use any real company credentials.
- Do not connect to any production systems.
- You may use documentation and normal online resources.
- Submit your completed folder as a ZIP file before leaving.
- Add comments where you think something is important.

## Provided Files

- `app/` - small sample Node.js web application with a broken Dockerfile
- `pipeline/ci-cd-pipeline.yml` - basic CI/CD pipeline with intentional mistakes
- `onboarding-request.md` - sample new employee onboarding request
- `incident-report.md` - sample incident scenario
- `it-asset-list.csv` - simple IT asset list
- `security-issues.md` - sample security problems

## Your Tasks

### 1. Fix and Run the Application

Review the app and Dockerfile.

Required output:

- Fix the Dockerfile.
- Make the app run locally using Docker.
- Add local run instructions.
- Mention what you fixed.

Expected commands may look like:

```bash
cd app
docker build -t interview-app .
docker run -p 8080:3000 interview-app
```

The app should be reachable at:

```text
http://localhost:8080
```

### 2. Improve the CI/CD Pipeline

Review `pipeline/ci-cd-pipeline.yml`.

Required output:

- Remove insecure credential handling.
- Add a proper pipeline structure.
- Include test/validation, Docker build, ECR push, and deployment preparation.
- Explain how AWS credentials/secrets should be handled securely.
- Mention rollback or deployment safety.

### 3. Prepare an AWS Deployment Plan

Create a file called:

```text
aws-deployment-plan.md
```

Include:

- AWS services you would use
- ECR/ECS/EC2/Elastic Beanstalk choice
- IAM permissions
- Security groups/networking
- CloudWatch logs/monitoring
- Secrets/environment variables
- Rollback approach

### 4. Incident Troubleshooting

Use `incident-report.md` and create:

```text
incident-troubleshooting.md
```

Include checks for:

- CI/CD pipeline logs
- AWS deployment status
- ECR image tags
- Container/server logs
- DNS
- SSL/TLS
- Firewall/security groups
- Load balancer health checks
- Recent manual changes
- Root cause analysis

### 5. Employee Onboarding

Use `onboarding-request.md` and create:

```text
employee-onboarding-checklist.md
```

Include:

- Account creation
- Microsoft 365 setup
- MFA
- Laptop preparation
- VPN
- Shared folder permissions
- Internal tools access
- Security handover
- Repeatable checklist process

### 6. Security Review

Use `security-issues.md` and `it-asset-list.csv` and create:

```text
security-review.md
```

Include:

- Risk
- Impact
- Priority
- Recommended fix
- Responsible owner/team

### 7. Team Management Action Plan

Create:

```text
team-management-action-plan.md
```

Scenario:

A junior IT team member made a manual production change without approval and deployments started failing.

Include:

- Immediate technical response
- How to restore service
- How to communicate with the junior team member
- How to avoid blame culture
- How to prevent future manual production changes
- Approval process or change management improvements
- Documentation/training recommendations

### 8. Final Summary

Update this README or create a new `candidate-summary.md` explaining:

- What you fixed
- What you improved
- What risks you found
- What you would prioritize in the first 30 days

## Final Submission Structure

Your final folder should look like this:

```text
interview-task-submission/
├── app/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   ├── server.js
│   └── test.js
├── pipeline/
│   └── ci-cd-pipeline.yml
├── aws-deployment-plan.md
├── incident-troubleshooting.md
├── employee-onboarding-checklist.md
├── security-review.md
├── team-management-action-plan.md
└── candidate-summary.md
```
