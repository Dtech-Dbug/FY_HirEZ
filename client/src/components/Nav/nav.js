import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Menu, Badge } from "antd";
import {
  UserOutlined,
  UserAddOutlined,
  HomeTwoTone,
  LogoutOutlined,
  DashboardTwoTone,
  FileSearchOutlined,
  DownSquareOutlined,
} from "@ant-design/icons";

import CategoryLists from "../pages/HomePageSections/CategoryLists";

import Search from "../reusable-Components/Search";

import firebase from "firebase";

import { getCategoryLists } from "../../functions/categoryCRUD";

const { SubMenu, Item } = Menu;

export const Nav = () => {
  const [current, setCurrent] = useState("home");
  const [allcategories, setAllCategories] = useState([]);

  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  useEffect(() => {
    getCategoryLists().then((res) => {
      setAllCategories(res.data);
      console.log("nav categories", res.data);
    });
  }, []);

  const handleClick = (e) => {
    //
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();

    dispatch({
      type: "USER_LOGGED_OUT",
      payload: null,
    });

    history.push("/login");
  };

  return (
    <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
      <Item key="home" icon={<HomeTwoTone twoToneColor="white" />}>
        <Link to="/">Home</Link>
      </Item>

      <Item key="shop" icon={<FileSearchOutlined twoToneColor="white" />}>
        <Link to="/shop">Browse Jobs</Link>
      </Item>

      {!user && (
        <Item key="register" icon={<UserAddOutlined />} className="float-right">
          <Link to="/register">Register</Link>
        </Item>
      )}

      {!user && (
        <Item
          key="login"
          icon={<UserOutlined twoToneColor="crimson" />}
          className="float-right"
        >
          <Link to="/login">Login</Link>
        </Item>
      )}

      {user && (
        <SubMenu
          icon={<UserOutlined twoToneColor="white" />}
          title={user.email && user.email.split("@")[0]}
          //.split('@) to split at '@' : e.g => name@gmail.com split at @ => ['name' , 'gmail.com'] we need the 0th element for the name
          className="float-right"
        >
          {user && user.role === "admin" && (
            <Item icon={<DashboardTwoTone />}>
              <Link to="/admin/dashboard">Dashboard</Link>
            </Item>
          )}

          {user && user.role !== "admin" && (
            <Item icon={<DashboardTwoTone />}>
              <Link to="/user/history">User History/Dashboard</Link>
            </Item>
          )}

          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}

      <span className="float-right">
        <Search />
      </span>
    </Menu>
  );
};
