var api = require('../js/lib/api');
var excel = require('../js/lib/excel');
var kyokigo = require('../js/lib/kyokigo');

var params = {q: 'ヒーロー', page: 1, token: '9e61d97excrew00njt3nexus5cns0f2e8cceq78og47gc8qaecgrefds32g578e'};
api.xlsx({
	q: params.q,
	token: params.token,
	page: params.page
}, (err, res) => {
	if (err) return console.log(err); 
	api.download(res.body.response.file, params.token, function(err, res) {
		console.log(res);
	});
});