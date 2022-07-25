import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactimage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import tailwind from '../assets/tailwind.png'
import express from '../assets/express.png'
import java from '../assets/java.png'
import mongodb from '../assets/mongodb.png'
import python from '../assets/python.png'
import sql from '../assets/sql.png'
import node from '../assets/node.png'

function Skills() {

    const listOfTechs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactimage,
            title: "React",
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: nextjs,
            title: "NextJS",
            style: 'shadow-white'
        },
        {
            id: 7,
            src: graphql,
            title: "GraphQL",
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            src: express,
            title: "ExpressJS",
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            src:node,
            title: "NodeJS",
            style: 'shadow-green-300'
        },
        {
            id: 10,
            src: java,
            title: "Java",
            style: 'shadow-red-400'
        },
        {
            id: 11,
            src: mongodb,
            title: "MongoDB",
            style: 'shadow-green-600'
        },
        {
            id: 12,
            src: python,
            title: "Python",
            style: 'shadow-blue-500'
        },
        {
            id: 13,
            src: sql,
            title: "SQL",
            style: 'shadow-black'
        }
    ]


    return (
        <div name='skills' className='bg-gradient-to-b from-white to-blue-200  w-full h-full py-28'>

            <div className='max-w-screen-lg p-4 flex flex-col justify-center w-full h-full text-black mx-auto'>

                <div className='mb-10'>
                    <p className='text-4xl font-bold border-b-4 border-black inline'>Technologies I've worked with</p>
                </div>


                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>

                    {listOfTechs.map( ({id, src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt='experience pic' className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                    }


                </div>
            </div>
        </div>


    );
}

export default Skills;