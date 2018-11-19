import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

export default function SEO({ meta = [] }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          meta: contentYaml {
            description
            keywords
          }
        }
      `}
      render={data => (
        <Helmet
          meta={[
            {
              name: 'description',
              content: data.meta.description,
            },
            {
              name: 'keywords',
              content: data.meta.keywords.join(','),
            },
          ].concat(meta)}
        >
          <html lang="en" />
        </Helmet>
      )}
    />
  )
}
