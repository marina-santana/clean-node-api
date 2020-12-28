import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/api/signup')
      .send({
        name: 'Marina',
        email: 'marina@mail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
