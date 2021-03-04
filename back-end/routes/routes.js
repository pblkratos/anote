let express = require("express");
let app = express();
let router = express.Router();

let UserController = require("../controllers/UserController");

router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;