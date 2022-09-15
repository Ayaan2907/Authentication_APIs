import React, { useEffect, useState } from "react";
import FetchDataService from "../services/FetchDataService";
import { useNavigate } from "react-router-dom";
// export default function Home({gpsData, setGpsData, setUser}) {
export default function Home({ setUser }) {
    const [gpsData, setGpsData] = useState([
        {
            "id": 1,
            "DeviceId": "D-1567",
            "DeviceType": "Aircraft",
            "Timing": "2022-09-13T12:45:23.000Z",
            "Location": "L1"
        },
        {
            "id": 2,
            "DeviceId": "D-1568",
            "DeviceType": "Personal",
            "Timing": "2022-09-13T12:45:23.000Z",
            "Location": "L3"
        },
        {
            "id": 3,
            "DeviceId": "D-1565",
            "DeviceType": "Aircraft",
            "Timing": "2022-09-13T12:45:23.000Z",
            "Location": "L2"
        },
        {
            "id": 4,
            "DeviceId": "D-1589",
            "DeviceType": "Asset",
            "Timing": "2022-09-13T12:45:23.000Z",
            "Location": "L1"
        },
        {
            "id": 5,
            "DeviceId": "D-1526",
            "DeviceType": "Aircraft",
            "Timing": "2022-09-13T12:45:23.000Z",
            "Location": "L2"
        },
        {
            "id": 6,
            "DeviceId": "D-1567",
            "DeviceType": "Aircraft",
            "Timing": "2022-09-13T12:45:23.000Z",
            "Location": "L1"
        },
        {
            "id": 7,
            "DeviceId": "D-1568",
            "DeviceType": "Personal",
            "Timing": "2022-09-13T12:45:23.000Z",
            "Location": "L3"
        },
        {
            "id": 8,
            "DeviceId": "D-1565",
            "DeviceType": "Aircraft",
            "Timing": "2022-09-13T12:45:23.000Z",
            "Location": "L2"
        },
        {
            "id": 9,
            "DeviceId": "D-1589",
            "DeviceType": "Asset",
            "Timing": "2022-09-13T12:45:23.000Z",
            "Location": "L1"
        },
        {
            "id": 10,
            "DeviceId": "D-1526",
            "DeviceType": "Aircraft",
            "Timing": "2022-09-13T12:45:23.000Z",
            "Location": "L2"
        }
    ]);  // pasting the data here. its giving err in fetching and assigning it to gpsData FIXME: later
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            // setGpsData(FetchDataService());
            // FetchDataService()
        }, 1000);
        setTimeout(() => {
            console.log(gpsData);
        }, 4000);
    }, [gpsData]);

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setUser(null);
        navigate("/");
    };
    return (
        <>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-900 px-6 py-4 text-left">Device Id</th>
                                        <th scope="col"className="text-sm font-medium text-900 px-6 py-4 text-left">Device Type</th>
                                        <th scope="col"className="text-sm font-medium text-900 px-6 py-4 text-left">Time stamp</th>
                                        <th scope="col"className="text-sm font-medium text-900 px-6 py-4 text-left">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gpsData.map((data) => (
                                        <tr className="border-b" key={data.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-900">{data.DeviceId}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-900">{data.DeviceType}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-900">{data.Timing}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-900">{data.Location}</td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}
