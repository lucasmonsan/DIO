import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #363E3C;
`
export const Div = styled.div`
  width: 100%;
  height: 100%;
  max-width: 540px;
  max-height: 480px;
  padding: 0.5em;

  display: ${props => props.display || "grid"};
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: ${props => props.gap || "0.5em"};
  flex-direction: column;
`
export const ButtonNumber = styled.button`
  cursor: pointer;

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
export const ButtonOperation = styled.button`
  cursor: pointer;

  color: #DFDEDE;
  background-color: #E76F51;

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
export const Span = styled.span`
  color: ${props => props.color};
  background-color: #060709;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 0.5em;

  text-align: center;
  font-size: ${props => props.textSize};
  border: none;
  border-radius: ${props => props.radius || 0};
`
export const Strong = styled.strong`
  cursor: pointer;

  color: #DFDEDE;
  background-color: #060709;

  padding: 0.15em;

  text-align: center;
  font-size: 2.25rem;
  border: none;
  border-radius: 0 0 0.5em 0.5em;

  -moz-user-select:none; /* firefox */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE*/
   user-select: none; /* Standard syntax */
`