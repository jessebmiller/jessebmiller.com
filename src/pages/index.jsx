import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import DefaultLayout from '../layouts/DefaultLayout'

// @pageMeta:MenuText Home

export default function IndexPage({ data }) {
  return (
    <DefaultLayout>
      {
        data.allImageSharp.nodes.map(node => {
          return (
            <a href={`/drawings/${node.id}`}>
              <GatsbyImage key={node.id} image={node.gatsbyImageData} />
            </a>
          )
        })
      }
    </DefaultLayout>
  )
}

export const pageQeury = graphql`
query allImages {
  allImageSharp {
    nodes {
      id
      gatsbyImageData(width: 300)
    }
  }
}
`
