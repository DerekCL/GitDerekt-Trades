import { AzureFunction, Context } from "@azure/functions";
import { startBot } from "./bot";

// dotenv is a package that allows us to store sensitive information in a .env file
// this code is commented out for production, but you can uncomment it for local testing
// require("dotenv").config();

const httpTrigger: AzureFunction = async function (
  context: Context
): Promise<void> {
  startBot(context);
};

export default httpTrigger;
