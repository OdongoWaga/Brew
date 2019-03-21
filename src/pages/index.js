import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Background from "../components/Background"
import Menu from "../components/Home/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Background
      img={data.img.childImageSharp.fluid}
      title="Brewed"
      styleClass="default-background"
    />
    <Info />
    <Menu />
  </Layout>
)

export const query = graphql`
  {
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
