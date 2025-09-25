"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AvailableRoomsPage() {
    const [rooms, setRooms] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showRooms, setShowRooms] = useState(false);
    const router = useRouter();

    const fetchAvailableRooms = async (pageNum = 1) => {
        try {
            const res = await fetch(`/api/rooms?page=${pageNum}&limit=10`);
            const data = await res.json();
            if (data.success) {
                setRooms(data.data);
                setPage(data.page);
                setTotalPages(data.totalPages);
                setShowRooms(true);
            } else {
                alert("Failed to load rooms");
            }
        } catch (err) {
            alert(err.message);
        }
    };

    const handleNext = () => {
        if (page < totalPages) fetchAvailableRooms(page + 1);
    };

    const handlePrev = () => {
        if (page > 1) fetchAvailableRooms(page - 1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h1 className="text-3xl font-bold text-gray-800">Available Rooms</h1>
                <button
                    onClick={() => router.push("/")}
                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded shadow"
                >
                    ⬅ Back to Home
                </button>
            </div>

            <div className="flex justify-center mb-6">
                <button
                    onClick={() => fetchAvailableRooms(1)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
                >
                    Show Available Rooms
                </button>
            </div>

            {/* Room List */}
            {showRooms && (
                <>
                    {rooms.length === 0 ? (
                        <p className="text-center text-gray-600">No available rooms found.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {rooms.map((room) => (
                                <div
                                    key={room._id}
                                    className="bg-white border rounded shadow p-4 hover:shadow-lg transition duration-200"
                                >
                                    <h3 className="font-bold text-lg text-indigo-700">{room.roomType}</h3>
                                    <p className="text-gray-600">Building: {room.buildingName}</p>
                                    <p className="text-gray-600">Floor: {room.floor}</p>
                                    <p className="text-gray-600">Beds Available: {room.bedsAvailable}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {rooms.length > 0 && (
                        <div className="flex justify-center gap-4 mt-8 items-center">
                            <button
                                onClick={handlePrev}
                                disabled={page === 1}
                                className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-600"
                            >
                                Prev
                            </button>
                            <span className="text-gray-700 font-medium">
                                Page {page} of {totalPages}
                            </span>
                            <button
                                onClick={handleNext}
                                disabled={page === totalPages}
                                className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-600"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
