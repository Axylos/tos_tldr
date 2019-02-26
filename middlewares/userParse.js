const userParse = (req, res, next) => {
  console.log(req.headers);
  console.log('user header: ', req.headers['x-user-name']);
  console.log('user header: ', req.headers['x-user-id']);
  console.log('user header: ', req.headers['x-user-email']);
  res.locals.user = {
    name: req.headers['x-user-name'],
    email: req.headers['x-user-email'],
    id: req.headers['x-user-id'],
  };
  next();
};

module.exports = {
  userParse,
};
