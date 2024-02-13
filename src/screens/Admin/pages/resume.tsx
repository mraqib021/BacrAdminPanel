import axios from "axios";
import { useEffect, useState } from "react";
export default function Resume() {
  useEffect(() => {
    axios
      .get("https://bacr-backend.vercel.app/api/cv")
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
  return (
    <>
      <h1>Resume</h1>
      <div className="container">
        <div className="col-12">
          <div className="d-flex gap-2 justify-content-center">
            {data?.length > 0
              ? data.map((text: any, index: number) => {
                  return (
                    <div
                      className="card"
                      key={index}
                      style={{ width: "18rem" }}
                    >
                      <img
                        src={text.CV_Url}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Name : {text.FullName}</h5>
                        <p className="card-text">
                          Apply For : {text.ApplyingFor}
                        </p>
                        <p className="card-text">Team : {text.Team}</p>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
