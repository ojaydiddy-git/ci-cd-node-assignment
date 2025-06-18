const request = require('supertest');
const app = require('../src/app');

test('GET / should return Hello DevOps', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hello DevOps!');
});
