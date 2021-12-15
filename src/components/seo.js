/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ title, description, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const defaultTitle = title || site.siteMetadata?.title
  const metaDescription = description || site.siteMetadata.description
  // const defaultImage = image || site.siteMetadata?.image

  return (
    <Helmet title={defaultTitle}>
        {/* <!-- Primary Meta Tags --> */}
        <title>{'The Galactic Fight League'}</title>
        <meta name="title" content={'The Galactic Fight League'} />
        <meta name="description" content={metaDescription} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://myawesomewebsite.com/" />
        <meta property="og:title" content={'The Galactic Fight League'} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/facebookimage.png" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://myawesomewebsite.com/" />
        <meta property="twitter:title" content={'The Galactic Fight League'} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content="/twitterimage.png" />
    </Helmet>
  )
}

Seo.defaultProps = {
  title: 'The Galactic Fight League',
  description: 'Welcome to the Galactic Fight League. 9999, mixed martial arts inspired NFTs from some of the most creative minds in the crypto-sphere - arriving on the Solana network in January 2022.  Ladies and gentlemen, welcome to the Galactic Fight League.',
  image: null,
}

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default Seo
