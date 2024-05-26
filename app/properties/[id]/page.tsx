

import Image from "next/image";
import ReservationSidebar from "../ReservationSidebar";

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
                <Image 
                    src='/av-1.webp'
                    fill
                    className="object-cover w-70 h-70"
                    alt = "View Point House"

                />
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className=" py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests- 2 bedrooms - 1 bathroom
                    </span>
                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/profile.png"
                            alt="dp"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />

                        <p><strong>John Joe</strong> is your host</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">bsfbsfbdfbdfbdbdsb  sdndsbsdfbsbsdfbdbdf dbsdbsdfbsdfbsdgbsgbg</p>


                </div>

                <ReservationSidebar />
            </div>
        </main>
        
    )
}

export default PropertyDetailPage;