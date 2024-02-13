import { Route, Routes, useNavigate } from "react-router-dom";
import AddProducts from "./addproduct";
import "./index.css";
import CustomBtn from "../../../../Components/button";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  useEffect(() => {
    axios
      .get("https://bacr-backend.vercel.app/api/inventory")
      .then(function (response) {
        // handle success
        setdata(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  const [data, setdata] = useState<any>();
  console.log(data?.length);
  let dlt = console.log(data);
  let navigate = useNavigate();
  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <div>
            <h1>Products / Inventory</h1>
          </div>
          <div>
            <CustomBtn
              onClick={() => {
                navigate("add");
              }}
              title="Add Product"
            />
          </div>
        </div>
        <div className="d-flex flex-wrap gap-2">
          {data?.length > 0
            ? data.map((text: any, index: number) => {
                return (
                  <div
                    onClick={() => dlt}
                    key={index}
                    className="col-lg-12 col-sm-12  chiller-main d-flex  justify-content-center align-items-center"
                  >
                    <div className="chiller-div  d-flex  justify-content-center align-items-center ">
                      <div className="txt-div  d-flex  justify-content-center align-items-center flex-column mt-2">
                        <h5 className="fw-bolder text-white">{text.Title}</h5>
                        <p className="fs-6 text-white">{text.Description}</p>
                        <img src={text.ImageUrl} />
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        {/* <ul>
                {data.map((text, index) => {
                    return (
                        <li key={index}  > {text.title}</li>
                    )
                })}
            </ul> */}
        <Routes>
          <Route path="add" element={<AddProducts />}></Route>
        </Routes>
      </div>
    </>
  );
}
