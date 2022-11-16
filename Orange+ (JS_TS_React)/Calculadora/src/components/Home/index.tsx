import { useState } from "react"
import { Section, Div, Button, Textarea, Strong } from "../../styles/tags"

import { FaAngleLeft, FaDivide, FaGripLines, FaMinus, FaPercentage, FaPlus } from 'react-icons/fa';
import { FaUndo , FaTimes } from 'react-icons/fa';

export const Home = () => {
  const [result, setResult] = useState(0);

  return (
    <Section>
      <Div display="flex" gap="0">
        <Textarea/>
        <Strong>{result}</Strong>
      </Div>

      <Div>
        <Button bgcolor="#E76F51">C</Button>
        <Button bgcolor="#E76F51"><FaPercentage/></Button>
        <Button bgcolor="#E76F51"><FaAngleLeft/></Button>
        <Button bgcolor="#E76F51"><FaDivide/></Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button bgcolor="#E76F51"><FaTimes/></Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button bgcolor="#E76F51"><FaMinus/></Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button bgcolor="#E76F51"><FaPlus/></Button>
        <Button bgcolor="#E76F51"><FaUndo/></Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button bgcolor="#E76F51"><FaGripLines/></Button>
      </Div>
    </Section>
  )
}