var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio')

app.get('/', function (req, res) {
	request('http://www.baidu.com/', function (error, response, body) {
		if(!error && response.statusCode==200){
			//获取dom节点,操作jq对象获取元素
			var $ = cheerio.load(body);
			//div的个数
			res.json({
				'classnum':$('div').length
			})

		}
	});
  
});

app.listen(3000)