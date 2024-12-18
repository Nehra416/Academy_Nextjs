"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
      "title": "React Fundamentals",
      "description": "Learn the core concepts of React, including components, state, props, and lifecycle methods. This course covers how to build dynamic user interfaces with React and how to efficiently manage state within your applications."
    },
    {
      "title": "Next.js for Beginners",
      "description": "Dive into Next.js, a popular React framework that enables server-side rendering, static site generation, and API routes. This course will help you build fast, optimized web applications with features like automatic code splitting and pre-fetching."
    },
    {
      "title": "Building REST APIs with Express.js",
      "description": "In this course, you will learn how to build RESTful APIs using Express.js, a minimalist web framework for Node.js. Topics include routing, middleware, authentication, and connecting APIs to databases such as MongoDB."
    },
    {
      "title": "Node.js and Express: Full Stack Development",
      "description": "Master full-stack JavaScript development by combining Node.js and Express. This course covers server-side JavaScript programming, building scalable applications, and integrating back-end services with front-end technologies like React."
    }

];

const ScrollData = () => {
  return (
    
      <StickyScroll content={content} />
    
  )
}

export default ScrollData