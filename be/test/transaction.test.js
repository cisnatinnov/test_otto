const app = require('../app')
const request = require("supertest");

describe("Transaction", () => {
  test("success redemption", async () => {
    let transaction = {
      vouchers: [
        {
          id: "d2ed15f5-1f47-467e-860e-1d2a805009c2",
          quamtity: 2
        }
      ]
    }
    let response = await request(app)
    .post('/api/v1/transactions/redemption')
    .send(transaction);

    expect(response.status).toBe(201);
    expect(response.body.status).toBe(201);
    expect(response.body.message).toStrictEqual(`Brand successfully created`);
  })

  test("success get redemption", async () => {
    let response = await request(app)
    .get('/api/v1/transactions/redemption?transactionId=d2ed15f5-1f47-467e-860e-1d2a805009c2')

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(200);
  })
})