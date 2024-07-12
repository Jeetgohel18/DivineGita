import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from './AdhyayCards';
import pic from '../../data/Images/HomeImage.jpg';

const Home = () => {

  return (
    <div className="mt-[7pc]">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="p mt-[-40px] dark:text-gray-200 dark:bg-secondary-dark-bg  rounded-2xl overflow-hidden h-[550px] w-[83%] lg:w-100 p-0 m-2 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="object-cover h-full w-[100%] flex justify-between items-center shadow-xl p-4">
            <img
              className="h-[100%] w-[100%] object-cover"
              src={pic}
              alt="jay shree krishna"
            />
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Home;
