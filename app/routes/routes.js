module.exports = function(app, express) {
  var clientRouter = express.Router();

  clientRouter.use(function(req, res, next) {
    console.log("middleware test")
    console.log(req)
    // var token = window.localStorage.getItem('userToken')
    // var user = window.localStorage.getItem('userProfile')
    // console.log(JSON.parse(user))
    next();
  })

  clientRouter.get("/test", function(req, res, next) {
    console.log("Hitting test route")
    next();
  })

  return clientRouter;
}