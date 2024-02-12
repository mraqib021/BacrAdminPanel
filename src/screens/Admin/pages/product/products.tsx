import { Route, Routes, useNavigate } from "react-router-dom";
import AddProducts from "./addproduct";
import "./index.css";
import CustomBtn from "../../../../Components/button";
import product from "../../../../assets/p1.png";

export default function Products() {
  let navigate = useNavigate();
  // let data = [{
  //     title: "Add",
  //     link: "add"
  // },
  // {
  //     title: "Edit",
  //     link: "edit"
  // },
  // {
  //     title: "Update",
  //     link: "update"
  // },
  // {
  //     title: "Delete",
  //     link: "delete"
  // }]
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
        <div className="d-flex gap-2">
          <div className="col-lg-12 col-sm-12  chiller-main d-flex  justify-content-center align-items-center">
            <div className="chiller-div  d-flex  justify-content-center align-items-center ">
              <div className="txt-div  d-flex  justify-content-center align-items-center flex-column mt-2">
                <h5 className="fw-bolder text-white">CARRIER 30XW 0652</h5>
                <p className="fs-6 text-white">
                  The Carrier 30HXC chiller is a water-cooled liquid chiller
                  renowned for its energy efficiency and robust performance in
                  commercial and industrial settings. It offers precise
                  temperature regulation through advanced technology.
                </p>
                <img src={product} />
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12  chiller-main d-flex  justify-content-center align-items-center">
            <div className="chiller-div  d-flex  justify-content-center align-items-center ">
              <div className="txt-div  d-flex  justify-content-center align-items-center flex-column mt-2">
                <h5 className="fw-bolder text-white">CARRIER 30XW 0652</h5>
                <p className="fs-6 text-white">
                  The Carrier 30HXC chiller is a water-cooled liquid chiller
                  renowned for its energy efficiency and robust performance in
                  commercial and industrial settings. It offers precise
                  temperature regulation through advanced technology.
                </p>
                <img src={product} />
              </div>
            </div>
          </div>
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
