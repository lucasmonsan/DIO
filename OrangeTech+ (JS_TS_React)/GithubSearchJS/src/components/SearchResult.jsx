import { useState } from "react"
import { ResultContainer } from "../styles/tags"
import { RepositoryCard } from "./RepositoryCard"

export const SearchResult = ({ resultList }) => {
  const [oldNumber, setOldNumber] = useState(0);

  return (
    <>
      <ResultContainer>
        {resultList.map((result) => <RepositoryCard key={result.id} result={result} oldNumber={oldNumber} setOldNumber={setOldNumber}/>)}
      </ResultContainer>
    </>
  )
}