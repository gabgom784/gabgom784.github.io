import React from "react";
import "./questionBox.css";

const QuestionBox = ({question}) => {
    return (
        <div className="QuestionBox">{question}</div>
    )
}

export default QuestionBox;