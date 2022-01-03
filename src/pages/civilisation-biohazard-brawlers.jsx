import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CivilisationsStory from "../components/civilizationStory"
import { civilisationsStoryData } from "../components/civilizations/dataMocks"

const Civilisations = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <Layout>
      <Seo title="Civilisations" />
      <CivilisationsStory
        data={civilisationsStoryData[3]}
        nextTitle={civilisationsStoryData[4].title}
      />
    </Layout>
  )
}

export default Civilisations;
