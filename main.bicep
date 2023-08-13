param location string = resourceGroup().location

resource functionApp 'Microsoft.Web/sites@2020-06-01' = {
  name: 'GitDerektTradesFunctionApp'
  location: location
  kind: 'functionapp'
  properties: {
    serverFarmId: appServicePlan.id
    clientAffinityEnabled: false
  }
}

resource appServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: 'GitDerektTradesAppServicePlan'
  location: location
  sku: {
    name: 'Y1' // Consumption plan
  }
}
