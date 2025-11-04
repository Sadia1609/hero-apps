import React from 'react';
import phoneImg from '../assets/hero.png'
import googlePlayImg from '../assets/googleplay.png'
import appStoreImg from '../assets/appstore.png'
import useApps from '../hooks/useApps';
import AppsCard from '../Components/AppsCard';
import { Link } from 'react-router';

const Home = () => {

  const {apps} = useApps()

  const featuredApps = apps.slice(0,8)
  console.log(apps)


  return (
    <div>
        {/* banner */}
      <section className=" text-white text-center py-16 md:py-20">
        <h1 className="text-2xl md:text-5xl font-bold text-[#001931]">We Build <br></br> <span className="text-[#9f62f2]">Productive </span><span className='text-[#001931]'>Apps</span></h1>
        <p className="mt-5 text-xs md:text-sm text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.

        </p>
        <div className="mt-10 flex justify-center gap-4">
            <a href="https://play.google.com/store/apps?hl=en_GB" 
        rel='noopener noreferrer'
        target='_blank'>
            
             <button className=" text-black font-semibold px-6 py-2 rounded-lg border border-gray-200 flex items-center justify-center gap-2 cursor-pointer shadow">
            <img src={googlePlayImg} alt="" />
            Google Play</button>

            </a>
        

          <a href="https://www.apple.com/app-store/" 
        rel='noopener noreferrer'
        target='_blank'>
            <button className=" text-black font-semibold px-6 py-2 rounded-lg border border-gray-200 flex items-center justify-center gap-2 cursor-pointer shadow">
            <img src={appStoreImg} alt="" />
            App Store</button>
            </a>
         
         
        </div>
      </section>

      <section className="flex justify-center px-4">
        <div className="relative">
          <img src={phoneImg} className='w-[700px] md:w-[700px]' alt=" "  />
          
        </div>
      </section>


        
      
        <section className="w-full bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-center py-16">
      
         <h2 className="text-3xl font-semibold text-white">Trusted By Millions, Built For You</h2>
        <div className="max-w-screen-1xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 text-xl">
          <div className="mt-8 flex flex-col items-center text-white">
            <p className='text-sm'>Total Downloads</p>
            <p className="font-bold text-4xl mt-5 mb-5 ">29.6M</p>
            <p className='text-sm'>21% more than last month</p>
          </div>
          <div className="mt-8 flex flex-col items-center text-white">
            <p className='text-sm'>Total Reviews</p>
            <p className="font-bold text-4xl mt-5 mb-5 ">906K</p>
            <p className='text-sm'>46% more than last month</p>
          </div>
          <div className="mt-8 flex flex-col items-center text-white">
            <p className='text-sm'>Active Apps</p>
            <p className="font-bold text-4xl mt-5 mb-5 ">132+</p>
            <p className='text-sm'>31 more will Launch</p>
          </div>
       </div>
       
      </section>

      {/* data load */}

       <div className='flex justify-center py-5 items-center'>
                <div className='flex flex-col items-center justify-center text-center mt-20 mb-10'>
                    <h1 className='text-3xl font-semibold text-[#001931]'>Trending Apps</h1>
                <p className='text-[#627382] mt-8'>Explore All Trending Apps on the Market developed by us</p>
                </div>
           
            </div>

            {
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-7'>
                {featuredApps.map(app => (
                <AppsCard key={app.id} app={app}></AppsCard>
            ))}
            </div>
            
            }


            <div className='flex items-center justify-center mt-20 mb-10'>
              <Link className='btn btn-outline w-50 bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out' to='/apps'>Show All</Link>
            </div>
      </div>
   

  
  )
}

export default Home;
