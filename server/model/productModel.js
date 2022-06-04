const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlenght: 2,
      maxlength: 50,
      text: true,
      trim: true,
    },
    description: {
      type: String,
      maxlength: 500,
      required: true,
      text: true,
    },
    slug: {
      trim: true,
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
    salary: {
      trim: true,
      type: Number,
      required: true,
      maxlength: 32,
    },
    vacancy: Number,
    jobType: {
      type: String,
      enum: [
        "Full-Time",
        "Part-Time",
        "Contract",
        "Internship",
        "Apprenticeship",
        "Fellowship",
      ],
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    subCategories: [
      {
        type: ObjectId,
        ref: "SubCategory",
      },
    ],

    images: {
      type: Array,
    },
    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductModel", productSchema);
