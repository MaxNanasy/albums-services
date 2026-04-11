import { setGlobalOptions } from 'firebase-functions';
import { HttpsError, onCall } from 'firebase-functions/https';
import * as logger from 'firebase-functions/logger';

setGlobalOptions({
  maxInstances: 10,
  region: 'us-west2',
});

/**
 * @param {import('firebase-functions/https').CallableRequest<unknown>} request
 * @returns {never}
 */
function firebaseSpotifyAuthBridgeHandler(request) {
  logger.info('firebaseSpotifyAuthBridge callable called', {
    uid: request.auth?.uid ?? null,
  });

  throw new HttpsError('unimplemented', 'Not implemented');
}

export const firebaseSpotifyAuthBridge = onCall(
  { invoker: 'public' },
  firebaseSpotifyAuthBridgeHandler,
);
