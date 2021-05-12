const { Router } = require("express");
const router = Router();

const { authController, channelController, tagController, userController } = require("./controllers");


// [post] route for signup registration
router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.get('/channel/:id(\\d+)', channelController.getChannelById);

router.get('/tags', tagController.getAllTags);

router.put('/:id', userController.update);


module.exports = router;
