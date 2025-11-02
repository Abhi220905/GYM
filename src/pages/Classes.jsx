import React from 'react'
import Header from "../layouts/Navbar";
import Footer from '../layouts/Footer'
import ClassesHead from '../layouts/ClassesHead';
import ClassFeatures from '../layouts/ClassFeatures';
import ClassesHero from '../layouts/ClassesHero';

const Classes = () => {
  return (
    <>
      <Header/>
      <ClassesHead/>
      <ClassFeatures/>
      <ClassesHero/>
      <Footer/>
    </>
  )
}

export default Classes