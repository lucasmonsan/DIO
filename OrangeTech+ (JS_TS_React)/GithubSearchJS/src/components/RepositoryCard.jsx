import { RepositoryContainer, RepositoryColor, RepositoryTitle, RepositoryDescription } from "../styles/tags"

export const RepositoryCard = ({ result }) => {
  return (
    <RepositoryContainer>
      <RepositoryColor bgColor={result.color}/>
      
      <RepositoryTitle>{result.name}</RepositoryTitle>
      
      <RepositoryDescription>{result.description}</RepositoryDescription>
    </RepositoryContainer>
  )
}