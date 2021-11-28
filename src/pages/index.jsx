import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstBlock from "../components/firstBlock"
import SecondBlock from "../components/secondBlock"
import SlickSlider from "../components/secondBlock/slider"
import ThirdBlock from "../components/thirdBlock"
import Roadmap from "../components/roadmap"
import OurSponsors from "../components/sponsors"
import Faq from "../components/faq"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <FirstBlock />
    <SecondBlock />
    <SlickSlider />
    <ThirdBlock />
    <Roadmap />
    <OurSponsors />
    <Faq />
  </Layout>
)

export default IndexPage
