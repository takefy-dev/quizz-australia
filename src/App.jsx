import Question from "./Components/Question";
import questionsFile from "./question";
import { useState } from "react";
import Result from "./Components/Result";
import Button from "./Components/Button";
import questions from "./question";
function App() {
  const [score, setScore] = useState(0);
  const [asSubmit, setSubmit] = useState(false);

  const correction = () => {
    const questions = Array.from(document.querySelectorAll(".question"));
    for (const question of questions) {
      const questionId = question.getAttribute("id");
      const actualQuestion = questionsFile[questionId];
      const inputs = Array.from(question.querySelectorAll("input"));
      for (const input of inputs) {
        const id = input.getAttribute("data-key");
        const isCorrect =
          actualQuestion.choices[parseInt(id)] ===
          actualQuestion.choices[actualQuestion.answer];
        if (isCorrect && !input.checked) {
          input.click();
        }
      }
    }
  };

  const handleSubmit = (e) => {
    setSubmit(true);
    let rightScore = 0;

    const questions = Array.from(document.querySelectorAll(".question"));
    for (const question of questions) {
      const questionId = question.getAttribute("id");
      const answers = Array.from(question.querySelectorAll("input")).filter(
        (input) => input.checked
      );
      const actualQuestion = questionsFile[questionId];
      if (answers.length > 1) {
        return alert("Please select only 1 answer per question");
      }
      if (answers.length === 1) {
        const isCorrect =
          actualQuestion.choices[
            parseInt(answers[0].getAttribute("data-key"))
          ] === actualQuestion.choices[actualQuestion.answer];
        if (isCorrect) {
          rightScore += 1;
          setScore(rightScore);
        } else {
          answers[0].parentElement.querySelector("svg").style.color = "red";
        }
      }
      correction();
    }
  };
  return (
    <>
      <div className="flex justify-center flex-col text-white items-center py-30 bg-bg">
        <div className="text-3xl m-10">
          <strong>{questionsFile.length}</strong> questions about australia !
        </div>
        {questionsFile.map((question, i) => (
          <Question question={question} key={i} />
        ))}
        <Button
          onClick={handleSubmit}
          text="Submit answers and check results"
        />
        {asSubmit ? <Result score={score} /> : ""}
      </div>
    </>
  );
}

export default App;
