import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import DefaultLayout from "../../layouts/DefaultLayout"

export default function ImageSharpPageTemplate({ data }) {
  return (
    <DefaultLayout>
      <GatsbyImage image={data.imageSharp.gatsbyImageData} />
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
query($id: String!) {
  imageSharp(id: {eq: $id}) {
    gatsbyImageData
  }
}
`
