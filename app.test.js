const request = require("supertest");
const app = require("./app");

describe("Magic 8-Ball API", () => {
  test("GET / returns the application message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Magic 8-Ball API");
  });

  test("GET /health returns status ok", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  test("GET /ask returns the question and an answer", async () => {
    const response = await request(app).get("/ask?question=Will it work");

    expect(response.status).toBe(200);
    expect(response.body.question).toBe("Will it work");
    expect(typeof response.body.answer).toBe("string");
    expect(response.body.answer.length).toBeGreaterThan(0);
  });
});