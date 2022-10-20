import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PieChart, Pie } from 'recharts';
import FetchDataByIdSearvice from '../services/FetchDataService';

export default function DeviceData() {
    let { id } = useParams();
    const [gpsData, setGpsData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
        FetchDataByIdSearvice(id).then((data) => {
            setGpsData(data);
        });
        }, 4000);
    }, [gpsData]);

    // TODO: handle logic for calculating location and generate pie based on that
    
    const data = [
        {name: 'Geeksforgeeks', students: 400},
        {name: 'Technical scripter', students: 700},
        {name: 'Geek-i-knack', students: 200},
        {name: 'Geek-o-mania', students: 1000}
      ];
        
        
    return (<>
        <PieChart width={400} height={400}>
            <Pie data={data} dataKey="students" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
        </PieChart>

    </>);
      }