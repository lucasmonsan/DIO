import { RepositoryContainer, RepositoryColor, RepositoryTitle, RepositoryDescription } from "../styles/tags"

export const RepositoryCard = ({ result }, props) => {
  return (
    <RepositoryContainer>
      <RepositoryColor bgColor={props.color}/>
      
      <RepositoryTitle>{result.name}</RepositoryTitle>
      
      <RepositoryDescription>{result.description}</RepositoryDescription>
    </RepositoryContainer>
  )
}