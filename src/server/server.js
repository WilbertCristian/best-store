const jsonServer = require('json-server')
const multer  = require('multer')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
// server.get('/echo', (req, res) => {
//   res.jsonp(req.query)
// })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      let date = new Date   
      let imageFilename = date.getTime() + '-' + file.originalname
      req.body.image = imageFilename = imageFilename
      cb(null, file.fieldname + '-' + imageFilename)
    }
  })
  
  const bodyParser = multer({ storage: storage }).any()
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(bodyParser)
server.post("/products",(req, res, next) => {
  let date = new Date
  req.body.created_at = date.toISOString()
  if(req.body.price){
    req.body.price = Number(req.body.price)
  }
  let hasError = false
  let err = {}

  if(req.body.name.length <= 0){
    hasError = true
    err.name = 'Name is required'
  }
  if(req.body.description.length <= 0){
    hasError = true
    err.description = 'Description is required'
  }
  if(req.body.price <= 0){
    hasError = true
    err.price = 'Price is required'
  }
  if(req.body.stock <= 0){
    hasError = true
    err.stock = 'Stock is required'
  }
  if(req.body.category <= 0){
    hasError = true
    err.category = 'Category is required'
  }

  if(hasError){
    res.status(400).json(err)
    return
  }
 
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})