const request = require('superagent');
const pickApi = () => (location.hostname === 'localhost') ? 'http://localhost:3000': 'http://kyokigo.herokuapp.com';


module.exports = {
	verifyToken(token, callback) {
		request
			.get(pickApi() + '/token')
			.query({token})
			.end(callback);
	},
	yahoo(ops, callback) {
		request
			.get(pickApi() + '/yahoo')
			.query(ops)
			.end(callback);
	},
	page(ops, callback) {
		request
			.get(pickApi() + '/page')
			.query(ops)
			.end(callback);
	},
	xlsx(ops, callback) {
		request
			.get(pickApi() + '/xlsx')
			.query(ops)
			.end(callback);
	},
	download(file, token, callback) {
		let timer = setInterval(() => {
			request
				.get(pickApi() + '/download_check')
				.query({file, token})
				.end(function(err, res) {
					if (err) return callback(err, res);
					if (!res.body.response.exist) return;
					clearInterval(timer);
					callback(null, {
						exist: res.body.response.exist,
						url: [pickApi(), '/download?token=', token, '&file=', file].join('')
					});
				});
		}, 5000);
	}
};