var AppController = require('./app.controller.js');

function setupRoutes(app){
	app.get('/', AppController.index);
	app.get('/mezz3', AppController.mezz3);
	app.get('/AUDIO%20SF', AppController.audio3);
}

module.exports = setupRoutes;