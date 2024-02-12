import { useState } from "react";
import CustomBtn from "../../../../Components/button";
import "./index.css";

export default function AddProducts() {
  const [data, setdata] = useState<any>();
  console.log(data);
  const [image, setimage] = useState<any>();
  console.log(image);
  return (
    <div className="container w-100">
      <div className="row g-3 d-flex justify-content-center py-4 px-2 ">
        <div className="col-lg-7 col-sm-12">
          <input
            type="title"
            className="form-control"
            onChange={(e) => {
              let title = e.target.value;
              setdata({ ...data, title });
            }}
            placeholder="Title"
          />
        </div>
        <div className="col-lg-7 col-sm-12">
          <textarea
            className="form-control"
            onChange={(e) => {
              let Description = e.target.value;
              setdata({ ...data, Description });
            }}
            placeholder="Description"
          />
        </div>
        <div className="col-lg-7 col-sm-12">
          <input
            type="file"
            className="form-control"
            onChange={(e) => {
              {
                e.target.files?.length && e.target.files?.length > 0
                  ? setimage(e.target.files[0].name)
                  : null;
              }
            }}
            placeholder="Title"
          />
        </div>
        <div className="col-lg-7 col-sm-12">
          {/* <img src={image} alt="" /> */}
        </div>
        <div className="col-lg-7">
          <CustomBtn
            title="Submit"
            onClick={() => {
              setdata({ ...data, image });
            }}
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
}
