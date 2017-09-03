//请求模块
var request = require('request');
var cheerio = require('cheerio');
//爬虫
var indexModel={
	getData:function(fn){
		request('http://www.baidu.com/', function (error, response, body) {
		if(!error && response.statusCode==200){
			//获取dom节点,操作jq对象获取元素
			var $ = cheerio.load(body);
			fn($('div').length)

		}
	});
	}
}

module.exports=indexModel;

// var indexModel=function(){};
// indexModel.prototype.getData=function(){};
// module.exports=new indexModel();