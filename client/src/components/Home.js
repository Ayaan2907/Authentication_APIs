import React from "react";

export default function Home() {
    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-900 px-6 py-4 text-left"
                                        >
                                            Device Id
                                        </th>
                                        <th
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
                                        </th>
                                    </tr>
                                </thead>
                                <tbody classNameName="-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-600 hover:bg-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:500">
                                    <tr className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-900">
                                            1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-900">
                                            1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-900">
                                            1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-900">
                                            1
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-900">
                                            1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-900">
                                            1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-900">
                                            1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-900">
                                            1
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
