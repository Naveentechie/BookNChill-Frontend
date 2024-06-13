
'use client'

import Image from "next/image";


interface PropertyListItemProps {
    src: string;
    title: string;
    
}
const PropertyListItem: React.FC<PropertyListItemProps> = ({src, title}) => {
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
            <Image
                fill
                src={src}
                alt="Image"
                sizes="(max-width: 768px) 100vw, (max-width: 1500px) 100vw, 120vw"
                className="hover:scale-125 object-cover transition-transform duration-300 h-full w-full"
            />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">{title}</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>$200</strong> per night</p>
            </div>
        </div>
    ) 
}

export default PropertyListItem;