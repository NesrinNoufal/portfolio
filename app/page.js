'use client'
import Navbar from "../app/components/navbar"
import About from "./components/About";
import Header from "./components/Header";
import Services from "./components/Services";
import  Work from "./components/Work";




export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Work/>
    </>
  );
}
