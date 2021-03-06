//step 1 : requre the database
const SubCategory = require("../model/subCategoryModel");

//ste2: import slugify for slugs
const slugify = require("slugify");

const ProductModel = require("../model/productModel");

//step3 : create the controller functions

exports.create = async (req, res) => {
	const { name, parent } = req.body;

	try {
		const subCategory = await new SubCategory({
			name,
			parent,
			slug: slugify(name),
		}).save();
		console.log("Sub category created --->", subCategory);
		res.json(subCategory);
	} catch (err) {
		(err) => console.log(err);
		res.send("Process failed due to , ", err);
	}
};

exports.read = async (req, res) => {
	const subCategory = await SubCategory.findOne({
		slug: req.params.slug,
	}).exec();

	const products = await ProductModel.find({
		subCategories: subCategory,
	})
		.populate("category")
		.exec();

	res.json({
		subCategory,
		products,
	});
};

exports.update = async (req, res) => {
	const { name, parent } = req.body;
	try {
		const updatedSubcategory = await SubCategory.findOneAndUpdate(
			{ slug: req.params.slug },
			{
				name,
				parent,
				slug: slugify(name),
			},
			{ new: true }
		);
		res.json(updatedSubcategory);
		console.log(updatedSubcategory);
	} catch (err) {
		console.log("Error while updating subcategory ----> ", err);
	}
};

exports.remove = async (req, res) => {
	try {
		const deletedSubcategory = await SubCategory.findOneAndDelete({
			slug: req.params.slug,
		}).exec();
		res.json(deletedSubcategory);
	} catch (err) {
		(err) => console.log("Removal of subcategory failed ----> ", err);
	}
};

exports.list = async (req, res) => {
	const list = await SubCategory.find({}).sort({ createdAt: -1 }).exec();
	res.json(list);
};
