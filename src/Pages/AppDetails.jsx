import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import useApps from '../hooks/useApps';
import { useParams } from 'react-router';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { TbFileLike } from "react-icons/tb";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { updateInstallationList } from '../utils/localStorage';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useApps();
    const [isInstalled, setIsInstalled] = useState(false);
    
    const app = apps.find(a => String(a.id) === id);

    if (loading) return <p>Loading...</p>;

    const { image, title, companyName, ratingAvg, downloads, reviews, ratings, description } = app || {};

    const handleInstall = () => {
        setIsInstalled(true);
        updateInstallationList(app); 
        toast.success(`${title} Installed Successfully!`);
    };

    const chartData = ratings.map(rating => ({
        name: rating.name,
        count: rating.count,
    }));

    return (
        <div className=" py-10 space-y-10 ml-8">
            <section className="w-full md:w-3/4 flex flex-col md:flex-row space-y-6 md:space-y-0">
                <div className="card w-full md:w-3/4 flex flex-col md:flex-row">
                    <figure className="md:w-1/3 overflow-hidden">
                        <img className="w-full object-cover" src={image} alt={title} />
                    </figure>
                    <div className="card-body w-2/3 px-6 py-4">
                        <h2 className="card-title text-3xl text-[#001931]">{title}</h2>
                        <p>Developed by <span className='text-[#9f62f2] font-semibold'>{companyName}</span></p>
                        <div className="flex items-center space-x-4 gap-10">
                            <div className="flex items-center flex-col">
                                <FiDownload className="text-[#00d390] text-4xl" />
                                <span className="text-sm mt-1">Downloads</span>
                                <span className="text-lg mt-1 font-extrabold text-[#001931]">{downloads}M</span>
                            </div>

                            <div className="flex items-center flex-col">
                                <FaStar className="text-[#ff8811] text-4xl" />
                                <span className="text-sm mt-1">Average Ratings</span>
                                <span className="text-lg font-extrabold text-[#001931] mt-1">{ratingAvg}</span>
                            </div>
                            <div className="flex items-center flex-col">
                                <TbFileLike className="text-[#9f62f2] text-4xl" />
                                <span className="text-sm mt-1">Total Reviews</span>
                                <span className="text-lg font-extrabold text-[#001931] mt-1">{reviews}K</span>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <button
                                onClick={handleInstall}
                                className={`btn ${isInstalled ? 'bg-[#00d390] cursor-not-allowed text-white' : 'bg-[#00d390] text-white'} p-3 rounded-lg`}
                                disabled={isInstalled}
                            >
                                {isInstalled ? 'Installed' : 'Install Now(291 MB)'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full md:w-3/4">
                <div className="space-y-3 ">
                    <h3 className="text-xl font-semibold">Ratings</h3>
                    <div className="p-4 h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="count" fill="#FF8811" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>

            <section className="w-full md:w-3/4">
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-4">Description</h3>
                    <p className="text-base-content">{description}</p>
                </div>
            </section>
           
            <ToastContainer position="top-center" />
        </div>
    );
};

export default AppDetails;

