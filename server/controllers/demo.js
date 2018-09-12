const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
  var book = {
    id: '1',
    name: '22',
    price: '333'
  }

  //await mysql("book").insert(book)


  // 改
  var id = '1'
  await mysql("book").update({ price: 666 }).where({ id })

  // 查
  var res = await mysql("book").where({ id }).first()

  // 删
  //await mysql("Book").del().where({ id })


  ctx.state.data = res

  /*
    await mysql(tbname).insert(book)
      .then(res => {
        ctx.state.code = 0
        ctx.state.data = res
      })
      .catch(err => {
        ctx.state.code = -1
        throw new Error(err)
      })
    */
  // var res = await mysql('cSessionInfo').select('*')
  //   .then(res => {
  //     ctx.state.code = 0
  //     ctx.state.data = res
  //   })
  //   .catch(err => {
  //     ctx.state.code = -1
  //     throw new Error(err)
  //   })
}