const app = require('../app')
const request = require("supertest");

describe("Voucher", () => {
  test("success create", async () => {
    let transaction = {
      brand_id: "a4b695c2-6242-484c-9569-e6d8c799e2a8",
      name: "Diskon 10%",
      point_value: 10
    }
    let response = await request(app)
    .post('/api/v1/vouchers')
    .send(transaction);

    expect(response.status).toBe(201);
    expect(response.body.status).toBe(201);
    expect(response.body.message).toStrictEqual(`Voucher successfully created`);
  })

  test("success update", async () => {
    let transaction = {
      brand_id: "a4b695c2-6242-484c-9569-e6d8c799e2a8",
      name: "Diskon 15%",
      point_value: 15
    }
    let response = await request(app)
    .put('/api/v1/vouchers?id=7fd0e8ae-0373-4026-a5a9-eacd962bd353')
    .send(transaction);

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(200);
    expect(response.body.message).toStrictEqual(`Voucher successfully updated`);
  })

  test("success delete", async () => {
    let response = await request(app)
    .delete('/api/v1/vouchers/7fd0e8ae-0373-4026-a5a9-eacd962bd353')

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(200);
    expect(response.body.message).toStrictEqual(`Voucher successfully deleted`);
  })

  test("success get by id", async () => {
    let response = await request(app)
    .get('/api/v1/vouchers/7fd0e8ae-0373-4026-a5a9-eacd962bd353')

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(200);
  })

  test("success get by brand id", async () => {
    let response = await request(app)
    .get('/api/v1/vouchers/brand/a4b695c2-6242-484c-9569-e6d8c799e2a8')

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(200);
  })

  test("success get all", async () => {
    let response = await request(app)
    .get('/api/v1/vouchers')

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(200);
  })
})