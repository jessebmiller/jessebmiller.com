import type { GatsbyConfig } from "gatsby";
import path from 'path'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jesse B. Miller`,
    description: "Enlightened trial and error succeeds over the planning of lone genious",
    siteUrl: `https://www.jessebmiller.com`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-pagemeta",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: path.resolve("./src/layouts/DefaultLayout.tsx")
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
  ]
};

export default config;
