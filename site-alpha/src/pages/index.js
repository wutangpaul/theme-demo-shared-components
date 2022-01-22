import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Widget from "../../../shared-components/widget"
import theme from "../theme.js"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Widget description="Shared component that inherits colors.brand value by default" />
    <code>{`<Widget description="blah" />`}</code>
    <br />
    <br />

    <Widget
      description="Overrides colors.brand value with a different theme value (colors.background)"
      sx={{
        backgroundColor: theme.colors.highlight,
        textColor: theme.colors.muted,
      }}
    />

    <code>
      {`<Widget description="blah..." sx={{ backgroundColor: theme.colors.highlight, textColor: theme.colors.background }} />`}
    </code>
  </Layout>
)

export default IndexPage
