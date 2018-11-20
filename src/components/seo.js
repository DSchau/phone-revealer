import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

export default function SEO({ meta = [], title = ``}) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
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
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        >
          <html lang="en" />
        </Helmet>
      )}
    />
  )
}
