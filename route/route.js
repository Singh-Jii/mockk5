const exp = require('express');

const route = exp.Router();

const app_control = require('../control/control');

route.post('/postJob', app_control.post_app);

route.get('/getAllJobs', app_control.get_evry_app);

module.exports = route;