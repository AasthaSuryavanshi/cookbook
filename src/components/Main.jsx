import Bgimg from "./Bgimg"
import Footer from "./Footer"
import Heading1 from "./Heading1"
import Headings from "./Heading2"
import Recipe from "./Recipes"
import Slider from "./Slider"
import Slider2 from "./Slider2"


const Main = () => {
    return (
        <div>
            <Slider />
            <Headings />
            <Recipe />
            <Bgimg />
            <Heading1 />
            <Slider2 />
            <Footer />
        </div>
    )
}

export default Main