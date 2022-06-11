import React, { useState, useEffect } from "react";
import AdminNav from "../../../Nav/Admin-Nav";
import {
  adminOrderList,
  adminUpdateOrderStatus,
} from "../../../../functions/adminOrder";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Select } from "antd";
const { Option } = Select;

export const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  let orderStatusEnum = [
    "not processed yet",
    "processing",
    "dispatching",
    "dispatched",
    "cancelled",
    "completed",
  ];
  // const [currentOrderStatus, setCurrentOrderStatus] = useState("");

  useEffect(() => {
    user && console.log(user.token);
    loadAllOrders();
  }, []);

  const loadAllOrders = () =>
    adminOrderList(user.token)
      .then((res) => {
        console.log("RES oredr admin", res.data);
        setOrders(res.data);
        // setInitialOrderStatus(res.data);
      })

      .catch((err) => console.log(err.message));

  const showOrders = () =>
    orders.map((order, i) => (
      <div key={i} className="m-5 p-3 card">
        {ShowPaymentInfo(order)}
        {showOrderStatus(order)}
        {showOrderInTable(order)}
      </div>
    ));

  const showOrderInTable = (order) => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Color</th>
          <th scope="col">Shipping</th>
        </tr>
      </thead>
      <tbody>
        {order.products.map((p, i) => (
          <tr key={i}>
            <td>{p.product.title}</td>
            <td>{p.product.price}</td>
            <td>{p.product.quantity}</td>
            <td>{p.product.color}</td>
            <td>
              {p.product.shipping === "Yes" ? (
                <CheckCircleOutlined style={{ color: "green" }} />
              ) : (
                <CloseCircleOutlined style={{ color: "red" }} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const ShowPaymentInfo = (order) => (
    <div>
      <p>
        <b>Order id :</b> {order.paymentIntent.id}
        {""}
      </p>
      <p>
        <b>Order Created :</b>{" "}
        {new Date(order.paymentIntent.created).toLocaleString()}
      </p>

      <p>
        <b>Payment Status :</b> {order.paymentIntent.status.toUpperCase()}
      </p>
    </div>
  );

  const showOrderStatus = (order) => (
    <p className="badge bg-primary text-white">
      Order Status :{" "}
      <Select
        value={order.orderStatus}
        placeholder="Selecet"
        onChange={(stats) => handleStatusChange(order._id, stats)}
      >
        {orderStatusEnum.map((stats, i) => {
          return (
            <Option key={i} value={stats}>
              {stats}
            </Option>
          );
        })}
      </Select>
    </p>
  );

  const handleStatusChange = (orderId, orderStatus) => {
    console.log(orderStatus);
    adminUpdateOrderStatus(orderId, orderStatus, user.token).then((res) => {
      toast.success("Order Status Updated");
      loadAllOrders();
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          Welcome Admin to your dashboard.
          {showOrders()}
        </div>
      </div>
    </div>
  );
};
