import { RepositoryContainer, RepositoryColor, RepositoryTitle, RepositoryDescription } from "../styles/tags"

export const RepositoryCard = ({ result, oldNumber, setOldNumber }) => {
  function ChoiceColor() {
    const number = Math.floor(Math.random() * (11 - 1) + 1);

    if (number !== oldNumber) {
      setOldNumber(number);
      
      if (number === 1) return "#ff595e"; else
      if (number === 2) return "#ff924c"; else
      if (number === 3) return "#ffca3a"; else
      if (number === 4) return "#c5ca30"; else
      if (number === 5) return "#8ac926"; else
      if (number === 6) return "#36949d"; else
      if (number === 7) return "#1982c4"; else
      if (number === 8) return "#4267ac"; else
      if (number === 9) return "#565aa0"; else
      if (number === 10) return "#6a4c93";
    } else {
      console.log("Repetiu");
    }
  }

  return (
    <RepositoryContainer>
      <RepositoryColor bgColor={ChoiceColor()}/>

      <RepositoryTitle>{result.name}</RepositoryTitle>

      <RepositoryDescription>{result.description}</RepositoryDescription>
    </RepositoryContainer>
  )
}