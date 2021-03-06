const express = require("express");

const router = express.Router();

//controllers
const { createOrUpdateUser, currentUser } = require("../controllers/auth");

//middlewares
const {
	createOrUpdateUserMiddleware,
	adminCheckMiddleware,
} = require("../middlewares/authMiddleware");
//we need this middleware for auth and admin check

const {
	create,
	read,
	update,
	remove,
	list,
} = require("../controllers/subCategoryControllers");

//we do not need to create different end points : we will use same route , but different methods like get,post,put,update

//we do not need middlewares here , we want to diplay all the categiries publically
router.get("/subCategories", list);

router.post(
	"/subCategory",
	createOrUpdateUserMiddleware,
	adminCheckMiddleware,
	create
);

//send slug from FE , and based on slug we can query our DB and return the sigle category
router.get(
	"/subCategory/:slug",
	read
	//we do not need to apply middleware here , bcz it has to be publicly visible
);

router.put(
	"/subCategory/:slug",
	createOrUpdateUserMiddleware,
	adminCheckMiddleware,
	update
);
router.delete(
	"/subCategory/:slug",
	createOrUpdateUserMiddleware,
	adminCheckMiddleware,
	remove
);

module.exports = router;
