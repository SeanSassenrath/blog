var path = require('path')

module.exports = function(app, express) {
  var clientRouter = express.Router();

  clientRouter.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname+'../../../index.html'));
  })

  clientRouter.use(function(req, res, next) {
    console.log("middleware test")
    console.log(req.headers)
    if(req['x-access-token']) {
      console.log("A token was sent")
    } else {
      console.log("No token sent, going back to home");
      res.redirect('/')
    }
    // var token = window.localStorage.getItem('userToken')
    // var user = window.localStorage.getItem('userProfile')
    // console.log(JSON.parse(user))
    // next();
  })

  clientRouter.get("/test", function(req, res, next) {
    console.log("Hitting test route")
    next();
  })

  return clientRouter;
}