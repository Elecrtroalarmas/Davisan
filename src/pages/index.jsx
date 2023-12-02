import * as React from "react"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import "./index.css"

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Home Page</h1>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
