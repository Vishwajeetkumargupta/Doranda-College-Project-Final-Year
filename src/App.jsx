import React from "react"
import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/hero/Hero"
import Titles from "./components/Titles/Titles"
import Programs from "./components/Programs/Programs"
import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Testimonials from "./components/Testimonials/Testimonials"
import Contect from "./components/Contect/Contect"
import Footer from "./components/Footer/Footer"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"

const App = () => {
  

  const [playVideo, setPlayVideo] = React.useState(false);

  return (
    <div>
      < NavBar />
      <Hero />
      <div className="container">
        <Titles subTitle='Our Program' title='Courses We Offer' />
        <Programs />
          <About setPlayVideo={setPlayVideo}/>
          <Titles subTitle='Gallery' title='Campus Photo' />
          <Campus />
          <Titles subTitle='TESTIMONIALS' title='What Student Says' />
          <Testimonials />
          <Titles subTitle='Contact Us' title='Get In Touch' />
          <Contect />
          <Footer />
      </div>
      <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo}/>
    </div>
  )
}

export default App
