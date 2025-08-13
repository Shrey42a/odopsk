import { Link } from "react-scroll";
import { Element } from "react-scroll";
import Institutions from "./Institutions";
import Product from "./Product";
import Story from "./Story";

function Page(){
    return(
        <>
         <div className="flex flex-col space-y-8 items-center justify-center rounded-md min-h-screen max-h-max w-full">
            <div className="h-max w-full backdrop-blur-sm space-y-8 p-4 lg:space-y-0 lg:space-x-4 flex flex-col lg:flex-row-reverse justify-between lg:justify-center items-center">
              <div className="h-64 lg:h-96 w-full">
                <img src="https://www.khurjapotteryhub.com/wp-content/uploads/2025/03/Multicolor-Printed-Ceramic-Dinner-Plate-450x532.webp" className="h-full w-full rounded-sm" alt="Jar" />
              </div>
              <div className="flex flex-col justify-around space-y-4 h-64 lg:h-96 w-full">
                <div className="flex flex-col space-y-4">
                  <h1 className="text-zinc-700 txt text-3xl lg:text-5xl lg:text-start text-center">Khurja Ceramic Pottery </h1>
                  <h2 className="txt text-zinc-700 text-2xl lg:text-4xl lg:text-start text-center">Pride of Bulandshahr</h2>
                  <h3 className="text-zinc-700 text-xl lg:text-start text-center txt">Crafted with Tradition, Inspired by Sustainability</h3>
                </div>
                <div className="w-full flex items-center justify-center h-max"><Link className="w-max" to="product" activeClass="active" spy={true} smooth={true} duration={500}> <button className="rounded-sm cursor-pointer p-2 px-8 w-max bg-emerald-100 transition ease-in-out hover:bg-emerald-200">Explore</button></Link></div>
              </div>
            </div>
            <Element name="product"><Product /></Element>
            <Story />
            <Institutions />
         </div>
        </>
    )
}
export default Page;