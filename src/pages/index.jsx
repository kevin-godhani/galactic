import React, { useEffect } from "react"
import { carousel } from "../components/civilizations/dataMocks"
import AOS from "aos"
import "aos/dist/aos.css"

import SlickSlider from "../components/secondBlock/slider"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstBlock from "../components/firstBlock"
import SecondBlock from "../components/secondBlock"
import ThirdBlock from "../components/thirdBlock"
import Roadmap from "../components/roadmap"
import OurSponsors from "../components/sponsors"
import Team from "../components/ourTeam"
import Faq from "../components/faq"

const IndexPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, []);

  return (
    <Layout>
      <Seo title="Home" />
      <FirstBlock />
      <SecondBlock />
      <SlickSlider data={carousel} />
      <ThirdBlock />
      <Roadmap />
      <OurSponsors />
      <Team />
      <Faq />
    </Layout>
  )
}

export default IndexPage
