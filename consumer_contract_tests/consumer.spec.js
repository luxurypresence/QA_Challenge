const { Pact } = require('@pact-foundation/pact');
const {like } = require('@pact-foundation/pact').Matchers;
const { getTodos } = require('./consumer');
const path = require('path');
const port = 4000;
const provider = new Pact({
  consumer: 'sample_todo_consumer',
  provider: 'sample_api_provider',
  port,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: 'INFO',
});
describe('JsonPlaceholder Sample API', () => {

  describe('When fetch request made to jsonholder todo api', () => {
    beforeAll(() =>
      provider.setup().then(() => {
        provider.addInteraction({
          uponReceiving: 'a get request to json todo api',
          withRequest: {
            method: 'GET',
            path: '/todos/1',
          },
          willRespondWith: {
            status: 200,
            body: like(
              {
                userId: 1,
                id: 1,
                title: "delectus aut autem",
                completed: false
              },
            ),
          },
        });
      })
    );
    test('should return sample todo items', async () => {
      const response = await getTodos(provider.mockService.baseUrl);
      expect(response).toMatchSnapshot();
    });
    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
    
  });
});