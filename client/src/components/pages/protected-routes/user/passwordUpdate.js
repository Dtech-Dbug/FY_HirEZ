import react, { useState } from "react";
import { auth } from "../../../../firebase";
import { toast } from "react-toastify";
import UserNav from "../../../Nav/userNav";
import { useSelector } from "react-redux";

export const UserPassword = () => {
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  async function handleSubmit(e) {
    //setPassword(Password);
    e.preventDefault();
    console.log(password);

    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        toast.success(`Password succesfully updated`);
        setPassword("");
      })
      .catch((err) => toast.error(err.message));
  }
  const passwordForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group  mt-3">
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button className="btn btn-primary btn-raised mt-2 ">Done</button>
        </div>
      </form>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col-md-6">
          User Password Page
          {user && user.role === "admin" && passwordForm()}
        </div>
      </div>
    </div>
  );
};
