import './App.css';
import Nav from './NavBarComponent/NavBar';
import Main from './MainComponent/Main';
import Projects from './ProjectsComponent/Projects';
import Contact from './ContactComponent/Contact';
import Footer from './FooterComponent/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Main></Main>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
