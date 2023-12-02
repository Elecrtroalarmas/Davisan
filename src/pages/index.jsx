import * as React from "react";
import "./root.css";
import "./index.css";
import ChatComponenet from "../components/chatComponent"

const IndexPage = () => {
  return (
   <div>
    hola
    <ChatComponenet />
   </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
