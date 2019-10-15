const withTypescript = require('@zeit/next-typescript')

const config = {
  target: process.env.NODE_ENV === 'production' ? 'serverless' : 'server',
}

module.exports = withTypescript(config)
