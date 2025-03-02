// import react from 'react';
import Card from './components/Card'

import image1 from '../src/assets/image1.jpg';
import image2 from '../src/assets/image2.jpg';
import image3 from '../src/assets/image3.jpg';
import image4 from '../src/assets/image4.jpg';
import image5 from '../src/assets/image5.jpg';
import image6 from '../src/assets/image6.jpeg';
import image7 from '../src/assets/image7.jpg';
import image8 from '../src/assets/image9.jpg';
import image9 from '../src/assets/image1.jpg';

// import image2 from '../assets/image2.jpg';
// import image3 from '../assets/image3.jpg';
// import image4 from '../assets/image4.jpg';
// import image5 from '../assets/image5.jpg';
// import image6 from '../assets/image6.jpg';

function App() {

  const myProperty= [
    {
      image: image1,
      views: 22,
      price: 60,
      apartment:'Parth Apartment',
      address: 'Usmanpura , Ahmedabad',
      BHK: 2,
      bathroom:  2
    },
    {
      image: image2,
      views: 16,
      price: 80,
      apartment:'Shivpath Apartment',
      address: 'Maninagar , Ahmedabad',
      BHK: 3,
      bathroom:  3
    },
    {
      image: image3,
      views: 26,
      price: 44,
      apartment:'Shrinand  City',
      address: 'New Maninagar , Ahmedabad',
      BHK: 2,
      bathroom:  2
    },
    {
      image: image4,
      views: 134,
      price: 89,
      apartment:'Sanjay Park',
      address: 'Satellite , Ahmedabad',
      BHK: 5,
      bathroom:  5
    },
    {
      image: image5,
      views: 345,
      price: 99,
      apartment:'HR Elliseo',
      address: 'Shela , Ahmedabad',
      BHK: 4,
      bathroom:  4
    },
    {
      image: image6,
      views: 222,
      price: 40,
      apartment:'Vrajdham 1',
      address: 'Sarkhej , Ahmedabad',
      BHK: 2,
      bathroom:  2
    },
    {
      image: image7,
      views: 78,
      price: 26,
      apartment:'Shree Krishna Apartment',
      address: ' Isanpur , Ahmedabad',
      BHK: 1,
      bathroom:  1
    },
    {
      image: image8,
      views: 22,
      price: 60,
      apartment:'Safal Parisar 2',
      address: 'South Bopal , Ahmedabad',
      BHK: 3,
      bathroom:  3
    },
    {
      image: image9,
      views: 22,
      price: 28.5,
      apartment:'Parshwanath Atlantis Park',
      address: 'Sugad , Gandhinagar',
      BHK: 1,
      bathroom:  1
    }
  ];

  return (
    <>
    <div className='m-auto text-4xl font-bold text-center mt-4 pt-4'>My Property</div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[94%] lg:w-[72%] mx-auto mt-16 gap-4 mb-16'>
    {myProperty.map((property, index) => (
          <Card
            key={index}
            image={property.image}
            views={property.views}
            price={property.price}
            apartment={property.apartment}
            address={property.address}
            BHK={property.BHK}
            bathroom={property.bathroom}
          />
        ))}
    {/* <Card/> */}
    {/* <Card/>
    <Card/> */}
    </div>
    {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[94%] lg:w-[72%] mx-auto mt-16 gap-4'>
    <Card/>
    <Card/>
    <Card/>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[94%] lg:w-[72%] mx-auto mt-16 gap-4'>
    <Card/>
    <Card/>
    <Card/>
    </div> */}
    </>
  )
}
export default App
