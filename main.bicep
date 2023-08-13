param location string = resourceGroup().location
param discordBotToken string // You can pass this as a parameter during deployment

resource functionApp 'Microsoft.Web/sites@2020-06-01' = {
  name: 'GitDerektTradesFunctionApp'
  location: location
  kind: 'functionapp'
  properties: {
    serverFarmId: appServicePlan.id
    clientAffinityEnabled: false
    siteConfig: {
      appSettings: [
        {
          name: 'DISCORD_BOT_TOKEN'
          value: discordBotToken
        }
      ]
    }
  }
}

resource appServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: 'GitDerektTradesAppServicePlan'
  location: location
  sku: {
    name: 'Y1' // Consumption plan
  }
}
