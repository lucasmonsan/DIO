import { useState } from "react"
import axios from "axios";
import { SearchIconBox, SearchContainer, SearchInput } from "../styles/tags"
import { RiAtLine, RiGitRepositoryLine, RiSearch2Line } from "react-icons/ri"

export const SearchBar = ({ resultList, setResultList, setHeaderStage }) => {
  const [searchMode, setSearchMode] = useState("username");
  const [searchInput, setSearchInput] = useState("");

  function HandleSearchMode () {
    if (searchMode === "username") {
      setSearchMode("repository");
    } else {
      setSearchMode("username");
    }
  };
  const SearchUser = () => {
    axios.get(`https://api.github.com/users/${searchInput}/repos`)
    .then(res => {
      setHeaderStage(true);
      setResultList(res.data);

      res.data.map((repo) => {
        console.log(repo);
      })
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