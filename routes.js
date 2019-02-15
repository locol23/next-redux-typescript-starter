const routes = require('next-routes')

module.exports = routes()
  .add('index', '/')
  .add('about')
  .add('dynamic')
  .add('lazy')
