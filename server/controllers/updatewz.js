const { mysql } = require('../qcloud')

module.exports = async (ctx) => {

  var label = ctx.query.label
  var disabled = ctx.query.disabled

  var res = await mysql("seat").update( {disabled} ).where({ label })

  ctx.state.data = res

}
