import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function Test() {
  const [ques, setQues] = useState([]);

  const fechQuestion = async () => {
    try {
      const res = await fetch("/test");
      const ques = await res.json();
      setQues(ques.data);
      console.log(ques);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fechQuestion();
  }, []);

  
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
            {ques.length === 0 ? (
              <div>Loading...</div>
            ) : (
              <>
                {ques.map((que) => (
                  <div className="m-5 border ">
                    <span className="ml-8 ">Passage</span>
                    <h1 className="text m-8 border p-3">{que.passage}</h1>
                    <h1 className=" font-bold mb-2 mt-5 ml-8">
                      {que.questionTitle}
                    </h1>
                    <h1 className="text-lg mb-2 ml-8">{que.questionText}</h1>
                    <h1 className="ml-8 mb-3">{que.option}</h1>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Test;
