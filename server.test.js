const request = require('supertest');
const app = "localhost:3000"

describe('GET /trafficlight/:color', () => {
  it('red', async () => {
    const response = await request(app).get('/trafficlight/red');
    expect(response.status).toBe(200);
    expect(response.text).toBe("DON'T WALK!");
  });

  
  it('orange', async () => {
    const response = await request(app).get('/trafficlight/orange');
    expect(response.status).toBe(200);
    expect(response.text).toBe("ATTENTION!");
  });

  
  it('green', async () => {
    const response = await request(app).get('/trafficlight/green');
    expect(response.status).toBe(200);
    expect(response.text).toBe("WALK!");
  })
});
