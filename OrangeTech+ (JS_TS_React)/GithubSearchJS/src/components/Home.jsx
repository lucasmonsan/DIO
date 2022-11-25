import { useEffect, useState } from "react"
import { Section, Header, Footer, Img, Input, Button } from "../styles/tags"
import { RiSearch2Line } from "react-icons/ri"

export const Home = () => {
  const [username, setUsername] = useState("");

  useEffect (() => {
    // fetch(`https://api.github.com/users/${username}/repos`)
    // .then(response => response.json())
    // .then(data => console.log(data))
  }, [username]);

  return (
    <Section>
      <Header>
        <Img src="https://firebasestorage.googleapis.com/v0/b/monsan-dev.appspot.com/o/GitHubSearchJS%2FgithubSearch_logo.png?alt=media&token=df7b85fd-8ea4-430d-b304-f47bc47ada56" alt="logo do site"/>
      </Header>
      <br />
      <Footer>
        <Input placeholder="Digite o username do GitHub..." value={username} onChange={e => setUsername(e.target.value)}/> 
        <Button>
          <RiSearch2Line/>
        </Button>   
      </Footer>
    </Section>
  )
}