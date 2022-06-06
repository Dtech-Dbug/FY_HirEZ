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
    companyName: {
      type: String,
      required: true,
    },
    companyLink: {
      type: String,
      required: true,
    },
    location: {
      type: String,
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
    applicationLink: {
      type: String,
      required: true,
    },
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
