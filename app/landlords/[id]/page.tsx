
import Image from "next/image";
import ContactBtn from "@/app/components/ContactBtn";
import PropertyList from "@/app/components/properties/PropertyList";

const LandlordDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        <Image
                            src='/profile.png'
                            width={200}
                            height={200}
                            alt="Landlord Name"
                            className="rounded-null"
                        /> 
                        <h1 className="mt-6 text-xl">Landlord Name</h1>

                        <ContactBtn /> 
                    </div>
                </aside>

                <div className="col-span-3 pl-0 ml:pl-6">
                <div className= "grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PropertyList />
                </div>
                </div>
            </div>
        </main>
    )
}

export default LandlordDetailPage;
