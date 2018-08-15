import express from 'express'

import users from './routes/users'

// Create express instnace
const app = express()

// Require API routes

// Import API Routes
app.use(users)

// Export the server middleware
export default {
  path: '/api',
  handler: app
}
