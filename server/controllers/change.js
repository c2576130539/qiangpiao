const { mysql } = require('../qcloud')

module.exports = async (ctx) => {

  var res = await mysql.select('*').from('seat')

  ctx.state.data = res

}