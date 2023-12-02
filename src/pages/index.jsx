import * as React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Button from "../../components/buttons/button";
import { RiBox2Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
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
