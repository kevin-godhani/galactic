import React, { useEffect } from "react"
import { carousel } from "../constants"
import AOS from "aos"
import "aos/dist/aos.css"

import SlickSlider from "../components/mainPage/secondBlock/slider"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstBlock from "../components/mainPage/firstBlock/index"
import SecondBlock from "../components/mainPage/secondBlock/index"
import ThirdBlock from "../components/mainPage/thirdBlock/index"
import Roadmap from "../components/mainPage/roadmap/index"
import OurSponsors from "../components/mainPage/sponsors/index"
import Team from "../components/mainPage/ourTeam/index"
import Advisors from "../components/mainPage/advisors/index"
import Faq from "../components/mainPage/faq/index"

const IndexPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, []);

  return (
    <Layout>
      <Seo title="Home" />
      <FirstBlock />
      <SecondBlock />
      <SlickSlider data={carousel} className={'fighters-slider'} activeSlideIndex={0} fadeIn />
      <ThirdBlock />
      <Roadmap />
      <OurSponsors />
      <Team />
      <Advisors />
      <Faq />
    </Layout>
  )
}

export default IndexPage
