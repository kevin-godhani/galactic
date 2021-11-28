import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import CivilizationsStory from "../components/civilizationStory";

const Civilizations = () => (
  <Layout>
    <Seo title="Home" />
    <CivilizationsStory />
  </Layout>
);

export default Civilizations;
