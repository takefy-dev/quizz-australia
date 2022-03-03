import React, { useEffect, useState, useMemo } from "react";
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";

function Question({ question }) {

  return (
    <div id={question.id} className="question">
      <div className="w-96 relative mb-6 flex items-center">
        <div className="form-field"></div>
        <div className="form-label">{question.question}</div>
      </div>
      <div className="possible-answer self-center grid grid-cols-2">
        {question.choices.map((choice, i) => 
          <Checkbox
          icon={<Icon.FiCheck color="white" size={14} />}
          name="my-input"
          checked={false}
          className="ml-4 text-white"
          key={i}
          data-key={i}
          onChange={(value) => {}}
          borderColor="#6116ff"
          style={{ cursor: "pointer" }}
          labelStyle={{ marginLeft: 10, userSelect: "false" }}
          label={choice}
        />
        )}
      </div>
    </div>
  );
}

export default Question;
