import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowRight from "../components/arrowright";
import Choice from "../components/choice";
import otherService from "../services/other.service";

const choices = ["A", "B", "C", "D", "E"];

function ScreenB1() {
  const [choiceValue, setChoiceValue] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function getChoiceValue(value) {
    setChoiceValue(value);
  }

  async function ButtonClick(e) {
    const submit = await otherService.rSubmitSelection();
    if (submit.status === 200)
      navigate("../screenC1", {
        replace: true,
        state: { name: choiceValue, prevPath: location.pathname },
      });
  }

  return (
    <>
      <div id="screenB1">
        <div id="screenB1C">
          {choices.map((choice) => (
            <Choice
              key={choice}
              className={"Choice " + choice === choiceValue ? "newBorder" : ""}
              name={"Choice " + choice}
              getValue={getChoiceValue}
            />
          ))}
        </div>
        <ArrowRight onClick={ButtonClick} />
      </div>
    </>
  );
}

export default ScreenB1;
