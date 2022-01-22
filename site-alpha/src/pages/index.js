import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Widget from "../../../shared-components/widget"
import theme from "../theme.js"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Widget description="Shared component that inherits colors.text and colors.background site level theme values by default" />
    <code>{`<Widget description="blah" />`}</code>
    <br />
    <br />

    <Widget
      description="Override background and text colors with different values from site level theme, or abritrary/once-off values. Also toggles the monkey boolean."
      sx={{
        backgroundColor: theme.colors.highlight,
        textColor: "orangered",
      }}
      showMonkey
    />

    <code>
      {`<Widget description="blah..." sx={{ backgroundColor: theme.colors.highlight, textColor: theme.colors.background }} showMonkey />`}
    </code>
  </Layout>
)

export default IndexPage
