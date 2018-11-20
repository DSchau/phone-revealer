import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled, { injectGlobal } from 'react-emotion'

import Badges from '../components/badges'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Title = styled.h1`
  margin: 0;
  margin-bottom: 40px;
  color: white;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);

  font-family: sans-serif;

  position: relative;

  font-size: 44px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 88px;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  user-select: none;
  user-drag: none;
  pointer-events: none;

  overflow: hidden;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="A reverse phone lookup for Android and iOS" />
    <ImageContainer>
      <Image fluid={data.hero.childImageSharp.fluid} />
    </ImageContainer>
    <Title>Phone Reveal</Title>
    <Badges />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    hero: file(absolutePath: { regex: "/images/phone.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

injectGlobal`
  body {
    background-color: #000;
  }
`
