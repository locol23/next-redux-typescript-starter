const config = {
  target: process.env.NODE_ENV === 'production' ? 'serverless' : 'server',
}

module.exports = config
