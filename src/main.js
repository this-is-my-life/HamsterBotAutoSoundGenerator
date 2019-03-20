const Hamster = require('./roboid-1.5.1')

// eslint-disable-next-line no-unused-vars
function startProcess () {
  connect('localhost')

  const hamster = Hamster.create()
  hamster.whells(30, 30)
}
