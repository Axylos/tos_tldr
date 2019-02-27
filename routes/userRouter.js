const userRouter = require('express').Router();
const { Experience } = require('../models');

userRouter.get('/experiences', async (req, res) => {
  try {
    const { id } = res.locals.user;
    const rows = await Experience.findAll({
      where: {
        user_id: id,
      },
    });

    res.json({ experiences: rows });
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});


module.exports = {
  userRouter,
};
