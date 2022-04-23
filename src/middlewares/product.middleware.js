const mongoose = require('mongoose');

const validId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).send({ message: 'Invalid id!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  if (
    !req.body ||
    !req.body.gender ||
    !req.body.color ||
    !req.body.brand ||
    !req.body.price ||
    !req.body.sizes ||
    !req.body.material ||
    !req.body.image
  ) {
    return res.status(400).send({
      message: 'Action could not be performed, please send the complete form!',
    });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
