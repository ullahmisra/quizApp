import React from "react";
import { useNavigate } from "react-router-dom";
function Result() {
  const navigate = useNavigate();
  const tryAgain = () => {
    localStorage.removeItem("questionList");
    localStorage.removeItem("score");
    localStorage.removeItem("answers");
    localStorage.removeItem("userDetails");
    navigate("/");
  };
  return (
    <div className="resultContainer">
      {localStorage.getItem("score") > 25 ? (
        <h4 className="text-success">
          Congratulations {JSON.parse(localStorage.getItem("userDetails"))[0].fullName} your final score is{" "}
          {localStorage.getItem("score")} and you passed the test :)
        </h4>
      ) : (
        <h4 className="text-danger">
          {JSON.parse(localStorage.getItem("userDetails"))[0].fullName} your final score is{" "}
          {localStorage.getItem("score")} and you failed the test please try again!
        </h4>
      )}
      <br />
      <button className="btn btn-primary w-100" onClick={tryAgain}>
        Start Again
      </button>
    </div>
  );
}

export default Result;
