function About() {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-blue-200 to-white text-black'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-black'>Get to know me</p>
                </div>

                <p className='text-xl mt-5'>
                    I am current in my last year of studying <span className='font-bold'>Computer Science</span> at <span className='font-bold'>Concordia University</span> in (Montreal, Canada)
                </p>
                <br/>
                <p className='text-xl'>
                    Current Project: <span className='font-bold'>Cryptocurrency Portfolio Tracker</span>
                </p>

            </div>
        </div>
    );
}

export default About;