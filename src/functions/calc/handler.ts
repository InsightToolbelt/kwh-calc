import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const calc: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { watt, hours, kwhPrice } = event.body;
  // 4 x (200 / 1000) * 0,22 = 0,176
  const cost = hours * (watt / 1000) * kwhPrice;
  const roundedCost = cost.toFixed(2);
  return formatJSONResponse({
    message: `Hello, running your device costs ${roundedCost}`,
    event,
  });
}

export const main = middyfy(calc);
