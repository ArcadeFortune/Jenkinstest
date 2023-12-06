const lib = require('./trafficlight')
module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  app.get('/trafficlight/:color', (req, res) => {
    const color = req.params.color;
    const result = lib.trafficLight(color);
    res.send(result);
  });
}
