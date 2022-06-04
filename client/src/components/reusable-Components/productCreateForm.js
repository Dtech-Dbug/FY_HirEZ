import React, { useEffect } from "react";
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
}) => {
  useEffect(() => {
    console.log(categories);
  }, []);
  const {
    title,
    description,
    salary,
    vacancy,
    color,
    colors,
    jobType,
    jobTypes,
    categories,
    subCategories,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={title}
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Salary</label>
        <input
          type="number"
          name="salary"
          className="form-control"
          value={salary}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Vacancy</label>
        <input
          type="number"
          name="vacancy"
          className="form-control"
          value={vacancy}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Type</label>
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

        {showSubcategories.length}
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
      <button onClick={handleSubmit} className="btn btn-raised btn-primary">
        Save
      </button>
    </form>
  );
};
