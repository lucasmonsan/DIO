import { useState } from "react"
import axios from "axios";
import { SearchIconBox, SearchContainer, SearchInput } from "../styles/tags"
import { RiAtLine, RiGitRepositoryLine, RiSearch2Line } from "react-icons/ri"

export const SearchBar = ({ resultList, setResultList, setHeaderStage }) => {
  const [searchMode, setSearchMode] = useState("username");
  const [searchInput, setSearchInput] = useState("");
  
  const [auxNames, setAuxNames] = useState([]);
  const [auxDescriptions, setAuxDescriptions] = useState([]);
  const [auxColors, setAuxColors] = useState([]);
  
  function ChoiceColors(quant) {
    let random = (Math.floor(Math.random() * (10) + 1));
    
    for (let x=0; x<quant; x++) {
      if (random === 1) {
        setAuxColors(auxColors.push("#ff595e"))
        random++;
      } else if (random === 2) {
        setAuxColors(auxColors.push("#c5ca30"))
        random++;
      } else if (random === 3) {
        setAuxColors(auxColors.push("#1982c4"))
        random++;
      } else if (random === 4) {
        setAuxColors(auxColors.push("#ff924c"))
        random++;
      } else if (random === 5) {
        setAuxColors(auxColors.push("#8ac926"))
        random++;
      } else if (random === 6) {
        setAuxColors(auxColors.push("#4267ac"))
        random++;
      } else if (random === 7) {
        setAuxColors(auxColors.push("#ffca3a"))
        random++;
      } else if (random === 8) {
        setAuxColors(auxColors.push("#52a675"))
        random++;
      } else if (random === 9) {
        setAuxColors(auxColors.push("#6a4c93"))
        random = 1;
      }
    }
  };
  const HandleSearchMode = () => {
    if (searchMode === "username") {
      setSearchMode("repository");
    } else {
      setSearchMode("username");
    }
  };
  const SearchUser = () => {
    setResultList([]);
    setAuxColors([]);
    setAuxDescriptions([]);
    setAuxNames([]);
    
    axios.get(`https://api.github.com/users/${searchInput}/repos`)
    .then(res => {
      setHeaderStage(true);
      
      ChoiceColors(res.data.length);
      
      res.data.map((repo) => {
        setAuxNames(auxNames.push(repo.name));
        setAuxDescriptions(auxDescriptions.push(repo.auxDescriptions));
      })
      
      for (let x=0; x<res.data.length; x++) {
        setResultList(resultList.push({id:x, name:auxNames[x], description:auxDescriptions[x], color:auxColors[x]}))
      }
      console.log(resultList)
    })
    .catch(error => {
      SearchUser();
    })
  }
  
  return (
    <>
      <SearchContainer>
        <SearchIconBox radius="8px 0 0 8px" fontSize="1.5rem" bgColor="#9348b8" onClick={HandleSearchMode}>
          {searchMode === "username" && <RiAtLine/> || searchMode === "repository" && <RiGitRepositoryLine/>}
        </SearchIconBox>
        
        <SearchInput placeholder={searchMode} value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
        
        <SearchIconBox radius="0 8px 8px 0" fontSize="1.5rem" bgColor="#05a8aa" onClick={SearchUser}>
          <RiSearch2Line/>
        </SearchIconBox>
      </SearchContainer>
    </>
  )
}