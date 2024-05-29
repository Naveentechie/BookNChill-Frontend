import Image from "next/image";
import ContactBtn from "@/app/components/ContactBtn";
import PropertyList from "@/app/components/properties/PropertyList";

const MyreservationsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            
            
            <div className="pt-6 pb-2 ">
                <h1 className="my-6 mb-6 text-2xl">My Reservations</h1>
                <div className="space-y-4">
                    <div className="p-5 grid grid-cols-1 md:grid-cols-4  gap-4 shadow-md border border-gray-300">
                        <div className="cols-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image
                                    fill 
                                    src="/av-1.webp"
                                    className="hover:scale-110 object-cover transition h-full w-full"
                                    alt="View-house"
                                />

                            </div>
                        </div>

                        <div className="cols-span-3 space-y-2">
                            <h2 className="mb-4 text-xl">Property Name</h2>
                            <p><strong>Check in date:</strong>14/12/2024</p>
                            <p><strong>Check out date:</strong>16/12/2024</p>
                            <p><strong>Number of Nights:</strong>2</p>
                            <p><strong>Total price:</strong>$200</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6 pb-2 ">
                <h1 className="text-2xl">My Reservations</h1>
                <div className="space-y-4">
                    <div className="p-5 grid grid-cols-1 md:grid-cols-4  gap-4 shadow-md border border-gray-300">
                        <div className="cols-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image
                                    fill 
                                    src="/av-1.webp"
                                    className="hover:scale-110 object-cover transition h-full w-full"
                                    alt="View-house"
                                />

                            </div>
                        </div>

                        <div className="cols-span-3 space-y-2">
                            <h2 className="mb-4 text-xl">Property Name</h2>
                            <p><strong>Check in date:</strong>14/12/2024</p>
                            <p><strong>Check out date:</strong>16/12/2024</p>
                            <p><strong>Number of Nights:</strong>2</p>
                            <p><strong>Total price:</strong>$200</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6 pb-2 ">
                <h1 className="text-2xl">My Reservations</h1>
                <div className="space-y-4">
                    <div className="p-5 grid grid-cols-1 md:grid-cols-4  gap-4 shadow-md border border-gray-300">
                        <div className="cols-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image
                                    fill 
                                    src="/av-1.webp"
                                    className="hover:scale-110 object-cover transition h-full w-full"
                                    alt="View-house"
                                />

                            </div>
                        </div>

                        <div className="cols-span-3 space-y-2">
                            <h2 className="mb-4 text-xl">Property Name</h2>
                            <p><strong>Check in date:</strong>14/12/2024</p>
                            <p><strong>Check out date:</strong>16/12/2024</p>
                            <p><strong>Number of Nights:</strong>2</p>
                            <p><strong>Total price:</strong>$200</p>

                            <div className="inline-block cursor-pointer py-4 px-6 b">Go to Property</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MyreservationsPage;
