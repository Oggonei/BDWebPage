import { BrowserRouter } from "react-router-dom"
import Routes from "./pages/routes/Routes"
import Layout from "./components/layout/Layout"
import NavBar from "./components/navBar/NavBar"
import Footer from './components/footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Layout>
        <Routes/>
      </Layout>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
