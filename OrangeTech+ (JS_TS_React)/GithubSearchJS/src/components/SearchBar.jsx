import { SearchIconBox, SearchContainer, SearchInput } from "../styles/tags"
import { RiAtLine, RiGitRepositoryLine, RiSearch2Line } from "react-icons/ri"

export const SearchBar = ({searchMode, setSearchMode, searchInput, setSearchInput, setResultList}) => {
  function HandleSearchMode () {
    if (searchMode === "username") {
      setSearchMode("repository");
    } else {
      setSearchMode("username");
    }
  }
  function SearchGit() {
    if (searchInput === "") {
      if (searchMode === "username") {
        alert("Digite algum username!")
      } else {
        alert("Digite o nome do repositório!")
      }
    } else {
      if (searchMode === "username") {
        fetch(`https://api.github.com/users/${searchInput}/repos`)
        .then(response => response.json())
        .then(data => {
          if (data.message === "Not Found") {
            alert("Nada encontrado")
          } else {
            setResultList(data);
          }
        })
      }
    }
  }

  return (
    <>
      <SearchContainer>
        <SearchIconBox radius="8px 0 0 8px" fontSize="1.5rem" bgColor="#944bbb" onClick={HandleSearchMode}>
          {searchMode === "username" && <RiAtLine/> || searchMode === "repository" && <RiGitRepositoryLine/>}
        </SearchIconBox>
        
        <SearchInput placeholder={searchMode} value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
        
        <SearchIconBox radius="0 8px 8px 0" fontSize="1.5rem" bgColor="#05a8aa" onClick={SearchGit}>
          <RiSearch2Line/>
        </SearchIconBox>
      </SearchContainer>
    </>
  )
}