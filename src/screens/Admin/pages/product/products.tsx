import { Route, Routes, useNavigate } from "react-router-dom";
import AddProducts from "./addproduct";
import "./index.css";
import CustomBtn from "../../../../Components/button";

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
