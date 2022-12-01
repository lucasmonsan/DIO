import styled from "styled-components";

//COMPONENTES GERAIS
export const PageBox = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25em;

  height: 100vh;
`
export const Header = styled.header`
  position: fixed;
  top: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 184px;
  padding-bottom: 0.5em;

  background-color: #272a30;
  box-shadow: 0 0 0.5em #00000030;

  transition: all 0.4s ease-in-out;
`
//LOGO
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: min(80vw, 640px);
  max-height: 128px;

  color: white;
`
export const Title = styled.h1`
  line-height: 100%;
  font-size: min(9vw, 2rem);
  font-weight: 600;
`
export const Title2 = styled.h2`
  padding: 0 0.25em;
  line-height: 100%;
  font-size: min(9vw, 2rem);
  font-weight: 300;
`
//SEARCH BAR
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25em;

  width: min(80vw, 640px);

  border-radius: 8px;
  box-shadow: 0 0 0.5em #00000050;
`
export const SearchIconBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: min(15vw, 100%);
  max-width: 40px;
  height: 40px;
  padding: ${props => props.padding};

  font-size: min(7vw, ${props => props.fontSize});
  border-radius: ${props => props.radius};
  background-color: ${props => props.bgColor};
  color: ${props => props.color || "white"};
`
export const SearchInput = styled.input`
  outline: none;

  width: 100%;
  height: 40px;
  padding: 0 0.25em;

  font-size: min(6vw, 1.25rem);
  text-align: center;
  border: none;
  background-color: white;
  color: #2b2d42;
`
//SEARCH RESULT
export const ResultContainer = styled.div`
  display: grid;
  gap: 0.5em;

  width: min(90vw, 1440px);
  padding: 0.25em;
  margin-top: 192px;

  border-radius: 8px;

  transition: all 0.25s ease-in-out;

  @media (min-width: 320px) {grid-template-columns: repeat(2, 1fr)};
  @media (min-width: 520px) {grid-template-columns: repeat(3, 1fr)};
  @media (min-width: 720px) {grid-template-columns: repeat(4, 1fr)};
  @media (min-width: 920px) {grid-template-columns: repeat(5, 1fr)};
  @media (min-width: 1280px) {grid-template-columns: repeat(6, 1fr)};
  @media (min-width: 1440px) {grid-template-columns: repeat(7, 1fr)};
  @media (min-width: 1680px) {grid-template-columns: repeat(8, 1fr)};
  @media (min-width: 1920px) {grid-template-columns: repeat(9, 1fr)};
`
//REPOSITORY
export const RepositoryContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  min-width: 100%;
  height: 128px;

  border-radius: 8px;
  background-color: white;
`
export const RepositoryColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 30%;

  background-color: ${props => props.bgColor};
`
export const RepositoryTitle = styled.strong`
  padding: 0.25em;

  font-size: 1.1rem;
  text-align: center;
`
export const RepositoryDescription = styled.span`
  padding: 0.25em;

  font-size: 0.8rem;
  text-align: center;
`