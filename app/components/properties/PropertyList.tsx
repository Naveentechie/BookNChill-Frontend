'use client'
import PropertyListItem from "./PropertyListItem";

const PropertyList = () => {
    return (
        <>
            <PropertyListItem
                src='/amazing-views/av-1.webp'
                title='Gokarna, India' />
            <PropertyListItem
                src='/amazing-views/av-2.webp'
                title="Vathalmalai, India"
             />
            <PropertyListItem
                src='/amazing-views/av-3.webp'
                title="Kandy, Sri Lanka"
            />
            <PropertyListItem
                src='/amazing-views/av-4.webp'
                title="Karnataka, India"
            />
            <PropertyListItem
                src='/amazing-views/av-5.webp'
                title="Kottathara, India"
            /> 

            <PropertyListItem
                src='/amazing-views/av-6.webp'
                title="RajBhavan, India"
            />
            <PropertyListItem
                src='/amazing-views/av-7.webp'
                title="Nandi Hills, India"
            />
            <PropertyListItem
                src='/amazing-views/av-8.webp'
                title="Iduhatty, India"
            />  
        </>
        
    )
}

export default PropertyList;