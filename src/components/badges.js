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

const Badge = styled.div`
  margin: 1rem 0.5rem;
`

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`

Link.defaultProps = {
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
            <Badge key={node.id}>
              <Link href={node.url}>
                <Image fixed={node.image.childImageSharp.fixed} />
              </Link>
            </Badge>
          ))}
        </Container>
      )}
    />
  )
}
