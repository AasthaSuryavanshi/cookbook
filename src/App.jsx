import Bgimg from "./components/Bgimg"
import Headings from "./components/Heading2"
import Nav from "./components/Nav"
import Products from "./components/Products"
import Slider from "./components/Slider"
import Heading1 from "./components/Heading1"
import Slider2 from "./components/Slider2"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Nav />
      <Slider />
      <Headings />
      <Products />
      <Bgimg />
      <Heading1 />
      <Slider2 />
      <Footer />
    </div>
  )
}

export default App