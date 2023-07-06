import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {

  const data = {
    name: "Kitaab",
    desc : "Kitaab is an online bookstore that aims to provide access to quality books. With a vast collection of books across different genres, the store offers a user-friendly interface that enables customers to browse, review, and purchase books with ease. Kitaab partners with leading publishers to bring readers the latest releases and classic literature. The online bookstore also supports independent authors, giving them a platform to reach a broader audience. Customers can pay through various methods, and Kitaab ensures fast and reliable shipping. The store's blog provides literary news, author interviews, and book reviews, keeping readers engaged and connected to the world of books. Kitaab runs various literacy programs to foster a love of reading among children and adults."
  }
  return (
    <>
   
      <HeroSection myData={data}/>
    </>
  );
}



export default About
