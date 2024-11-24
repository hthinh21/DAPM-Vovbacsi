const usermodels = require('../models/user.js');
const { loginUser, updateUserProfile,getNotification } = require('../controllers/userControllers.js');
const  { upload }  = require('../middleware/upload.js'); // Middleware Multer
const express = require('express');
const authMiddleware  = require('../middleware/authMiddleware.js');
const { get } = require('mongoose');

const router = express.Router();
router.get(`/notifications/:id`,getNotification);
router.put('/:id', upload.single('avatar'), updateUserProfile);
router.get('/:id', async (request, response) => {
    try {
      const { id } = request.params;

      const user = await usermodels.findById(id);

      return response.status(200).json(user);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  

module.exports = router;
