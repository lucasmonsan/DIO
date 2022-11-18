import { useState } from "react"
import { Section, Div, ButtonNumber, ButtonOperation, Span, Strong } from "../../styles/tags"

import { FaAngleLeft, FaDivide, FaGripLines, FaMinus, FaPercentage, FaPlus } from 'react-icons/fa';
import { FaUndo , FaTimes } from 'react-icons/fa';

export const Home = () => {
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");
  const [history, setHistory] = useState([{

  }]);

  function handleClear (action) {
    if (action === "simple") {
      setResult("0");
    } else {
      setResult("0");
      setHistory([]);
    }
  }
  function handlePercent () {
    setResult(result / 100);
  }
  function handleClickNumbers (character) {
    if ((result === "0") || (result === 0)) {
      setResult(character);
    } else {
      setResult(result + character);
    }
  }
  function handleOperations (operation) {
    for (let n=0; n<=history.length; n++) {
      if (history[0] === undefined) {
        setHistory(history => [...history, result + " + "]);
        return
      } else if ((history[0] !== undefined) && (history[0].slice(-1) === " ") ) {
        setHistory[0]()
        return
      }
    }
  }

  return (
    <Section>
      <Div display="flex" gap="0">
        <Span textSize="0.5rem" color="#dfdede30" radius="1.5em 1.5em 0 0">{history[5]}</Span>
        <Span textSize="0.65rem" color="#dfdede50">{history[2]}</Span>
        <Span textSize="0.8rem" color="#dfdede70">{history[1]}</Span>
        <Span textSize="0.95rem" color="#dfdede90">{history[3]}</Span>
        <Span textSize="1.1rem" color="#dfdedeb0">{history[4]}</Span>
        <Span textSize="1.25rem" color="#dfdeded0">{history[0]}</Span>
        <Strong>{result}</Strong>
      </Div>

      <Div>
<<<<<<< HEAD
        <ButtonOperation onClick={e => handleClear("simple")}>C</ButtonOperation>
        <ButtonOperation onClick={e => handlePercent()}><FaPercentage/></ButtonOperation>
=======
        <ButtonOperation>C</ButtonOperation>
        <ButtonOperation onClick={handleClick}><FaPercentage/></ButtonOperation>
>>>>>>> 8ba7560e4abdc623df4c1bac98daacde29f59ce8
        <ButtonOperation><FaAngleLeft/></ButtonOperation>
        <ButtonOperation><FaDivide/></ButtonOperation>
        <ButtonNumber onClick={e => handleClickNumbers("7")}>7</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("8")}>8</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("9")}>9</ButtonNumber>
        <ButtonOperation><FaTimes/></ButtonOperation>
        <ButtonNumber onClick={e => handleClickNumbers("4")}>4</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("5")}>5</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("6")}>6</ButtonNumber>
        <ButtonOperation><FaMinus/></ButtonOperation>
        <ButtonNumber onClick={e => handleClickNumbers("1")}>1</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("2")}>2</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("3")}>3</ButtonNumber>
        <ButtonOperation onClick={e => handleOperations("add")}><FaPlus/></ButtonOperation>
        <ButtonOperation onClick={e => handleClear("complete")}><FaUndo/></ButtonOperation>
        <ButtonNumber onClick={e => handleClickNumbers("0")}>0</ButtonNumber>
        <ButtonNumber>.</ButtonNumber>
        <ButtonOperation><FaGripLines/></ButtonOperation>
      </Div>
    </Section>
  )
}