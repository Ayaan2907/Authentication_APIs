import React, { useEffect, useState } from "react";
import FetchDataService from "../services/FetchDataService";
import { Link } from "react-router-dom";
export default function Home() {
    const [gpsData, setGpsData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            FetchDataService().then((data) => {
                setGpsData(data);
            }, 4000);
        });
    }, [gpsData]);
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
                                        {/* <th
                                            scope="col"
                                            className="text-sm font-medium text-900 px-6 py-4 text-left"
                                        >
                                            Device Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-900 px-6 py-4 text-left"
                                        >
                                            Time stamp
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-900 px-6 py-4 text-left"
                                        >
                                            Location
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody>{row}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={handleLogout}>Logout</button> */}
        </>
    );
}
