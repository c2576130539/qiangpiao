// 教程[图片]https://www.jianshu.com/p/072ff89e723c
const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
  var book = {
    id: 4,
    name: '22',
    price: '333'
  }

  var seat = 
           [
        {
          "i": 0,
          "columnIndex": 6,
          "loveFlag": 0,
          "label": "1排11座",
          "rowIndex": 1,
          "id": 4520147,
          "disabled": false
        },
        {
          "i": 1,
          "columnIndex": 7,
          "loveFlag": 0,
          "label": "1排10座",
          "rowIndex": 1,
          "id": 4520245,
          "disabled": false
        },
        {
          "i": 2,
          "columnIndex": 8,
          "loveFlag": 0,
          "label": "1排9座",
          "rowIndex": 1,
          "id": 4520170,
          "disabled": false
        },
        {
          "i": 3,
          "columnIndex": 9,
          "loveFlag": 0,
          "label": "1排8座",
          "rowIndex": 1,
          "id": 4520146,
          "disabled": false
        },
        {
          "i": 4,
          "columnIndex": 10,
          "loveFlag": 0,
          "label": "1排7座",
          "rowIndex": 1,
          "id": 4520213,
          "disabled": false
        },
        {
          "i": 5,
          "columnIndex": 11,
          "loveFlag": 0,
          "label": "1排6座",
          "rowIndex": 1,
          "id": 4520185,
          "disabled": false
        },
        {
          "i": 6,
          "columnIndex": 12,
          "loveFlag": 0,
          "label": "1排5座",
          "rowIndex": 1,
          "id": 4520169,
          "disabled": false
        },
        {
          "i": 7,
          "columnIndex": 13,
          "loveFlag": 0,
          "label": "1排4座",
          "rowIndex": 1,
          "id": 4520168,
          "disabled": false
        },
        {
          "i": 8,
          "columnIndex": 14,
          "loveFlag": 0,
          "label": "1排3座",
          "rowIndex": 1,
          "id": 4520241,
          "disabled": false
        },
        {
          "i": 9,
          "columnIndex": 15,
          "loveFlag": 0,
          "label": "1排2座",
          "rowIndex": 1,
          "id": 4520142,
          "disabled": false
        },
        {
          "i": 10,
          "columnIndex": 16,
          "loveFlag": 0,
          "label": "1排1座",
          "rowIndex": 1,
          "id": 4520159,
          "disabled": false
        },
        {
          "i": 11,
          "columnIndex": 6,
          "loveFlag": 0,
          "label": "2排11座",
          "rowIndex": 2,
          "id": 4520192,
          "disabled": false
        },
        {
          "i": 12,
          "columnIndex": 7,
          "loveFlag": 0,
          "label": "2排10座",
          "rowIndex": 2,
          "id": 4520240,
          "disabled": false
        },
        {
          "i": 13,
          "columnIndex": 8,
          "loveFlag": 0,
          "label": "2排9座",
          "rowIndex": 2,
          "id": 4520230,
          "disabled": false
        },
        {
          "i": 14,
          "columnIndex": 9,
          "loveFlag": 0,
          "label": "2排8座",
          "rowIndex": 2,
          "id": 4520148,
          "disabled": false
        },
        {
          "i": 15,
          "columnIndex": 10,
          "loveFlag": 0,
          "label": "2排7座",
          "rowIndex": 2,
          "id": 4520216,
          "disabled": false
        },
        {
          "i": 16,
          "columnIndex": 11,
          "loveFlag": 0,
          "label": "2排6座",
          "rowIndex": 2,
          "id": 4520210,
          "disabled": false
        },
        {
          "i": 17,
          "columnIndex": 12,
          "loveFlag": 0,
          "label": "2排5座",
          "rowIndex": 2,
          "id": 4520217,
          "disabled": false
        },
        {
          "i": 18,
          "columnIndex": 13,
          "loveFlag": 0,
          "label": "2排4座",
          "rowIndex": 2,
          "id": 4520162,
          "disabled": false
        },
        {
          "i": 19,
          "columnIndex": 14,
          "loveFlag": 0,
          "label": "2排3座",
          "rowIndex": 2,
          "id": 4520243,
          "disabled": false
        },
        {
          "i": 20,
          "columnIndex": 15,
          "loveFlag": 0,
          "label": "2排2座",
          "rowIndex": 2,
          "id": 4520165,
          "disabled": false
        },
        {
          "i": 21,
          "columnIndex": 16,
          "loveFlag": 0,
          "label": "2排1座",
          "rowIndex": 2,
          "id": 4520172,
          "disabled": false
        },
        {
          "i": 22,
          "columnIndex": 6,
          "loveFlag": 0,
          "label": "3排11座",
          "rowIndex": 3,
          "id": 4520164,
          "disabled": false
        },
        {
          "i": 23,
          "columnIndex": 7,
          "loveFlag": 0,
          "label": "3排10座",
          "rowIndex": 3,
          "id": 4520239,
          "disabled": false
        },
        {
          "i": 24,
          "columnIndex": 8,
          "loveFlag": 0,
          "label": "3排9座",
          "rowIndex": 3,
          "id": 4520155,
          "disabled": false
        },
        {
          "i": 25,
          "columnIndex": 9,
          "loveFlag": 0,
          "label": "3排8座",
          "rowIndex": 3,
          "id": 4520226,
          "disabled": false
        },
        {
          "i": 26,
          "columnIndex": 10,
          "loveFlag": 0,
          "label": "3排7座",
          "rowIndex": 3,
          "id": 4520229,
          "disabled": false
        },
        {
          "i": 27,
          "columnIndex": 11,
          "loveFlag": 0,
          "label": "3排6座",
          "rowIndex": 3,
          "id": 4520197,
          "disabled": false
        },
        {
          "i": 28,
          "columnIndex": 12,
          "loveFlag": 0,
          "label": "3排5座",
          "rowIndex": 3,
          "id": 4520223,
          "disabled": false
        },
        {
          "i": 29,
          "columnIndex": 13,
          "loveFlag": 0,
          "label": "3排4座",
          "rowIndex": 3,
          "id": 4520238,
          "disabled": false
        },
        {
          "i": 30,
          "columnIndex": 14,
          "loveFlag": 0,
          "label": "3排3座",
          "rowIndex": 3,
          "id": 4520167,
          "disabled": false
        },
        {
          "i": 31,
          "columnIndex": 15,
          "loveFlag": 0,
          "label": "3排2座",
          "rowIndex": 3,
          "id": 4520144,
          "disabled": false
        },
        {
          "i": 32,
          "columnIndex": 16,
          "loveFlag": 0,
          "label": "3排1座",
          "rowIndex": 3,
          "id": 4520143,
          "disabled": false
        },
        {
          "i": 33,
          "columnIndex": 6,
          "loveFlag": 0,
          "label": "4排11座",
          "rowIndex": 4,
          "id": 4520166,
          "disabled": false
        },
        {
          "i": 34,
          "columnIndex": 7,
          "loveFlag": 0,
          "label": "4排10座",
          "rowIndex": 4,
          "id": 4520141,
          "disabled": false
        },
        {
          "i": 35,
          "columnIndex": 8,
          "loveFlag": 0,
          "label": "4排9座",
          "rowIndex": 4,
          "id": 4520228,
          "disabled": false
        },
        {
          "i": 36,
          "columnIndex": 9,
          "loveFlag": 0,
          "label": "4排8座",
          "rowIndex": 4,
          "id": 4520202,
          "disabled": false
        },
        {
          "i": 37,
          "columnIndex": 10,
          "loveFlag": 0,
          "label": "4排7座",
          "rowIndex": 4,
          "id": 4520244,
          "disabled": false
        },
        {
          "i": 38,
          "columnIndex": 11,
          "loveFlag": 0,
          "label": "4排6座",
          "rowIndex": 4,
          "id": 4520233,
          "disabled": false
        },
        {
          "i": 39,
          "columnIndex": 12,
          "loveFlag": 0,
          "label": "4排5座",
          "rowIndex": 4,
          "id": 4520196,
          "disabled": false
        },
        {
          "i": 40,
          "columnIndex": 13,
          "loveFlag": 0,
          "label": "4排4座",
          "rowIndex": 4,
          "id": 4520163,
          "disabled": false
        },
        {
          "i": 41,
          "columnIndex": 14,
          "loveFlag": 0,
          "label": "4排3座",
          "rowIndex": 4,
          "id": 4520247,
          "disabled": false
        },
        {
          "i": 42,
          "columnIndex": 15,
          "loveFlag": 0,
          "label": "4排2座",
          "rowIndex": 4,
          "id": 4520208,
          "disabled": false
        },
        {
          "i": 43,
          "columnIndex": 16,
          "loveFlag": 0,
          "label": "4排1座",
          "rowIndex": 4,
          "id": 4520214,
          "disabled": false
        },
        {
          "i": 44,
          "columnIndex": 6,
          "loveFlag": 0,
          "label": "5排11座",
          "rowIndex": 5,
          "id": 4520178,
          "disabled": false
        },
        {
          "i": 45,
          "columnIndex": 7,
          "loveFlag": 0,
          "label": "5排10座",
          "rowIndex": 5,
          "id": 4520224,
          "disabled": false
        },
        {
          "i": 46,
          "columnIndex": 8,
          "loveFlag": 0,
          "label": "5排9座",
          "rowIndex": 5,
          "id": 4520156,
          "disabled": false
        },
        {
          "i": 47,
          "columnIndex": 9,
          "loveFlag": 0,
          "label": "5排8座",
          "rowIndex": 5,
          "id": 4520171,
          "disabled": false
        },
        {
          "i": 48,
          "columnIndex": 10,
          "loveFlag": 0,
          "label": "5排7座",
          "rowIndex": 5,
          "id": 4520199,
          "disabled": true
        },
        {
          "i": 49,
          "columnIndex": 11,
          "loveFlag": 0,
          "label": "5排6座",
          "rowIndex": 5,
          "id": 4520177,
          "disabled": true
        },
        {
          "i": 50,
          "columnIndex": 12,
          "loveFlag": 0,
          "label": "5排5座",
          "rowIndex": 5,
          "id": 4520219,
          "disabled": false
        },
        {
          "i": 51,
          "columnIndex": 13,
          "loveFlag": 0,
          "label": "5排4座",
          "rowIndex": 5,
          "id": 4520246,
          "disabled": false
        },
        {
          "i": 52,
          "columnIndex": 14,
          "loveFlag": 0,
          "label": "5排3座",
          "rowIndex": 5,
          "id": 4520151,
          "disabled": false
        },
        {
          "i": 53,
          "columnIndex": 15,
          "loveFlag": 0,
          "label": "5排2座",
          "rowIndex": 5,
          "id": 4520195,
          "disabled": false
        },
        {
          "i": 54,
          "columnIndex": 16,
          "loveFlag": 0,
          "label": "5排1座",
          "rowIndex": 5,
          "id": 4520179,
          "disabled": false
        },
        {
          "i": 55,
          "columnIndex": 6,
          "loveFlag": 0,
          "label": "6排11座",
          "rowIndex": 6,
          "id": 4520227,
          "disabled": false
        },
        {
          "i": 56,
          "columnIndex": 7,
          "loveFlag": 0,
          "label": "6排10座",
          "rowIndex": 6,
          "id": 4520248,
          "disabled": false
        },
        {
          "i": 57,
          "columnIndex": 8,
          "loveFlag": 0,
          "label": "6排9座",
          "rowIndex": 6,
          "id": 4520181,
          "disabled": false
        },
        {
          "i": 58,
          "columnIndex": 9,
          "loveFlag": 0,
          "label": "6排8座",
          "rowIndex": 6,
          "id": 4520234,
          "disabled": false
        },
        {
          "i": 59,
          "columnIndex": 10,
          "loveFlag": 0,
          "label": "6排7座",
          "rowIndex": 6,
          "id": 4520180,
          "disabled": true
        },
        {
          "i": 60,
          "columnIndex": 11,
          "loveFlag": 0,
          "label": "6排6座",
          "rowIndex": 6,
          "id": 4520211,
          "disabled": true
        },
        {
          "i": 61,
          "columnIndex": 12,
          "loveFlag": 0,
          "label": "6排5座",
          "rowIndex": 6,
          "id": 4520231,
          "disabled": true
        },
        {
          "i": 62,
          "columnIndex": 13,
          "loveFlag": 0,
          "label": "6排4座",
          "rowIndex": 6,
          "id": 4520161,
          "disabled": false
        },
        {
          "i": 63,
          "columnIndex": 14,
          "loveFlag": 0,
          "label": "6排3座",
          "rowIndex": 6,
          "id": 4520186,
          "disabled": false
        },
        {
          "i": 64,
          "columnIndex": 15,
          "loveFlag": 0,
          "label": "6排2座",
          "rowIndex": 6,
          "id": 4520220,
          "disabled": false
        },
        {
          "i": 65,
          "columnIndex": 16,
          "loveFlag": 0,
          "label": "6排1座",
          "rowIndex": 6,
          "id": 4520218,
          "disabled": false
        },
        {
          "i": 66,
          "columnIndex": 1,
          "loveFlag": 0,
          "label": "7排13座",
          "rowIndex": 7,
          "id": 4520237,
          "disabled": false
        },
        {
          "i": 67,
          "columnIndex": 2,
          "loveFlag": 0,
          "label": "7排12座",
          "rowIndex": 7,
          "id": 4520205,
          "disabled": false
        },
        {
          "i": 68,
          "columnIndex": 6,
          "loveFlag": 0,
          "label": "7排11座",
          "rowIndex": 7,
          "id": 4520201,
          "disabled": false
        },
        {
          "i": 69,
          "columnIndex": 7,
          "loveFlag": 0,
          "label": "7排10座",
          "rowIndex": 7,
          "id": 4520209,
          "disabled": false
        },
        {
          "i": 70,
          "columnIndex": 8,
          "loveFlag": 0,
          "label": "7排9座",
          "rowIndex": 7,
          "id": 4520225,
          "disabled": false
        },
        {
          "i": 71,
          "columnIndex": 9,
          "loveFlag": 0,
          "label": "7排8座",
          "rowIndex": 7,
          "id": 4520157,
          "disabled": false
        },
        {
          "i": 72,
          "columnIndex": 10,
          "loveFlag": 0,
          "label": "7排7座",
          "rowIndex": 7,
          "id": 4520152,
          "disabled": false
        },
        {
          "i": 73,
          "columnIndex": 11,
          "loveFlag": 0,
          "label": "7排6座",
          "rowIndex": 7,
          "id": 4520242,
          "disabled": false
        },
        {
          "i": 74,
          "columnIndex": 12,
          "loveFlag": 0,
          "label": "7排5座",
          "rowIndex": 7,
          "id": 4520203,
          "disabled": false
        },
        {
          "i": 75,
          "columnIndex": 13,
          "loveFlag": 0,
          "label": "7排4座",
          "rowIndex": 7,
          "id": 4520173,
          "disabled": false
        },
        {
          "i": 76,
          "columnIndex": 14,
          "loveFlag": 0,
          "label": "7排3座",
          "rowIndex": 7,
          "id": 4520154,
          "disabled": false
        },
        {
          "i": 77,
          "columnIndex": 15,
          "loveFlag": 0,
          "label": "7排2座",
          "rowIndex": 7,
          "id": 4520204,
          "disabled": false
        },
        {
          "i": 78,
          "columnIndex": 16,
          "loveFlag": 0,
          "label": "7排1座",
          "rowIndex": 7,
          "id": 4520149,
          "disabled": false
        },
        {
          "i": 79,
          "columnIndex": 1,
          "loveFlag": 0,
          "label": "8排13座",
          "rowIndex": 8,
          "id": 4520188,
          "disabled": false
        },
        {
          "i": 80,
          "columnIndex": 2,
          "loveFlag": 0,
          "label": "8排12座",
          "rowIndex": 8,
          "id": 4520174,
          "disabled": false
        },
        {
          "i": 81,
          "columnIndex": 6,
          "loveFlag": 0,
          "label": "8排11座",
          "rowIndex": 8,
          "id": 4520250,
          "disabled": false
        },
        {
          "i": 82,
          "columnIndex": 7,
          "loveFlag": 0,
          "label": "8排10座",
          "rowIndex": 8,
          "id": 4520198,
          "disabled": false
        },
        {
          "i": 83,
          "columnIndex": 8,
          "loveFlag": 0,
          "label": "8排9座",
          "rowIndex": 8,
          "id": 4520236,
          "disabled": false
        },
        {
          "i": 84,
          "columnIndex": 9,
          "loveFlag": 0,
          "label": "8排8座",
          "rowIndex": 8,
          "id": 4520206,
          "disabled": false
        },
        {
          "i": 85,
          "columnIndex": 10,
          "loveFlag": 0,
          "label": "8排7座",
          "rowIndex": 8,
          "id": 4520191,
          "disabled": false
        },
        {
          "i": 86,
          "columnIndex": 11,
          "loveFlag": 0,
          "label": "8排6座",
          "rowIndex": 8,
          "id": 4520150,
          "disabled": false
        },
        {
          "i": 87,
          "columnIndex": 12,
          "loveFlag": 0,
          "label": "8排5座",
          "rowIndex": 8,
          "id": 4520175,
          "disabled": false
        },
        {
          "i": 88,
          "columnIndex": 13,
          "loveFlag": 0,
          "label": "8排4座",
          "rowIndex": 8,
          "id": 4520193,
          "disabled": false
        },
        {
          "i": 89,
          "columnIndex": 14,
          "loveFlag": 0,
          "label": "8排3座",
          "rowIndex": 8,
          "id": 4520145,
          "disabled": false
        },
        {
          "i": 90,
          "columnIndex": 15,
          "loveFlag": 0,
          "label": "8排2座",
          "rowIndex": 8,
          "id": 4520187,
          "disabled": false
        },
        {
          "i": 91,
          "columnIndex": 16,
          "loveFlag": 0,
          "label": "8排1座",
          "rowIndex": 8,
          "id": 4520190,
          "disabled": false
        },
        {
          "i": 92,
          "columnIndex": 1,
          "loveFlag": 0,
          "label": "9排18座",
          "rowIndex": 9,
          "id": 4520200,
          "disabled": false
        },
        {
          "i": 93,
          "columnIndex": 2,
          "loveFlag": 0,
          "label": "9排17座",
          "rowIndex": 9,
          "id": 4520249,
          "disabled": false
        },
        {
          "i": 94,
          "columnIndex": 3,
          "loveFlag": 0,
          "label": "9排16座",
          "rowIndex": 9,
          "id": 4520158,
          "disabled": false
        },
        {
          "i": 95,
          "columnIndex": 4,
          "loveFlag": 0,
          "label": "9排15座",
          "rowIndex": 9,
          "id": 4520183,
          "disabled": false
        },
        {
          "i": 96,
          "columnIndex": 5,
          "loveFlag": 0,
          "label": "9排14座",
          "rowIndex": 9,
          "id": 4520207,
          "disabled": false
        },
        {
          "i": 97,
          "columnIndex": 6,
          "loveFlag": 0,
          "label": "9排13座",
          "rowIndex": 9,
          "id": 4520160,
          "disabled": false
        },
        {
          "i": 98,
          "columnIndex": 7,
          "loveFlag": 0,
          "label": "9排12座",
          "rowIndex": 9,
          "id": 4520232,
          "disabled": false
        },
        {
          "i": 99,
          "columnIndex": 8,
          "loveFlag": 0,
          "label": "9排11座",
          "rowIndex": 9,
          "id": 4520182,
          "disabled": false
        },
        {
          "i": 100,
          "columnIndex": 9,
          "loveFlag": 0,
          "label": "9排10座",
          "rowIndex": 9,
          "id": 4520189,
          "disabled": false
        },
        {
          "i": 101,
          "columnIndex": 10,
          "loveFlag": 0,
          "label": "9排9座",
          "rowIndex": 9,
          "id": 4520221,
          "disabled": false
        },
        {
          "i": 102,
          "columnIndex": 11,
          "loveFlag": 0,
          "label": "9排8座",
          "rowIndex": 9,
          "id": 4520235,
          "disabled": false
        },
        {
          "i": 103,
          "columnIndex": 12,
          "loveFlag": 0,
          "label": "9排7座",
          "rowIndex": 9,
          "id": 4520176,
          "disabled": false
        },
        {
          "i": 104,
          "columnIndex": 13,
          "loveFlag": 0,
          "label": "9排6座",
          "rowIndex": 9,
          "id": 4520194,
          "disabled": false
        },
        {
          "i": 105,
          "columnIndex": 14,
          "loveFlag": 0,
          "label": "9排5座",
          "rowIndex": 9,
          "id": 4520212,
          "disabled": false
        },
        {
          "i": 106,
          "columnIndex": 15,
          "loveFlag": 0,
          "label": "9排4座",
          "rowIndex": 9,
          "id": 4520153,
          "disabled": false
        },
        {
          "i": 107,
          "columnIndex": 16,
          "loveFlag": 0,
          "label": "9排3座",
          "rowIndex": 9,
          "id": 4520215,
          "disabled": false
        },
        {
          "i": 108,
          "columnIndex": 17,
          "loveFlag": 0,
          "label": "9排2座",
          "rowIndex": 9,
          "id": 4520184,
          "disabled": false
        },
        {
          "i": 109,
          "columnIndex": 18,
          "loveFlag": 0,
          "label": "9排1座",
          "rowIndex": 9,
          "id": 4520222,
          "disabled": false
        }
      ]
  

  var movie = ctx.query.movie
  await mysql("movie").insert(movie)

  ctx.state.data = movie
  

// 查
//var res = await mysql("book").where({ id }).first()
// 改
//await mysql("Book").update({ price: 66 }).where({ id })
// 删
//await mysql("Book").del().where({ id })

  

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
