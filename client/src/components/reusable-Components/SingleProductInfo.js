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
      <li className="list-group-item text-white">
        Salary{" "}
        <span className="label label-default label-pill pull-xs-right text-white">
          $ {salary}
        </span>
      </li>
      {category && (
        <li className="list-group-item text-white">
          Category{" "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill pull-xs-right text-white"
          >
            {category.name}
          </Link>
        </li>
      )}
      <li className="list-group-item text-white">
        Sub Categories{" "}
        {subCategories &&
          subCategories.map((s) => {
            return (
              <Link
                to={`subcategory/${s.slug}`}
                key={s._id}
                className="label label-default label-pill pull-xs-right text-white"
              >
                {s.name}
              </Link>
            );
          })}
      </li>
      <li className="list-group-item text-white">
        Type{" "}
        <span className="label label-default label-pill pull-xs-right text-white">
          {jobType}
        </span>
      </li>
      <li className="list-group-item text-white">
        Vacancy
        <span className="label label-default label-pill pull-xs-right text-white">
          {vacancy}
        </span>
      </li>
    </ul>
  );
};

export default SingleProductInfo;

//pull-xs-right => Is the className that moves the content to the right in the card
