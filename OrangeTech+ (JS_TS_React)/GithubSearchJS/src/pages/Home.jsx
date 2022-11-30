import { useState } from "react"
import { PageBox } from "../styles/tags"
import { SearchBar } from "../components/SearchBar";
import { SearchResult } from "../components/SearchResult";

export const Home = () => {
  const [searchMode, setSearchMode] = useState("username");
  const [searchInput, setSearchInput] = useState("");
  const [resultList, setResultList] = useState([]);

  return (
    <PageBox>
      <SearchBar searchMode={searchMode} setSearchMode={setSearchMode} searchInput={searchInput} setSearchInput={setSearchInput} setResultList={setResultList}/>
      {resultList.length > 0 && <SearchResult resultList={resultList}/>}
    </PageBox>
  )
}