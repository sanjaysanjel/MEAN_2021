module.exports = (app) => {
  const student = require('../controllers/controller.student');
  app.get('/student', student.list);
  app.post('/student', student.create);
  app.put('/student', student.update);
  app.delete('/student', student.delete);
}