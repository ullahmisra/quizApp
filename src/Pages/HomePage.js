import React from 'react'
import {Link} from "react-router-dom"
function HomePage() {
  return (
    <div className="m-lg-5 row">
        <div className="col-lg-6 col-md-12  text-center p-0" >
          <img src="https://i.pinimg.com/736x/b7/b1/38/b7b138495126b90b35855af28716a610.jpg" className="img-fluid childIcon"/>
        </div>
        <div className="col-lg-6 col-md-12 my-auto px-lg-5 px-4">
        <div className="mb-4 text-center">
        <img src="https://images.freeimages.com/clg/istock/previews/8895/88958435-cartoon-quiz-sign.jpg" className="quizHeading"/>
        </div>
        <h1 className="heading">Welcome To Traveey Online Assignment Test</h1>
        <p className="para">
          Exercise your brain with these interesting quizzes and puzzles; win points, badges, prizes and impress your
          friends & colleagues!
        </p>
        <Link to="/registration">
        <button className="btn btn-primary w-50">Register</button>
        </Link>
        </div>  
      </div>
  )
}

export default HomePage