var request = require('supertest');
var mocker = require('../index');

describe('gulp-apimocker', function () {
  it('start', function () {
  	var options = {
    	config: './test.conf.json'
  	}
    mocker.start(options);

	request('http://localhost:8080')
	      .get('/test')
	      .expect(/test response/)
	      .expect(200)
	      .end(function(err, res){
    		if (err) throw err;
  		  });
	});
});