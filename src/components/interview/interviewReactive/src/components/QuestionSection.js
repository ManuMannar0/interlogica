import React from "react";

const QuestionSection = (props) => {
  const { question, answers } = props.data;
  console.log(props.goToNexQuestion)
  return (
    <>
      <div className="question">{question}</div>
      {answers.map((e, i) => {
        return (
          <div key={i} onClick={() => props.goToNexQuestion()} className="answer">
            {e}
          </div>
        );
      })}
    </>
  );
};

export default QuestionSection;
