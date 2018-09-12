const { mysql } = require('../qcloud')

module.exports = async (ctx) => {

  var num = ctx.query.num;
  var res = await mysql('piao').where({ num })

  ctx.state.data = res

}
