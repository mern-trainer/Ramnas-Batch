import "./HeroSection.css"
import video from "../../src/assets/hero-video.webm"
import { Fragment } from "react"
import { FaChevronRight } from "react-icons/fa"

const HeroSection = () => {
    return <Fragment>
        <div className="learn-more">
            Learn More <FaChevronRight />
        </div>
        <div className="hero-container">
            <video src={video} autoPlay loop muted></video>
            <div className="content">
                <p className="one">A new era for safety</p>
                <p className="two">Does how you feel affect how you drive?</p>
                <button>Learn More</button>
            </div>
        </div>
    </Fragment>
}

export default HeroSection