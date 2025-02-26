const app = require('../app')
const request = require("supertest");

describe("Brand", () => {
  test("success create", async () => {
    let brand = {
      name: "Indomilk kid"
    }
    let response = await request(app)
    .post('/api/v1/brands')
    .send(brand);

    expect(response.status).toBe(201);
    expect(response.body.status).toBe(201);
    expect(response.body.message).toStrictEqual(`Brand successfully created`);
  })

  test("success update", async () => {
    let brand = {
      name: "Indomie Kuah"
    }
    let response = await request(app)
    .put('/api/v1/brands?id=d2ed15f5-1f47-467e-860e-1d2a805009c2')
    .send(brand);

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(200);
    expect(response.body.message).toStrictEqual(`Brand successfully updated`);
  })

  test("success delete", async () => {
    let response = await request(app)
    .delete('/api/v1/brands/d2ed15f5-1f47-467e-860e-1d2a805009c2')

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(200);
    expect(response.body.message).toStrictEqual(`Brand successfully deleted`);
  })

  test("success get by id", async () => {
    let response = await request(app)
    .get('/api/v1/brands/d2ed15f5-1f47-467e-860e-1d2a805009c2')

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(200);
  })

  test("success get all", async () => {
    let response = await request(app)
    .get('/api/v1/brands')

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(200);
  })
})