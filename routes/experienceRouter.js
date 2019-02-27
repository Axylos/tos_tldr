const experienceRouter = require('express').Router();
const { Experience, Comment } = require('../models');

experienceRouter.post('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const data = {
      ...req.body,
      user_id: user.id,
    };
    const result = await Experience.create(data);
    res.json({ experience: result });
  } catch (e) {
    console.log('error: ', e.message);
    res.status(500).send(e.message);
  }
});

experienceRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findById(id, {
      include: [{ model: Comment, as: 'comments' }],
    });
    if (experience === null) {
      res.status(404).send('Invalid Id');
    } else {
      res.json({ experience });
    }
  } catch (e) {
    console.log(`error: ${e.message}`);
    res.status(500).send(e.message);
  }
});

module.exports = {
  experienceRouter,
};
