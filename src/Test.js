import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function Test() {
  const [ques, setQues] = useState([
    {
      passage: "",
      questionTitle: "",
      questionText: "",
      option: "",
    },
  ]);

  useEffect(() => {
    fetch("/test")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setQues(jsonRes));
    console.log(ques);
  });
  return (
    <>
      <Navbar />
      <div className="flex justify-center align-center">
        <div className=" flex flex-1 flex-col justify-center px-6 py-6 shadow-2xl max-w-5xl rounded  m-10">
          <div className="">Question Bank</div>
          <div
            className="w-full rounded mt-2"
            style={{ widht: "100vw", height: "2vh", background: "#ece469" }}
          ></div>
          <div>
            {
              // ques.length === 0 ? (
              //   <div>Loading...</div>
              // ) : (
              <>
                {ques.map((que) => (
                  <div className="m-5 border  ">
                    <span>Question</span>
                    <h1 className="text m-10">{que.passage}</h1>

                    <h1 className=" font-bold mb-2 mt-5">
                      {que.questionTitle}
                    </h1>
                    <h1 className="text-lg mb-2">{que.questionText}</h1>
                    <h1 className="">{que.option}</h1>
                  </div>
                ))}
              </>
              // )
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Test;
