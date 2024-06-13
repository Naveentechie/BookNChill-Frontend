
import Image from "next/image";
const Categories = () => {

    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div  className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/Amazing-views.jpg"
                    alt = "Category-amazing-views"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Amazing Views</span>
    
            </div>

            <div  className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/Lakefront.jpg"
                    alt = "Category-amazing-views"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Lakefront</span>
    
            </div>

            <div  className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/Farms.jpg"
                    alt = "Category-amazing-views"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Farms</span>
    
            </div>

            <div  className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/Treehouses.jpg"
                    alt = "Category-amazing-views"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Tree Houses</span>
    
            </div>

            <div  className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/Beach.jpg"
                    alt = "Category-amazing-views"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Beach</span>
    
            </div>

            <div  className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/National Parks.jpg"
                    alt = "Category-amazing-views"
                    width={20}
                    height={20}
                />

                <span className="text-xs">National Parks</span>
    
            </div>

            <div  className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/Mansions.jpg"
                    alt = "Category-amazing-views"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Mansions</span>
    
            </div>

            <div  className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/Islands.jpg"
                    alt = "Category-amazing-views"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Islands</span>
    
            </div>

            <div  className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/Islands.jpg"
                    alt = "Category-amazing-views"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Artic</span>
    
            </div>
            

            <div  className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/Boats.jpg"
                    alt = "Category-amazing-views"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Boats</span>
    
            </div>

            <div  className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/Tropical.jpg"
                    alt = "Category-amazing-views"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Tropical</span>
    
            </div>
        </div>
    )
}

export default Categories;