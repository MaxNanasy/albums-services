// @ts-check

import { setGlobalOptions } from 'firebase-functions';
import { onRequest } from 'firebase-functions/https';
import * as logger from 'firebase-functions/logger';

setGlobalOptions({
  maxInstances: 10,
  region: 'us-west2',
});

/** @type {(request: import('firebase-functions/https').Request, response: import('express').Response<unknown, Record<string, unknown>>) => void} */
const firebaseSpotifyAuthBridgeHandler = (request, response) => {
  logger.info('firebaseSpotifyAuthBridge endpoint called', {
    method: request.method,
    path: request.path,
  });

  response.status(501).send('Not implemented');
};

export const firebaseSpotifyAuthBridge = onRequest(firebaseSpotifyAuthBridgeHandler);
