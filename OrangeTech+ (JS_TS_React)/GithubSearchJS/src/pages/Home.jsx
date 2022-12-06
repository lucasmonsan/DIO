import { useEffect, useState } from "react"
import { PageBox, Header, LogoContainer, Title, Title2 } from "../styles/tags"
import { SearchBar } from "../components/SearchBar";
import { SearchResult } from "../components/SearchResult";
import { Player } from '@lottiefiles/react-lottie-player';

export const Home = () => {
  const [resultList, setResultList] = useState([]);
  const [headerStage, setHeaderStage] = useState(false);
  
  useEffect(() => {
    if (headerStage) {
      const aux = document.getElementById("Header");
      
      aux.style.top = "0";
      aux.style.borderRadius = "0 0 1em 1em"
    }
  },[headerStage])
  
  return (
    <PageBox>
      <Header id="Header">
        <LogoContainer>
          <Title>GitHub</Title>
          <Title2>Search</Title2>
          <Player autoplay loop src="https://assets4.lottiefiles.com/packages/lf20_5EI9XwtboP.json" style={{ height: "3.5em"}}/>
        </LogoContainer>
        <br />
        <SearchBar resultList={resultList} setResultList={setResultList} setHeaderStage={setHeaderStage}/>
      </Header>
      
      
      {resultList.length > 0 && <SearchResult resultList={resultList}/>}
    </PageBox>
  )
}