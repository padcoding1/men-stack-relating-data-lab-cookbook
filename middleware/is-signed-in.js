// is-signed-in.js

const isSignedIn = (req, res, next) => {
  console.log("middleware isSignedin");
    if (req.session.user) return next();
    res.redirect('/auth/sign-in');
  };
  
  module.exports = isSignedIn;
  