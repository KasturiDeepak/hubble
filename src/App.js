import { ThemeProvider } from "styled-components";
import Card from "./components/card";
import Header from "./components/header";
import { Container} from "./components/styles/container.styles";
import GlobalStyle from "./components/styles/global.styles";
import content from "./content";


const theme = {
colors: {
  header: '#EEFAFE',
  body: '#fff',
  footer:'#003333'
},

responsive:{
  mobile:'768px',
}

}

function App() {

  return (
    <ThemeProvider theme = {theme}>
    <>
    <GlobalStyle/>
     <Header/>
      <Container>
{
  content.map((item)=>(
    <Card key={item.id} item={item}/>
    ))
  }

      </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
