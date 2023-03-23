import { describe, expect, it } from 'vitest';
import { generateToken } from './async-example';

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
});
