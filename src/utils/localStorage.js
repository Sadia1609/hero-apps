//get
export const loadInstalledApps = () => {
    try {
        const data = localStorage.getItem('installedApps');
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.log(err);
        return [];
    }
};

// Save the app 
export const updateInstallationList = (app) => {
    const installedApps = loadInstalledApps();
    try {
        const isDuplicate = installedApps.some((a) => a.id === app.id);
        if (isDuplicate) return alert('This app is already installed.');

        const updatedInstalledApps = [...installedApps, app];
        localStorage.setItem('installedApps', JSON.stringify(updatedInstalledApps));
    } catch (err) {
        console.log(err);
    }
};

// Remove 
export const removedFromInstallation = (id) => {
    const installedApps = loadInstalledApps();
    try {
        const updatedInstalledApps = installedApps.filter((p) => p.id !== id);
        localStorage.setItem('installedApps', JSON.stringify(updatedInstalledApps));
    } catch (err) {
        console.log(err);
    }
};
