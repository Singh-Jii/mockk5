const exp = require('express');

const mongo = require('mongoose');

const bp = require('body-parser');

const app_route = require('./route/route');

const application = exp();

const my_port = process.env.my_port || 8000;

application.use(bp.json());

mongo.connect('write_database_link', 

{ 
  
  useNewUrlParser: true, 
  
  useUnifiedTopology: true 

});

application.use('/api/jobs', app_route);

application.listen(my_port, () => {

  console.log(`${my_port}`);

});