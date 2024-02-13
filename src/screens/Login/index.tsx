import { useState } from "react";
import "./index.css";
export default function Login() {
  const [Login, setLogin] = useState<any>();
  console.log(Login);
  let submit = () => {
    console.log(Login);
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <div className="card" style={{ width: "28rem", padding: "20px" }}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Astrol"
                onChange={(e) => {
                  let UserName = e.target.value;
                  setLogin({ ...Login, UserName });
                }}
              />
            </div>

            <label htmlFor={"inputPassword5"} className="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              className="form-control"
              placeholder="********"
              aria-describedby="passwordHelpBlock"
              onChange={(e) => {
                let Password = e.target.value;
                setLogin({ ...Login, Password });
              }}
            />
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
            <div className="mt-2">
              <button onClick={submit} className="btn btn-primary w-100">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
