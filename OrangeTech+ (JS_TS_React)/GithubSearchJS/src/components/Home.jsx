import { Section, Header, Footer, Img, Input } from "../styles/tags"

export const Home = () => {
  return (
    <Section>
      <Header>
        <Img height="50vh" src="https://firebasestorage.googleapis.com/v0/b/monsan-dev.appspot.com/o/GitHubSearchJS%2FgithubSearch_logo.png?alt=media&token=4132ff65-cae2-4b80-b708-44034ccbe697" alt="logo do site"/>
      </Header>
      <br />
      <Footer>
        <Input placeholder="Digite o @username aqui..."/>        
      </Footer>
    </Section>
  )
}