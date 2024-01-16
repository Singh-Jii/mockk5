const app_model = require('../model/model');

exports.post_app = async (request, response) => {

  try {

    const my_app = new app_model(request.body);

    await my_app.save();

    response.status(201).json({ msg: 'job posting is completed' });

  } 
  
  catch (er) {

    response.status(500).json({ er: 'error' });

  }

};

exports.get_evry_app = async (request, response) => {

  try {

    const my_work = await app_model.find();

    response.status(200).json(my_work);

  } 
  
  catch (er) {

    response.status(500).json({ er: 'error' });

  }
  
};