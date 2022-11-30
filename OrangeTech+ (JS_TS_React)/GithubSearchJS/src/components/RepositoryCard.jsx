import { RepositoryContainer, RepositoryDiv } from "../styles/tags"

export const RepositoryCard = ({ result }) => {
  return (
    <RepositoryContainer>
      <RepositoryDiv height="20%" bgColor="red"/>
      {result.name}
      <br />
      {result.description}
    </RepositoryContainer>
  )
}