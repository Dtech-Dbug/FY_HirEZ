import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/admin/dashboard" className="nav-link">
            Dashboad
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/admin/product" className="nav-link">
            Post A Job
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/admin/products" className="nav-link">
            View Jobs
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/admin/category" className="nav-link">
            Category
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/admin/subCategory" className="nav-link">
            Sub Category
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/admin/coupons" className="nav-link">
            Referrals
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/admin/password" className="nav-link">
            Password
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
