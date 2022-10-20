import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import FetchDataByIdSearvice from "../services/FetchDataByIdService";
import { Table } from "@mantine/core";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DeviceData() {
    let { id } = useParams();
    const [locationData, setLocationData] = useState([{}]);
    const [deviceData, setDeviceData] = useState([]);
    useEffect(() => {
        FetchDataByIdSearvice(id)
            .then((data) => {
                setDeviceData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const row = deviceData.map((data) => {
        return (
            <>
                <tr key={data.id}>
                    <td>{data.Timing}</td>
                    <td>{data.Location}</td>
                    <br/>
                </tr>
            </>
        );
    });

    useEffect(() => {
        const locations = deviceData.map((data) => {
            return data.Location;
        });
        const locationCount = locations.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        }, {});
        setLocationData(locationCount);
    }, [deviceData]);

    const data = {
        labels: Object.keys(locationData),
        datasets: [
            {
                label: "time at that location",
                data: Object.values(locationData),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            {deviceData[0]?.DeviceId} <br/>
                {deviceData[0]?.DeviceType}
                <Table>{row}</Table>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <Pie data={data} />
                    </div>
                </div>
            </div>
        </>
    );
}
