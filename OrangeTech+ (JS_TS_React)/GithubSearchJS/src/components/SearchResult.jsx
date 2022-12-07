import { ResultContainer } from "../styles/tags";
import { RepositoryCard } from "./RepositoryCard";

export const SearchResult = ({ resultList }) => { 
  return (
    <>
      <ResultContainer>
        {resultList.length > 0 && alert("Resultados")}
      </ResultContainer>
    </>
  )
}