import styled from "styled-components";

interface Props {
  display?: string;
  bgcolor?: string;
  gap?: string;
}

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Div = styled.div<Props>`
  width: 100%;
  height: 100%;
  padding: 0.5em;

  display: ${props => props.display || "grid"};
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: ${props => props.gap || "0.5em"};
  flex-direction: column;

  background-color: ${props => props.bgcolor || "#363E3C"};
`
export const Button = styled.button<Props>`
  color: #DFDEDE;
  background-color: ${props => props.bgcolor || "#5D5F63"};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.5em;
  font-size: 1.25rem;
  font-weight: bold;
  transition: all 0.1s;

  :active{
    transform: scale(0.95)
  }
`
export const Textarea = styled.textarea`
  resize: none;
  outline: none;
  color: #DFDEDE;
  background-color: #060709;

  width: 100%;
  height: 100%;
  padding: 0.5em;

  text-align: center;
  font-size: 1.25rem;
  border: none;
  border-radius: 0.5em 0.5em 0 0;
`
export const Strong = styled.strong`
  color: #DFDEDE;
  background-color: #060709;

  padding: 0.25em;

  text-align: center;
  font-size: 2rem;
  border: none;
  border-radius: 0 0 0.5em 0.5em;
`