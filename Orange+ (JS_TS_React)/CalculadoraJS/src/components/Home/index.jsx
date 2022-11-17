import { useState } from "react"
import { Section, Div, ButtonNumber, ButtonOperation, Span, Strong } from "../../styles/tags"

import { FaAngleLeft, FaDivide, FaGripLines, FaMinus, FaPercentage, FaPlus } from 'react-icons/fa';
import { FaUndo , FaTimes } from 'react-icons/fa';

export const Home = () => {
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");
  const [history, setHistory] = useState(["-1","-2","-3","-4","-5","-6"])

  function handleClick () {
    alert("character")
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
        <ButtonOperation>C</ButtonOperation>
        <ButtonOperation onClick={handleClick}><FaPercentage/></ButtonOperation>
        <ButtonOperation><FaAngleLeft/></ButtonOperation>
        <ButtonOperation><FaDivide/></ButtonOperation>
        <ButtonNumber>7</ButtonNumber>
        <ButtonNumber>8</ButtonNumber>
        <ButtonNumber>9</ButtonNumber>
        <ButtonOperation><FaTimes/></ButtonOperation>
        <ButtonNumber>4</ButtonNumber>
        <ButtonNumber>5</ButtonNumber>
        <ButtonNumber>6</ButtonNumber>
        <ButtonOperation><FaMinus/></ButtonOperation>
        <ButtonNumber>1</ButtonNumber>
        <ButtonNumber>2</ButtonNumber>
        <ButtonNumber>3</ButtonNumber>
        <ButtonOperation><FaPlus/></ButtonOperation>
        <ButtonOperation><FaUndo/></ButtonOperation>
        <ButtonNumber>0</ButtonNumber>
        <ButtonNumber>.</ButtonNumber>
        <ButtonOperation><FaGripLines/></ButtonOperation>
      </Div>
    </Section>
  )
}