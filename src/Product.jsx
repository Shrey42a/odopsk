function Product(){
    return(
        <>
         <div className="h-max mt-20 w-full flex flex-col space-y-8 lg:space-x-4 justify-center items-center">
             <h1 className="txt text-4xl text-zinc-700">Product Gallery</h1>
             <div className="w-full flex flex-wrap gap-2 lg:gap-4 items-center justify-center">
             <div className="flex shadow-lg hover:shadow-xl transition-shadow flex-col items-center justify-center text-start rounded-md overflow-hidden">
                 <img src="/pottery1.jpg" className="lg:h-64 lg:w-64 h-36 w-36 hover:scale-105 z-0 transition ease-in-out" alt="Pickle container" />
                 <div className="w-full h-max flex flex-row justify-between px-1"><span className="relative txt text-black text-sm">Tea Set</span><a href="https://www.khurjapotteryhub.com/" target="blank" className="txt relative text-sm text-black cursor-pointer">Buy</a></div>
             </div>
             <div className="flex shadow-lg hover:shadow-xl transition-shadow flex-col items-center justify-center text-start rounded-md overflow-hidden">
                 <img src="/pottery5.jpg" className="lg:h-64 lg:w-64 h-36 w-36 hover:scale-105 z-0 transition ease-in-out" alt="Pickle container" />
                 <div className="w-full h-max flex flex-row justify-between px-1"><span className="relative txt text-black text-sm">Pickle Container</span><a href="https://www.khurjapotteryhub.com/" target="blank" className="txt relative text-sm text-black cursor-pointer">Buy</a></div>
             </div>
             <div className="flex shadow-lg hover:shadow-xl transition-shadow flex-col items-center justify-center text-start rounded-md overflow-hidden">
                 <img src="https://www.khurjapotteryhub.com/wp-content/uploads/2025/03/Ceramic-Bowl-Multi-Purpose1-450x532.webp" className="lg:h-64 lg:w-64 h-36 w-36 hover:scale-105 z-0 transition ease-in-out" alt="Ceramic Bowl Multi Purpose" />
                 <div className="w-full h-max flex flex-row justify-between px-1"><span className="relative txt text-black text-sm">Ceramic Bowl</span><a href="https://www.khurjapotteryhub.com/" target="blank" className="txt relative text-sm text-black cursor-pointer">Buy</a></div>
             </div>
             <div className="flex shadow-lg hover:shadow-xl transition-shadow flex-col items-center justify-center text-start rounded-md overflow-hidden">
                 <img src="https://www.khurjapotteryhub.com/wp-content/uploads/2025/03/Ceramic-Tea-Pot-With-Lid-Speckled-Pattern-450x532.webp" className="lg:h-64 lg:w-64 h-36 w-36 hover:scale-105 z-0 transition ease-in-out" alt="Ceramic Tea Pot With Lid Speckled Pattern" />
                 <div className="w-full h-max flex flex-row justify-between px-1"><span className="relative txt text-black text-sm">Tea Pot</span><a href="https://www.khurjapotteryhub.com/" target="blank" className="txt relative text-sm text-black cursor-pointer">Buy</a></div>
             </div>
             <div className="flex shadow-lg hover:shadow-xl transition-shadow flex-col items-center justify-center text-start rounded-md overflow-hidden">
                 <img src="https://www.khurjapotteryhub.com/wp-content/uploads/2025/02/Handmade-Neelaksh-Ceramic-Coffee-Mug-1-2-450x532.webp" className="lg:h-64 lg:w-64 h-36 w-36 hover:scale-105 z-0 transition ease-in-out" alt="Coffe mug" />
                 <div className="w-full h-max flex flex-row justify-between px-1"><span className="relative txt text-black text-sm">Coffee Mug</span><a href="https://www.khurjapotteryhub.com/" target="blank" className="txt relative text-sm text-black cursor-pointer">Buy</a></div>
             </div>
             <div className="flex shadow-lg hover:shadow-xl transition-shadow flex-col items-center justify-center text-start rounded-md overflow-hidden">
                 <img src="https://www.khurjapotteryhub.com/wp-content/uploads/2025/03/Handmade-Floral-Print-Ceramic-Mug-450x532.webp" className="lg:h-64 lg:w-64 h-36 w-36 hover:scale-105 z-0 transition ease-in-out" alt="Coffe mug 2" />
                 <div className="w-full h-max flex flex-row justify-between px-1"><span className="relative txt text-black text-sm">Ceramic Mug</span><a href="https://www.khurjapotteryhub.com/" target="blank" className="txt relative text-sm text-black cursor-pointer">Buy</a></div>
             </div>
             <div className="flex shadow-lg hover:shadow-xl transition-shadow flex-col items-center justify-center text-start rounded-md overflow-hidden">
                 <img src="https://www.khurjapotteryhub.com/wp-content/uploads/2025/03/Ceramic-Tea-Pot-With-Lid-Dual-Shade-450x532.webp" className="lg:h-64 lg:w-64 h-36 w-36 hover:scale-105 z-0 transition ease-in-out" alt="Tea Pot" />
                 <div className="w-full h-max flex flex-row justify-between px-1"><span className="relative txt text-black text-sm">Ceramic Pot</span><a href="https://www.khurjapotteryhub.com/" target="blank" className="txt relative text-sm text-black cursor-pointer">Buy</a></div>
             </div>
             <div className="flex shadow-lg hover:shadow-xl transition-shadow flex-col items-center justify-center text-start rounded-md overflow-hidden">
                 <img src="https://www.khurjapotteryhub.com/wp-content/uploads/2025/05/Handmade-Ivory-Wave-Textured-Ceramic-indoor-Planter-without-plant-450x532.webp" className="lg:h-64 lg:w-64 h-36 w-36 hover:scale-105 z-0 transition ease-in-out" alt="Planter" />
                 <div className="w-full h-max flex flex-row justify-between px-1"><span className="relative txt text-black text-sm">Ceramic Planter</span><a href="https://www.khurjapotteryhub.com/" target="blank" className="txt relative text-sm text-black cursor-pointer">Buy</a></div>
             </div>
             <div className="flex shadow-lg hover:shadow-xl transition-shadow flex-col items-center justify-center text-start rounded-md overflow-hidden">
                 <img src="https://www.khurjapotteryhub.com/wp-content/uploads/2025/03/Ceramic-Dip-Sauce-Tray-With-3-Compartment-450x532.webp" className="lg:h-64 lg:w-64 h-36 w-36 hover:scale-105 z-0 transition ease-in-out" alt="Dip Sauce Tray" />
                 <div className="w-full h-max flex flex-row justify-between px-1"><span className="relative txt text-black text-sm">Dip Sauce Tray</span><a href="https://www.khurjapotteryhub.com/" target="blank" className="txt relative text-sm text-black cursor-pointer">Buy</a></div>
             </div>
             <div className="flex shadow-lg hover:shadow-xl transition-shadow flex-col items-center justify-center text-start rounded-md overflow-hidden">
                 <img src="https://www.khurjapotteryhub.com/wp-content/uploads/2023/11/Double-Shade-Ceramic-Handi-Set-of-3-Pieces-450x510.webp" className="lg:h-64 lg:w-64 h-36 w-36 hover:scale-105 z-0 transition ease-in-out" alt="Handi set" />
                 <div className="w-full h-max flex flex-row justify-between px-1"><span className="relative txt text-black text-sm">Handi Set</span><a href="https://www.khurjapotteryhub.com/" target="blank" className="txt relative text-sm text-black cursor-pointer">Buy</a></div>
             </div>
             <div className="flex shadow-lg hover:shadow-xl transition-shadow flex-col items-center justify-center text-start rounded-md overflow-hidden">
                 <img src="https://www.khurjapotteryhub.com/wp-content/uploads/2025/03/Hyperboloid-Shape-Ceramic-Salt-Paper-Shaker1-450x532.webp" className="lg:h-64 lg:w-64 h-36 w-36 hover:scale-105 z-0 transition ease-in-out" alt="Salt & Pepper shaker" />
                 <div className="w-full h-max flex flex-row justify-between px-1"><span className="relative txt text-black text-sm">Salt Shaker</span><a href="https://www.khurjapotteryhub.com/" target="blank" className="txt relative text-sm text-black cursor-pointer">Buy</a></div>
             </div>
             <div className="flex shadow-lg hover:shadow-xl transition-shadow flex-col items-center justify-center text-start rounded-md overflow-hidden">
                 <img src="https://www.khurjapotteryhub.com/wp-content/uploads/2025/03/Multicolor-Printed-Ceramic-Dinner-Plate-450x532.webp" className="lg:h-64 lg:w-64 h-36 w-36 hover:scale-105 z-0 transition ease-in-out" alt="Dinner Plate" />
                 <div className="w-full h-max flex flex-row justify-between px-1"><span className="relative txt text-black text-sm">Dinner Plate</span><a href="https://www.khurjapotteryhub.com/" target="blank" className="txt relative text-sm text-black cursor-pointer">Buy</a></div>
             </div>
             </div>
         </div>
        </>
    )
}
export default Product;