import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Select } from "antd";
const { Option } = Select;

export const ProductCreateForm = ({
  handleChange,
  handleSubmit,
  handleCategoryChange,
  values,
  setValues,
  selectedCategory,
  showSubcategories,
  description,
  setDescription,
}) => {
  useEffect(() => {
    console.log(categories);
  }, []);
  const {
    title,
    salary,
    vacancy,
    companyName,
    companyLink,
    jobType,
    jobTypes,
    location,
    categories,
    subCategories,
    applicationLink,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="required">Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={title}
          required
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div className="form-group">
        <label className="required">Description</label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
        />
      </div>
      <div className="form-group">
        <label className="required">Company Name</label>
        <input
          type="text"
          name="companyName"
          className="form-control"
          value={companyName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="required">Company URL</label>
        <input
          type="url"
          name="companyLink"
          className="form-control"
          value={companyLink}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="required">Job Types</label>
        <select name="jobType" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {jobTypes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="required">Location</label>
        <input
          type="string"
          name="location"
          className="form-control"
          value={location}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="required">Salary</label>
        <input
          type="number"
          name="salary"
          className="form-control"
          value={salary}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="required">Vacancy</label>
        <input
          type="number"
          name="vacancy"
          className="form-control"
          value={vacancy}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Select Category</label>
        <select className="form-control" onChange={handleCategoryChange}>
          <option>Please Select a Category</option>

          {categories.length > 0 &&
            categories.map((c) => {
              return (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              );
            })}
        </select>
      </div>

      {selectedCategory && (
        <div>
          <label>Sub Categories</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={subCategories}
            onChange={(value) => setValues({ ...values, subCategories: value })}
          >
            {showSubcategories.length &&
              showSubcategories.map((sub) => (
                <Option key={sub._id} value={sub._id}>
                  {sub.name}
                </Option>
              ))}
          </Select>
        </div>
      )}

      <div className="form-group">
        <label className="required">Application Link</label>
        <input
          type="url"
          name="applicationLink"
          className="form-control"
          value={applicationLink}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit} className="btn btn-raised btn-primary">
        Save
      </button>
    </form>
  );
};
