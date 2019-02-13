import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('should GET /', async () => {
    const result = await app.httpRequest().get('/').expect(200);
    assert(result.text === 'hi, egg');
  });
});

describe('test/app/controller/home.test.ts', () => {
  it('should GET /test', async () => {
    const result = await app.httpRequest().get('/test').expect(200);
    console.log(result);
    const expectResult = {
      error_code: 0,
      message: '通过测试',
    };
    assert.deepEqual(result.body, expectResult);
  });
});
