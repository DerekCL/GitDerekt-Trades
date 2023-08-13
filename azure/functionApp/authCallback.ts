import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { handleOAuthCallback } from "../../src/index"; // Importing logic from your existing Discord bot

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  // Call your existing Discord bot logic for handling the OAuth2 callback
  const response = await handleOAuthCallback(req);

  // Return the response
  context.res = {
    body: response,
  };
};

export default httpTrigger;
