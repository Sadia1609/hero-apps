import React, { useEffect, useState } from 'react';
import useApps from '../hooks/useApps';
import AppsCard from '../Components/AppsCard';
import { CiSearch } from "react-icons/ci";
import Loader from '../Components/Loader';

const Apps = () => {

    const {apps} = useApps()
    const [search, setSearch] = useState("")
    const[isLoading, setIsLoading] = useState(false);
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? apps.filter(
        app => app.title.toLocaleLowerCase() .includes(term)
    ) : apps;

    useEffect(() => {
        if (term) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 500); 
        } else {
            setIsLoading(false);
        }
    }, [search]);


    return (
        <div>

            <div className='flex justify-center py-5 items-center'>
                <div className='flex flex-col items-center justify-center text-center '>
                    <h1 className='text-3xl font-semibold text-[#001931]'>Our All Applications</h1>
                <p className='text-[#627382] mt-8'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
           
            </div>

          <div className='flex justify-between py-5 items-center'>
           
                <h1 className='text-3xl font-bold ml-8'>{' '}<span className='text-sm text-[#001931]'>({searchedApps.length}) Apps Found</span></h1>
           <label className="input mx-8">
            <CiSearch className='mt-1'/> 
            <input value={search}
            onChange={(e => setSearch(e.target.value))} type="search" placeholder="Search Apps" />
            </label>
            </div>


            {isLoading ? (
                <Loader /> 
            ) : (
                <>
                    {searchedApps.length === 0 && term && (
                        <div className="text-center text-8xl text-[#25323f] font-bold mt-20 mb-20">
                            No Apps Found
                        </div>
                    )}

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8'>
              {
                searchedApps.map(app => (
                <AppsCard key={app.id} app={app}></AppsCard>
            ))}
           
         </div>
         </>
    )}
        </div>
    );
};

export default Apps;