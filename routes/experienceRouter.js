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

experienceRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const exp = await Experience.findByPk(id);
    if (exp === null) {
      res.status(404).send('Invalid Id');
    } else {
      await exp.destroy();
      res.status(202).send('succesfully deleted');
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
})
experienceRouter.post('/:id/comments', async (req, res) => {
  const { comment } = req.body;
  const { id } = req.params;

  try {
    const exp = await Experience.findByPk(id);
    const com = Comment.build({ text: comment, user_id: res.locals.user.id });
    com.experience_id = exp.id
    await com.save();
    res.json({msg: com});
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});

module.exports = {
  experienceRouter,
};
