import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactimage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/express.png";
import java from "../assets/java.png";
import mongodb from "../assets/mongodb.png";
import python from "../assets/python.png";
import node from "../assets/node.png";
import cpp from "../assets/cpp.png";
import pytest from "../assets/pytest.png";
import django from "../assets/django.jpg";
import djangorest from "../assets/djangorest.png";
import postgresql from "../assets/postgresql.png";
import php from "../assets/php.png";
import pyspark from "../assets/pyspark.png";
import scikitlearn from "../assets/scikitlearn.png";

function Skills() {
  const listOfTechs = [
    {
      id: 1,
      src: reactimage,
      title: "React",
      style: "shadow-black",
    },
    {
      id: 2,
      src: python,
      title: "Python",
      style: "shadow-black",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-black",
    },
    {
      id: 4,
      src: cpp,
      title: "C++",
      style: "shadow-black",
    },
    {
      id: 5,
      src: java,
      title: "Java",
      style: "shadow-black",
    },
    {
      id: 6,
      src: django,
      title: "Django",
      style: "shadow-black",
    },
    {
      id: 7,
      src: djangorest,
      title: "Django Rest Framework",
      style: "shadow-black",
    },
    {
      id: 8,
      src: postgresql,
      title: "Postgresql",
      style: "shadow-black",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-black",
    },
    {
      id: 10,
      src: php,
      title: "PHP",
      style: "shadow-black",
    },
    {
      id: 11,
      src: pyspark,
      title: "PySpark",
      style: "shadow-black",
    },
    {
      id: 12,
      src: scikitlearn,
      title: "Scikit-Learn",
      style: "shadow-black",
    },
    {
      id: 13,
      src: pytest,
      title: "Pytest",
      style: "shadow-black",
    },
    {
      id: 14,
      src: html,
      title: "HTML",
      style: "shadow-black",
    },
    {
      id: 15,
      src: css,
      title: "CSS",
      style: "shadow-black",
    },
    {
      id: 16,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-black",
    },
    {
      id: 17,
      src: nextjs,
      title: "NextJS",
      style: "shadow-black",
    },
    {
      id: 18,
      src: express,
      title: "ExpressJS",
      style: "shadow-black",
    },
    {
      id: 19,
      src: node,
      title: "NodeJS",
      style: "shadow-black",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-blue-200 to-white  w-full h-full py-28"
    >
      <div className="max-w-screen-lg p-4 flex flex-col justify-center w-full h-full text-black mx-auto">
        <div className="mb-10">
          <p className="text-4xl font-bold border-b-4 border-black inline">
            Technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {listOfTechs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="experience pic" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
