var _ = require('lodash');
var kyokigo = require('../js/lib/kyokigo');

var params = {q: 'ヒーロー', page: 1, token: '9e61d97excrew00njt3nexus5cns0f2e8cceq78og47gc8qaecgrefds32g578e'};
kyokigo(params, (err, res) => {
	if (err) return console.log(err); 
	_.each(res, function(v, k) {
		console.log(k);
	});
}, console.log);