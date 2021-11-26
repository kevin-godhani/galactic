import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import FirstBlock from "../components/firstBlock"
import SecondBlock from "../components/secondBlock"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <FirstBlock />
    <SecondBlock />
  </Layout>
)

export default IndexPage
