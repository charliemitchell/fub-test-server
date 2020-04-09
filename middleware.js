/*
  It is advised that you do not use the body-parser here. Instead, set up defaults in
  your congig.js file. You can always override it on the route when needed. This allows you to
  have sane defaults, and make exceptions when needed.
*/

module.exports = [
  (server) => {
    server.app.use(
      (req, res, next) => {
        const base64Credentials =  req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        req.auth = credentials
        next()
      }
    )
  }
];
