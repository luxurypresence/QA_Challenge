const { Verifier } = require('@pact-foundation/pact');
const pactBrokerUrl = "https://chriswilm.pactflow.io";
const providerBaseUrl = "https://jsonplaceholder.typicode.com/";
const pactBrokerToken = "5jxvOt6H-341zt89CgT7-w";

const options = {
  provider: 'sample_api_provider',
  providerBaseUrl,
  pactBrokerUrl,
  pactBrokerToken,
  providerVersion: '1.0.0',
  publishVerificationResult: true,
};

const verifier = new Verifier(options);
describe('Pact Verify', () => {
  test('validate contract from sample_api_consumer', () => {
    return verifier.verifyProvider();
  });
});