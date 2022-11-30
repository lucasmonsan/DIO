import { ResultContainer } from "../styles/tags"
import { RepositoryCard } from "./RepositoryCard"

export const SearchResult = ({ resultList }) => {
  return (
    <>
      <ResultContainer>
        {resultList.map((result) => <RepositoryCard result={result}/>)}
      </ResultContainer>
    </>
  )
}