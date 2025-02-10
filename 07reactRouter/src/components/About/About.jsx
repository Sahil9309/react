import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src="sahil.jpg"  />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Exploring the World of Software Coding
            </h2>
            <p className="mt-6 text-gray-600">
              Hi, I'm Sahil, a passionate software developer with a strong focus
              on C++, React JS, and web development. I enjoy building efficient
              algorithms, developing dynamic applications, and solving complex
              coding challenges. My expertise lies in front-end development and
              creating interactive web applications. Whether it's optimizing
              code for performance or crafting seamless user experiences, I love
              turning ideas into reality through code. This blog is where I
              share my insights, projects, and experiences in software
              development. Stay tuned for coding tips, tutorials, and deep dives
              into problem-solving techniques!
            </p>
            <p className="mt-4 text-gray-600">
              Step into a world of words where stories, thoughts, and life
              experiences come together. Every line is a new perspective, every
              post a new journey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
