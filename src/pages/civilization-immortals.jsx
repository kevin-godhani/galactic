import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CivilizationsStory from "../components/civilizationStory"
import { civilizationsStoryData } from "../components/civilizations/dataMocks";

const Civilizations = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, []);

  return (
    <Layout>
      <Seo title="Home" />
      <CivilizationsStory data={civilizationsStoryData[1]} nextTitle={civilizationsStoryData[2].title}/>
    </Layout>
  )
}

export default Civilizations
