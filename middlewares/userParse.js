const userParse = (req, res, next) => {
  let user = {
    name: 'bobby',
    email: 'bobby@gmail.com',
    id: 3,
  };

  if (process.env.NODE_ENV === 'production') {
    user = {
      name: req.headers['x-user-name'],
      email: req.headers['x-user-email'],
      id: req.headers['x-user-id'],
    };
  }

  res.locals.user = user;

  next();
};

module.exports = {
  userParse,
};
