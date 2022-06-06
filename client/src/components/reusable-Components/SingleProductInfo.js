import React from "react";
import { Link } from "react-router-dom";

const SingleProductInfo = ({ product }) => {
  const {
    price,
    category,
    subCategories,
    shipping,
    jobType,
    vacancy,
    color,
    quantity,
    sold,
    salary,
  } = product;
  return (
    <ul className="list-group">
      <li className="list-group-item">
        Salary{" "}
        <span className="label label-default label-pill pull-xs-right ">
          $ {salary}
        </span>
      </li>
      {category && (
        <li className="list-group-item">
          Category{" "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill pull-xs-right"
          >
            {category.name}
          </Link>
        </li>
      )}
      <li className="list-group-item">
        Sub Categories{" "}
        {subCategories &&
          subCategories.map((s) => {
            return (
              <Link
                to={`subcategory/${s.slug}`}
                key={s._id}
                className="label label-default label-pill pull-xs-right "
              >
                {s.name}
              </Link>
            );
          })}
      </li>
      <li className="list-group-item">
        Type{" "}
        <span className="label label-default label-pill pull-xs-right ">
          {jobType}
        </span>
      </li>
      <li className="list-group-item">
        Vacancy
        <span className="label label-default label-pill pull-xs-right ">
          {vacancy}
        </span>
      </li>
    </ul>
  );
};

export default SingleProductInfo;

//pull-xs-right => Is the className that moves the content to the right in the card
