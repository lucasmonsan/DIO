import { useState } from "react"
import { Section, Div, ButtonNumber, ButtonOperation, Span, Strong } from "../../styles/tags"

import { FaAngleLeft, FaDivide, FaGripLines, FaMinus, FaPercentage, FaPlus } from 'react-icons/fa';
import { FaUndo , FaTimes } from 'react-icons/fa';

export const Home = () => {
  const [number, setNumber] = useState(0);
  const [oldNumber, setOldNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const [history0, setHistory0] = useState("");
  const [history1, setHistory1] = useState("");
  const [history2, setHistory2] = useState("");
  const [history3, setHistory3] = useState("");
  const [history4, setHistory4] = useState("");
  const [history5, setHistory5] = useState("");

  function handleClear (action) {
    if (action === "simple") {
      setOldNumber(0);
      setNumber(0);
      setOperator("");
    } else {
      setOldNumber(0);
      setNumber(0);
      setOperator("");
      setHistory0("");
      setHistory1("");
      setHistory2("");
      setHistory3("");
      setHistory4("");
      setHistory5("");
    }
  }
  function handlePercent () {
    setNumber(number / 100);
  }
  function handleClickNumbers (character) {
    if ((number === 0) && (character !== ".")) {
      setNumber(character);
    } else {
      setNumber(number + character);
    }
  }
  function handleOperations (operation) {    
    if (operator === "") {
      setOperator(operation);
      setOldNumber(number);
      if (operation === "sum") {
        setHistory0(number + " + ");
      } else if (operation === "sub") {
        setHistory0(number + " - ");
      } else if (operation === "div") {
        setHistory0(number + " / ");
      } else if (operation === "mult") {
        setHistory0(number + " x ");
      }
    } else if (number === 0) {
      if (operation === "sum") {
        setHistory0(oldNumber + " + ");
      } else if (operation === "sub") {
        setHistory0(oldNumber + " - ");
      } else if (operation === "div") {
        setHistory0(oldNumber + " / ");
      } else if (operation === "mult") {
        setHistory0(oldNumber + " x ");
      }
      setOperator(operation);
    } else if (history1 === "") {
      if (operator === "sum") {
        setHistory1(oldNumber + " + " + number + " = " + (parseFloat(oldNumber) + parseFloat(number)));
      } else if (operator === "sub") {
        setHistory1(oldNumber + " - " + number + " = " + (parseFloat(oldNumber) - parseFloat(number)));
      } else if (operator === "div") {
        setHistory1(oldNumber + " / " + number + " = " + (parseFloat(oldNumber) / parseFloat(number)));
      } else if (operator === "mult") {
        setHistory1(oldNumber + " x " + number + " = " + (parseFloat(oldNumber) * parseFloat(number)));
      }

      if (operation === "sum") {
        setOldNumber(parseFloat(oldNumber) + parseFloat(number));
        setHistory0((parseFloat(oldNumber) + parseFloat(number)) + " + ");
      } else if (operation === "sub") {
        setOldNumber(parseFloat(oldNumber) - parseFloat(number))
        setHistory0((parseFloat(oldNumber) + parseFloat(number)) + " - ");
      } else if (operation === "div") {
        setOldNumber(parseFloat(oldNumber) / parseFloat(number))
        setHistory0((parseFloat(oldNumber) + parseFloat(number)) + " / ");
      } else if (operation === "mult") {
        setOldNumber(parseFloat(oldNumber) * parseFloat(number))
        setHistory0((parseFloat(oldNumber) + parseFloat(number)) + " x ");
      }
      setOperator(operation);
    } else {
      if (operation === "sum") {
        setHistory1(oldNumber + " + " + number + " = " + (parseFloat(oldNumber) + parseFloat(number)));
        setOldNumber(parseFloat(oldNumber) + parseFloat(number));
        setHistory0((parseFloat(oldNumber) + parseFloat(number)) + " + ");
      } else if (operation === "sub") {
        setHistory1(oldNumber + " - " + number + " = " + (parseFloat(oldNumber) - parseFloat(number)));
        setOldNumber(parseFloat(oldNumber) - parseFloat(number))
        setHistory0((parseFloat(oldNumber) + parseFloat(number)) + " - ");
      } else if (operation === "div") {
        setHistory1(oldNumber + " / " + number + " = " + (parseFloat(oldNumber) / parseFloat(number)));
        setOldNumber(parseFloat(oldNumber) / parseFloat(number))
        setHistory0((parseFloat(oldNumber) + parseFloat(number)) + " / ");
      } else if (operation === "mult") {
        setHistory1(oldNumber + " x " + number + " = " + (parseFloat(oldNumber) * parseFloat(number)));
        setOldNumber(parseFloat(oldNumber) * parseFloat(number))
        setHistory0((parseFloat(oldNumber) + parseFloat(number)) + " x ");
      }
      reorderHistory(operator);
      setOperator(operation);
    }

    setNumber(0);
  }
  function reorderHistory (operation) {
    setHistory5(history4);
    setHistory4(history3);
    setHistory3(history2);
    setHistory2(history1);
  }

  return (
    <Section>
      <Div display="flex" gap="0">
        <Span textSize="0.5rem" color="#dfdede30" radius="1.5em 1.5em 0 0">{history5}</Span>
        <Span textSize="0.65rem" color="#dfdede50">{history4}</Span>
        <Span textSize="0.8rem" color="#dfdede70">{history3}</Span>
        <Span textSize="0.95rem" color="#dfdede90">{history2}</Span>
        <Span textSize="1.1rem" color="#dfdedeb0">{history1}</Span>
        <Span textSize="1.25rem" color="#dfdeded0">{history0}</Span>
        <Strong>{number}</Strong>
      </Div>

      <Div>
        <ButtonOperation onClick={e => handleClear("simple")}>C</ButtonOperation>
        <ButtonOperation onClick={e => handlePercent()}><FaPercentage/></ButtonOperation>
        <ButtonOperation><FaAngleLeft/></ButtonOperation>
        <ButtonOperation onClick={e => handleOperations("div")}><FaDivide/></ButtonOperation>
        <ButtonNumber onClick={e => handleClickNumbers("7")}>7</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("8")}>8</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("9")}>9</ButtonNumber>
        <ButtonOperation onClick={e => handleOperations("mult")}><FaTimes/></ButtonOperation>
        <ButtonNumber onClick={e => handleClickNumbers("4")}>4</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("5")}>5</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("6")}>6</ButtonNumber>
        <ButtonOperation onClick={e => handleOperations("sub")}><FaMinus/></ButtonOperation>
        <ButtonNumber onClick={e => handleClickNumbers("1")}>1</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("2")}>2</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("3")}>3</ButtonNumber>
        <ButtonOperation onClick={e => handleOperations("sum")}><FaPlus/></ButtonOperation>
        <ButtonOperation onClick={e => handleClear("complete")}><FaUndo/></ButtonOperation>
        <ButtonNumber onClick={e => handleClickNumbers("0")}>0</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers(".")}>.</ButtonNumber>
        <ButtonOperation><FaGripLines/></ButtonOperation>
      </Div>
    </Section>
  )
}