import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'react-emotion'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`


const Badge = styled.a`
  display: block;
  margin: 1rem 0.5rem;
  color: inherit;
  text-decoration: none;

  :focus {
    transform: scale(1.025);
  }
`

Badge.defaultProps = {
  rel: 'noopener noreferrer',
  target: '_blank',
}

export default function Badges({ className }) {
  return (
    <StaticQuery
      query={graphql`
        query BadgesQuery {
          badges: allBadgesYaml(sort: { fields: order, order: ASC }) {
            edges {
              node {
                id
                url
                image {
                  childImageSharp {
                    fixed(width: 300) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Container className={className}>
          {data.badges.edges.map(({ node }) => (
            <Badge key={node.id} href={node.url} tabIndex={0}>
              <Image fixed={node.image.childImageSharp.fixed} />
            </Badge>
          ))}
        </Container>
      )}
    />
  )
}
