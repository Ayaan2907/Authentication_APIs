import React, { useEffect, useState } from "react";
import FetchDataService from "../services/FetchDataService";
import { Link } from "react-router-dom";
export default function Home() {
    const [gpsData, setGpsData] = useState([]);
    const [dataToDisplay, setDataToDisplay] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            FetchDataService().then((data) => {
                setGpsData(data);
            }, 4000);
        });
    }, [gpsData]);

    const handleSearchInput = (e) => {
        const searchValue = e.target.value;
        const filteredData = gpsData?.filter((data) => {
            return (
                data.device_id?.includes(searchValue.toLowerCase()) ||
                data.device_name?.includes(searchValue.toLowerCase())
            );
        });
        setDataToDisplay( [...filteredData]);
    };
    
    const handlePagination = (e) => {
        const page = e.target.value;
        const data = gpsData.slice(page * 10, page * 10 + 10);
        setDataToDisplay([...data]);
    };
        
        
    const row = gpsData?.map((data) => {
        return (
            <>
                <Link to={`/gps/${data.DeviceId}`}>
                    <tr key={data.id}>
                        <td>{data.DeviceId}</td>
                        <td> -- </td>
                        <td>{data.DeviceType}</td>
                        <td> -- </td>
                        <td>{data.Timing}</td>
                        <td> -- </td>
                        <td>{data.Location}</td>
                    </tr>
                </Link>
                <hr />
            </>
        );
    });

    return (
        <>
            <div className="flex flex-col">
            <input type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                onChange={handleSearchInput}
                placeholder="Search by Device ID"
                 />
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">      
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-900 px-6 py-4 text-left"
                                        >
                                            Device Type Device Id Time stamp
                                            Location
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{row}</tbody>
                            </table>
                        </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onclick={(e)=>handlePagination(e)}
                    >
                    next
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    prev
                    </button>
                </div>
            </div>
        </>
    );
}
