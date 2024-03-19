import { Hono } from 'hono'

const app = new Hono()


app.post('/api/v1/user/signup', (c) => {
  return c.text('Sign up route')
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('Sign in route')
})

app.post('/api/v1/blog', (c) => {
  return c.text('Blog route')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Blog updated')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Hello Hono!')
})

export default app
