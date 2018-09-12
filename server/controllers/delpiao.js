const { mysql } = require('../qcloud')

module.exports = async (ctx) => {

  var num = ctx.query.num;
  await mysql("piao").del().where({ num })

  ctx.state.data = "ok"
}