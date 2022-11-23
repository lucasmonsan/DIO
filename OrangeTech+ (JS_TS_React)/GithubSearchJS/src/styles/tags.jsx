import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`
export const Header = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 100%;
  height: 55%;
  padding: 0.5em;
`
export const Footer = styled.footer`
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 40%;
  padding: 0.5em;
`
export const Img = styled.img`
  height: 100%;
  max-height: 240px;
`
export const Input = styled.input`
  outline: none;

  width: 90vw;
  height: fit-content;
  max-width: 640px;
  padding: 0.15em;

  color: #2b2d42;

  font-size: 1.5rem;
  text-align: center;
  border: none;
  border-radius: 100em;

  transition: all 0.25s ease-in-out;

  :focus {
    padding: 0.25em;
    font-size: 1.75rem;
  }
`