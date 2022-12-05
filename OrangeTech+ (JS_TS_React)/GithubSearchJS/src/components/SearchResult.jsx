import { useState } from "react";
import { ResultContainer } from "../styles/tags";
import { RepositoryCard } from "./RepositoryCard";

export const SearchResult = ({ resultList }) => {
  const [oldNumber, setOldNumber] = useState(0);
  const [colors, setColors] = useState([]);
  
  function ChoiceColor() {
    while (colors.length < resultList.length) {
      const random = (Math.floor(Math.random() * (10) + 1));
      
      if (random !== oldNumber) {
        setOldNumber(random);
        
        if (random === 1) {
          setColors(colors.push("#ff595e"));
        } else if (random === 2) {
          setColors(colors.push("#ff924c"));
        } else if (random === 3) {
          setColors(colors.push("#ffca3a"));
        } else if (random === 4) {
          setColors(colors.push("#c5ca30"));
        } else if (random === 5) {
          setColors(colors.push("#8ac926"));
        } else if (random === 6) {
          setColors(colors.push("#52a675"));
        } else if (random === 7) {
          setColors(colors.push("#1982c4"));
        } else if (random === 8) {
          setColors(colors.push("#4267ac"));
        } else if (random === 9) {
          setColors(colors.push("#6a4c93"));
        }
      }
    }
    console.log(colors);
  }
  
  return (
    <>
      {ChoiceColor()};
      <ResultContainer>
        
      </ResultContainer>
    </>
  )
}