const { mysql } = require('../qcloud')

module.exports = async (ctx) => {

  var piao = {
    num: ctx.query.num,
    userid: ctx.query.userid,
    title: ctx.query.title,
    place: ctx.query.place,
    time: ctx.query.time,
    seat: ctx.query.seat,
    zp: ctx.query.zp
  }

  await mysql("piao").insert(piao)

  ctx.state.data = piao
}
