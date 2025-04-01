import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';

/**
 * Lambda function handler to process HTTP requests and respond with detailed request information.
 *
 * @param event - The event object representing the HTTP request.
 * @returns A promise that resolves to the HTTP response.
 */
export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  // Extracting relevant information from the event object
  const { headers, queryStringParameters, body, requestContext } = event;

  // Constructing the response object with detailed request information
  const responseBody = {
    message: 'Request received successfully',
    requestDetails: {
      method: requestContext.http.method,
      path: requestContext.http.path,
      headers,
      queryStringParameters,
      body,
    },
  };

  // Returning the response with a 200 status code and JSON body
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(responseBody, null, 2),
  };
};
