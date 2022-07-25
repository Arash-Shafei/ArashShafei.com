import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

function Projects() {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },

        {
            id: 2,
            src: reactParallax
        },

        {
            id: 3,
            src: navbar
        },

        {
            id: 4,
            src: reactSmooth
        },

        {
            id: 5,
            src: installNode
        },

        {
            id: 6,
            src: reactWeather
        }
    ]


    return (
        <div name='projects' className='bg-gradient-to-b from-blue-200 to-white w-full text-black md:h-screen py-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8 mb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-black'>Portfolio Projects</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({id, src}) =>
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300'>
                            <img src={src} alt='project pic' className='rounded-md'/>
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-300 hover:font-bold'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-300 hover:font-bold'>Code</button>
                            </div>
                        </div>
                    )}
                    </div>



                </div>
            </div>
            );
            }

            export default Projects;