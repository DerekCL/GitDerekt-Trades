# GitDerekt-Trades

GitDerekt Trades is a specialized Discord trading bot designed to empower investors. Integrating seamlessly with Discord channels, it offers real-time market insights, custom alerts, and streamlined trade execution. Tailored to novice and seasoned traders, GitDerekt Trades is a reliable companion for informed investment decisions.

## Features

    Real-time Market Insights: Stay up-to-date with the latest market trends.
    Custom Alerts: Set personalized alerts for specific stocks and market conditions.
    Streamlined Trade Execution: Execute trades directly through the Discord interface.
    Azure Functions Integration: Deployed on Azure Functions for scalable and serverless architecture.
    Continuous Deployment: Easy deployment and updates via GitHub Actions.

## Requirements

    Discord Bot Token
    Azure Subscription
    Azure Storage Account (for Azure Functions)

## Deployment

1. Azure Infrastructure

Deploy the Bicep template to set up the required Azure resources:

```bash
    az deployment group create --resource-group YOUR_RESOURCE_GROUP_NAME --template-file main.bicep --parameters location=YOUR_LOCATION
```

2. Function App Configuration

Configure the Function App with the necessary environment variables, including the Discord Bot Token and AzureWebJobsStorage connection string. 3. GitHub Actions

Set up GitHub Actions for continuous deployment of both infrastructure and bot application code. Refer to the included YAML files for the exact configuration. 4. Discord Bot Setup

Create a Discord bot and invite it to your server. Configure the bot with the appropriate permissions to interact with the Discord API.

## Development

To build the TypeScript code into JavaScript:

```bash
npm run build
```

## Acknowledgments

This project was developed with collaboration and guidance from OpenAI's ChatGPT, providing valuable insights into the architecture, deployment, and overall design.
