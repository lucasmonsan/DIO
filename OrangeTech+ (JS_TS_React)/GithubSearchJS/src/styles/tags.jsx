import styled from "styled-components";

//COMPONENTES GERAIS
export const PageBox = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25em;

  height: 100vh;
`
//SEARCH BAR
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  width: min(80vw, 640px);

  border-radius: 8px;
  box-shadow: 0 0 0.5em #00000050;
`
export const SearchIconBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  padding: ${props => props.padding};

  font-size: ${props => props.fontSize};
  border-radius: ${props => props.radius};
  background-color: ${props => props.bgColor};
  color: white;
`
export const SearchInput = styled.input`
  outline: none;

  width: 100%;
  height: 40px;
  padding: 0 0.25em;

  font-size: 1.25rem;
  text-align: center;
  border: none;
  background-color: white;
  color: #2b2d42;
`
//SEARCH RESULT
export const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.25em;

  width: min(80vw, 640px);
  padding: 0.25em;

  border-radius: 8px;
  background-color: white;

  transition: all 0.25s ease-in-out;
`
//REPOSITORY
export const RepositoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 100%;
  height: 128px;

  border: solid 0.1em red;
  border-radius: 8px;
`
export const RepositoryDiv = styled.div`
  display: flex;

  width: 100%;
  height: ${props => props.height};

  background-color: ${props => props.bgColor};
`