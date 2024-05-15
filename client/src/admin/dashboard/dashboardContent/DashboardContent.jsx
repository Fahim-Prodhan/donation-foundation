import React from 'react';
import { FaBlogger, FaUsers } from "react-icons/fa6";
import { GoProjectRoadmap } from 'react-icons/go';

import { HiCurrencyDollar } from "react-icons/hi2";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
];

const DashboardContent = () => {
    return (
        <div className='grid lg:grid-rows-3 lg:grid-cols-4 gap-4 mt-6'>

            <div className="card bg-[#0A6847] text-white shadow-xl col-span-1">
                <div className="card-body text-center">
                    <h2 className=" text-left text-3xl flex items-center gap-2"><FaUsers />Donors</h2>
                    <p className='py-6 font-bold text-4xl items-center'>16549</p>
                </div>
            </div>

            <div className="card bg-[#F97300] shadow-xl text-white">
                <div className="card-body text-center">
                    <h2 className=" text-left text-3xl flex items-center gap-2"><HiCurrencyDollar />Amount</h2>
                    <p className='py-6 font-bold text-4xl items-center'>45549</p>
                </div>
            </div>

            <div className="card lg:order-none order-last bg-base-100 shadow-xl lg:col-span-2 lg:row-span-2">
                <div className="card-body">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 10,
                                bottom: 10,
                                left: 10,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="card bg-[#FC4100] shadow-xl text-white">
                <div className="card-body text-center">
                    <h2 className=" text-left text-3xl flex items-center gap-2">< GoProjectRoadmap />Projects</h2>
                    <p className='py-6 font-bold text-4xl items-center'>1054</p>
                </div>
            </div>
            <div className="card bg-[#10439F] shadow-xl text-white">
                <div className="card-body text-center">
                    <h2 className=" text-left text-3xl flex items-center gap-2">< FaBlogger />Blogs</h2>
                    <p className='py-6 font-bold text-4xl items-center'>2214</p>
                </div>
            </div>

        </div>
    );
};

export default DashboardContent;