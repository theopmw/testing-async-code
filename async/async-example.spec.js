import { describe, expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken()', (done) => {
  it('should generate a token value', () => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  // Testing for Promises example
  it('should generate a token value', () => {
    const testUserEmail = 'test@test.com';

    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  });

  // Testing for Promises example using async
  it('should generate a token value', async () => {
    const testUserEmail = 'test@test.com';

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
  });
});
