var indexModel=require('../model/indexModel.js');
var initController={
	init:function(app){
		app.get('/', function (req, res) {	
			indexModel.getData(function(value){
				//div的个数
				res.json({
					'classnum':value
				})
			})
		});

		app.get('/qxm', function (req, res) {	
			res.send('666')
		});

		app.use(function (req, res) {	
			res.send('404')
		});
	}
}
module.exports=initController;