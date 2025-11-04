import { useState } from 'react';
import { loadInstalledApps, removedFromInstallation } from '../utils/localStorage';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState(() => loadInstalledApps());
    const [sortOrder, setSortOrder] = useState("none");

    if (!installedApps.length) return <p>No installed apps found</p>;

    const sortedApps = (() => {
        if (sortOrder === "downloads-asc") {
            return [...installedApps].sort((a, b) => a.downloads - b.downloads);
        } else if (sortOrder === "downloads-dsc") {
            return [...installedApps].sort((a, b) => b.downloads - a.downloads);
        } else {
            return installedApps;
        }
    })();

    const handleUninstall = (id) => {
        removedFromInstallation(id);
        setInstalledApps((prev) => prev.filter((app) => app.id !== id));

         toast.success(`Uninstalled Successfully!`);
    };

    return (
        <div className="ml-4 mr-4">
            <div className="flex justify-center py-5 items-center">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-3xl font-semibold">Your Installed Apps</h1>
                    <p className="text-sm text-[#627382]">Explore all apps installed on your device</p>
                </div>
            </div>

           
            <div className="flex justify-between py-5 items-center">
                <div className="text-xl font-semibold">
                    <span>{installedApps.length}</span> Apps Found
                </div>

                <label className="form-control w-full max-w-xs">
                    <select
                        className="select select-bordered"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="none">Sort by Size</option>
                        <option value="downloads-asc">Low-&gt;High</option>
                        <option value="downloads-dsc">High-&gt;Low</option>
                    </select>
                </label>
            </div>

            <div className="space-y-3">
                {sortedApps.map((app) => (
                    <div key={app.id} className="card card-side bg-base-100 shadow-sm">
                        <figure>
                            <img className="w-40 h-28 object-cover" src={app.image} alt={app.title} />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">{app.title}</h3>
                            

                            <div className="flex items-center space-x-4 gap-10">
                                <div className="flex items-center gap-2">
                                <FiDownload className="text-[#00d390]" />
                                                            
                                <span className="font-extrabold text-[#001931]">{app.downloads}M</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                         <FaStar className="text-[#ff8811] " />
                                                           
                        <span className="font-extrabold text-[#001931] ">{app.ratingAvg}</span>
                    </div>
                </div>
                                                        


                        </div>
                        <div className="pr-4 flex items-center">
                            <button onClick={() => handleUninstall(app.id)} className="btn btn-outline bg-[#00d390] text-white">
                                 Uninstall
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Installation;
