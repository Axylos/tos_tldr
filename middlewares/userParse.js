const userParse = (req, res, next) => {
  let user = {
    name: 'bobby',
    email: 'bobby@gmail.com',
    id: '305b9d34-e959-4d5c-98a9-1cdefb0fa8d0',
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
