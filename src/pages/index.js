import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Coding Morrison"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img id="landingheadshot" style={{ margin: 0 } } src="./seattle2019.svg" alt="Jim Morrison" />
        <h1>
          Hey there everyone{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <b>My name is Jim Morrison</b>
        <p>
        I am a product focused, community passionate, organized driven developer 
        who loves to learn and grow. Let's level up together!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
