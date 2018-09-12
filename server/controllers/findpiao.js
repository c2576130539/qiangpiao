const { mysql } = require('../qcloud')

module.exports = async (ctx) => {

  var userid = ctx.query.userid;
  var res = await mysql('piao').where({ userid })

  ctx.state.data = res

}
