const request = require("supertest");
const { app, server } = require("../index"); // Import both app and server

describe("GET /", () => {
  it("should return Hello, World!", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, World!");
  });
});

// Close server after tests
afterAll((done) => {
  server.close(done);
});

