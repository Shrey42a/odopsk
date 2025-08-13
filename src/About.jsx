import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <div className='w-full main2 min-h-screen max-h-max'>
                <div className='min-h-screen max-h-max w-full p-2 pt-4 bg-white/60 backdrop-blur-sm flex flex-col space-y-4 items-center justify-start'>
                    <div className='w-full text-lg text-center fnt5 lg:w-4/5 h-max rounded-2xl flex flex-col items-center justify-start'>
                       <h1 className='text-2xl font-semibold fnt3'>About me</h1>
                       <p>Hello! I m <span className="text-xl font-bold tracking-widest text-orange-600" >Shrey Kumar </span> a passionate, dedicated tech enthusiast from Ahamadanagar, Bulandshahr. Currently, I’m pursuing my Master of Computer Applications (MCA) from a reputed institution in Meerut & also a student of <a href='https://codeyogi.io' target='blank' className='text-xl font-bold tracking-widest text-orange-600'>CODEYOGI</a> , where I am honing my technical skills and deepening my knowledge of software development.</p>
                       <p>
                        With one year of hands-on coding experience, I have worked extensively on 
                        various technologies, particularly focusing on JavaScript, ReactJS, MongoDB, 
                        MySQL, ExpressJs, NodeJs, SEO, UI/UX, Git/Github, Typescript, Figma and 
                        continued. I have developed and optimized applications, built interactive 
                        websites, and handled API integrations effectively.
                        </p>
                    </div>
                    <div className='h-full fnt1 w-full lg:w-4/5 rounded-lg text-xl text-center flex flex-col items-center justify-start space-y-2'>
                        <h1 className='text-2xl font-semibold fnt3'>About The Website</h1>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        This React-based web application has been built as part of the{" "}
                        <strong>Digital District Showcase</strong> initiative, highlighting the{" "}
                        <strong>One District, One Product (ODOP)</strong> 
                        scheme for Bulandshahr district, Uttar Pradesh. 
                        The ODOP scheme aims to promote unique products 
                        from each district and provide artisans with 
                        better market opportunities, training, and resources.
                        </p>

                        <h1 className='text-2xl font-semibold fnt3'> Khurja Ceramic Pottery – Pride of Bulandshahr</h1>
                        <p className="text-gray-600 leading-relaxed mb-6">
                           This website focuses on Bulandshahr’s most famous product –{" "}
                           <strong>Khurja Ceramic Pottery</strong>, a GI-tagged craft with a 
                           history of over 600 years. Known as the “Ceramics City of India”, 
                           Khurja is home to more than 500 factories and 350 pottery units, 
                           producing decorative plates, vases, kitchenware, and tiles with 
                           sustainable and eco-friendly methods.
                        </p>

                        <h1 className='text-2xl font-semibold fnt3'>Contact Me</h1>
                        <p>For any queries, suggestions, tell me at <a>shreykumar55242@gmail.com</a></p>
                        <h1 className='text-2xl font-extrabold fnt3'>ODOP</h1>
                    </div>
                    <Link to="/" className='cursor-pointer px-8 py-2 rounded-sm bg-emerald-100 hover:bg-emerald-200'>Get Started</Link>
                </div>
            </div>
        </>
    )
}
export default About;