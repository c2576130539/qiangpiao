const { mysql } = require('../qcloud')

module.exports = async (ctx) => {

  var res = await mysql.select('*').from('movie')

  ctx.state.data = res

}
