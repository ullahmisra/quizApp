import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function RegisterPage() {
  const navigate = useNavigate();
  const register = async () => {
    try {
      let response = await axios.get("https://opentdb.com/api.php?amount=10");
      if (response.status == 200) {
        localStorage.setItem("questionList", JSON.stringify(response.data.results));
        localStorage.setItem("userDetails", JSON.stringify([{ fullName, email, mobile }]));
      }
    } catch (error) {
      console.log(error);
    }
    navigate("/question/0");
  };
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  return (
    <div className=" m-lg-5">
      <div className="p-lg-5 row">
        <div className="col-lg-6 col-sm-12 text-center p-0" style={{ marginTop: "-30px" }}>
          <img
            src="https://cdn.dribbble.com/users/2213143/screenshots/7971141/media/184cdea9758c029d9feef05432222403.gif"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 col-sm-12 my-auto px-4  px-lg-5">
          <div className="mx-lg-5">
            <h1 className="heading mt-4">User Registration</h1>
            <p className="para">Please Provide your details below</p>
            <form className="">
              <label className="form-label">Full Name*</label>
              <input
                className="form-control"
                placeholder="Enter Your UserName"
                onChange={(e) => setFullName(e.target.value)}
              />
              <br />
              <label className="form-label">Email*</label>
              <input
                className="form-control"
                placeholder="Enter Your Email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label className="form-label">Mobile*</label>
              <input
                className="form-control"
                placeholder="Enter Your Mobile"
                type="number"
                onChange={(e) => setMobile(e.target.value)}
              />
              <br />
              </form>
              <button
                className={"btn btn-primary w-50 " + (fullName == "" || email == "" || mobile == "" ? " disabled" : "")}
                
                onClick={register}
              >
                Save & Start
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
