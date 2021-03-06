const mongoose = require("mongoose");
const { ObjectId, name } = mongoose.Schema;

const subCategrorySchema = new mongoose.Schema(
	{
		name: String,

		name: {
			type: String,
			required: true,
			minlength: [2, "Too Short"],
			maxlength: [32, "Too Long"],
		},
		slug: {
			type: String,
			trim: true,
			lowercase: true,
			index: true,
		},
		parent: {
			type: ObjectId,

			ref: "Category",
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("SubCategory", subCategrorySchema);
