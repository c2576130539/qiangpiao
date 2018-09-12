const { mysql } = require('../qcloud')

module.exports = async (ctx) => {

  var label = ctx.query.wz;
  var res = await mysql('seat').where({ label })

  ctx.state.data = res

}
