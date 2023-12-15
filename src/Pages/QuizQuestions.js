import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function QuizQuestions() {
  const params = useParams();
  const navigate = useNavigate();
  // const [question, setQuestion] = useState();
  const [options, setOptions] = useState([]);
  const [totalResponse, setTotalResponse] = useState(0);
  const getOptionList = () => {
    let optionArr = [];
    let question = JSON.parse(localStorage.getItem("questionList"))[params.id];
    let randomNum = Math.round(Math.random() * 100);
    if (question.type == "boolean") {
      optionArr[0] = question.correct_answer;
      optionArr[1] = question.incorrect_answers[0];
    } else {
      if (randomNum >= 0 && randomNum <= 25) {
        optionArr[0] = question.correct_answer;
        optionArr[1] = question.incorrect_answers[0];
        optionArr[2] = question.incorrect_answers[1];
        optionArr[3] = question.incorrect_answers[2];
      } else if (randomNum >= 26 && randomNum <= 50) {
        optionArr[0] = question.incorrect_answers[0];
        optionArr[1] = question.correct_answer;
        optionArr[2] = question.incorrect_answers[1];
        optionArr[3] = question.incorrect_answers[2];
      } else if (randomNum >= 51 && randomNum <= 75) {
        optionArr[0] = question.incorrect_answers[0];
        optionArr[1] = question.incorrect_answers[1];
        optionArr[2] = question.correct_answer;
        optionArr[3] = question.incorrect_answers[2];
      } else {
        optionArr[0] = question.incorrect_answers[0];
        optionArr[1] = question.incorrect_answers[1];
        optionArr[2] = question.incorrect_answers[2];
        optionArr[3] = question.correct_answer;
      }
    }

    setOptions(optionArr);
  };
  let handleSubmit = (value) => {
    let question = JSON.parse(localStorage.getItem("questionList"))[params.id];
    let currentAns = {
      optionSelected: value,
      correct_answer: question.correct_answer,
    };
    if (params.id == 0) {
      localStorage.setItem("answers", JSON.stringify([currentAns]));
      console.log(JSON.parse(localStorage.getItem("answers")).length);
      setTotalResponse(JSON.parse(localStorage.getItem("answers")).length);
    } else {
      let prevAnswers = JSON.parse(localStorage.getItem("answers"));
      let allAnswers = [...prevAnswers, currentAns];
      localStorage.setItem("answers", JSON.stringify(allAnswers));
      if (params.id != 0) {
        setTotalResponse(JSON.parse(localStorage.getItem("answers")).length);
        console.log(JSON.parse(localStorage.getItem("answers")).length);
      }
    }
  };
  const resultCalculate = () => {
    let score = 0;
    let allAnswers = JSON.parse(localStorage.getItem("answers"));
    for (let i = 0; i < allAnswers.length; i++) {
      if (allAnswers[i].correct_answer == allAnswers[i].optionSelected) {
        score = score + 5;
      } else {
        score = score - 1;
      }
    }
    localStorage.setItem("score", score);
    navigate("/result");
  };
  useEffect(() => {
    getOptionList();
    console.log(totalResponse);
  }, [params.id]);
  return (
    <div className="bg-light">
      <div className="vh-100  d-flex justify-content-center row align-items-center">
        <div
          className="p-lg-5 mobHeight  py-5 px-3 col-lg-4 col-md-6 col-sm-10"
          style={{ background: "whitesmoke", borderRadius: "5px", boxShadow: "2px 3px 10px black" }}
        >
          <div className="">
            <h3 className="mb-0 text-center" style={{ fontFamily: "monospace" }}>
              {JSON.parse(localStorage.getItem("questionList"))[params.id].question}
            </h3>
            <div className="row text-secondary p-4 mt-4">
              {options.map((v, i) => {
                return (
                  <button
                    className={
                      "col-sm-6 btn  col-12 p-2 option " +
                      (totalResponse > params.id &&
                      v == JSON.parse(localStorage.getItem("answers"))[params.id].optionSelected
                        ? " selectedOption"
                        : "") +
                      (totalResponse > params.id ? " disabled" : "")
                    }
                    onClick={() => handleSubmit(v)}
                  >
                    <span className="text-dark me-2 ">{i + 1}</span> {v}
                  </button>
                );
              })}
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-4">
              {params.id != 0 && (
                <button
                  className={"btn py-1 btn-secondary"}
                  onClick={() => navigate(`/question/${parseInt(params.id) - 1}`)}
                >
                  &#8678;Prev
                </button>
              )}
              {params.id != 9 && (
                <button
                  className={"btn py-1 btn-secondary " + (totalResponse > params.id ? "" : " disabled ") + (params.id == 0? " w-100" : " ")}
                  onClick={() => navigate(`/question/${1 + parseInt(params.id)}`)}
                >
                  Next &#8680;
                </button>
              )}
            </div>
            {params.id == 9 && (
              <div className="mt-3">
                <button
                  className={"btn w-100 btn-success " + (totalResponse == 10 ? " " : " disabled")}
                  onClick={resultCalculate}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestions;
