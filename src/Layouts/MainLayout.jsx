import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Loader from '../Components/Loader';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar>
                
            </Navbar>

         <div className='max-w-screen-1xl mx-auto w-full bg-base-300 py-4 md:py-8 lg:py-12 flex-grow'>
            <Suspense fallback={<Loader></Loader>}>
                 <Outlet>
                
            </Outlet>
            </Suspense>
            
       
          
           
            
       
         </div>

            <Footer>
                
            </Footer>

           
        </div>
    );
};

export default MainLayout;