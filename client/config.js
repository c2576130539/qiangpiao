/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://ipahesku.qcloud.la';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 用code换取openId
        openIdUrl: `https://${host}/openid`,

      // 测试的信道服务接口
      tunnelUrl: `https://${host}/tunnel`,

      // 生成支付订单的接口
      paymentUrl: `https://${host}/payment`,

      // 发送模板消息接口
      templateMessageUrl: `https://${host}/templateMessage`,

      // 上传文件接口
      uploadFileUrl: `https://${host}/upload`,

      // 下载示例图片接口
      downloadExampleUrl: `https://${host}/static/weapp.jpg`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`

        
    }
};

module.exports = config;
