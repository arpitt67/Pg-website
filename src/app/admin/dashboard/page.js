

// "use client";
// import { useState, useEffect } from "react";

// export default function AdminDashboard() {
//     const [rooms, setRooms] = useState([]);
//     const [page, setPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [showAddForm, setShowAddForm] = useState(false);
//     const [formData, setFormData] = useState({
//         roomType: "1 Seater Cooler",
//         buildingName: "",
//         floor: 0,
//         bedsAvailable: 1,
//     });

//     const fetchRooms = async (pageNum = 1) => {
//         const res = await fetch(`/api/rooms?page=${pageNum}&limit=10`);
//         const data = await res.json();
//         if (data.success) {
//             setRooms(data.data);
//             setPage(data.page);
//             setTotalPages(data.totalPages);
//         }
//     };

//     useEffect(() => {
//         fetchRooms(1);
//     }, []);

//     const handleShowRooms = () => fetchRooms(1);
//     const handleNext = () => { if (page < totalPages) fetchRooms(page + 1); };
//     const handlePrev = () => { if (page > 1) fetchRooms(page - 1); };

//     const handleAddRoom = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await fetch("/api/rooms", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });
//             const data = await res.json();
//             if (data.success) {
//                 fetchRooms(page);
//                 setShowAddForm(false);
//                 setFormData({ roomType: "1 Seater Cooler", buildingName: "", floor: 0, bedsAvailable: 1 });
//             } else alert(data.error);
//         } catch (err) {
//             alert(err.message);
//         }
//     };

//     const handleDelete = async (id) => {
//         if (!confirm("Are you sure you want to delete this room?")) return;
//         try {
//             const res = await fetch(`/api/rooms/${id}`, { method: "DELETE" });
//             const data = await res.json();
//             if (data.success) fetchRooms(page);
//         } catch (err) {
//             alert(err.message);
//         }
//     };

//     const handleUpdate = async (room) => {
//         const newBeds = prompt("Enter new beds available", room.bedsAvailable);
//         if (newBeds === null) return;
//         try {
//             const res = await fetch(`/api/rooms/${room._id}`, {
//                 method: "PUT",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ ...room, bedsAvailable: Number(newBeds) }),
//             });
//             const data = await res.json();
//             if (data.success) fetchRooms(page);
//         } catch (err) {
//             alert(err.message);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
//             <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Panel - Room Management</h1>

//             <div className="flex flex-wrap gap-4 mb-6">
//                 <button onClick={handleShowRooms} className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow">
//                     Show Available Rooms
//                 </button>
//                 <button onClick={() => setShowAddForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow">
//                     Add Room
//                 </button>
//             </div>

//             {/* Add Room Form */}
//             {showAddForm && (
//                 <div className="relative bg-white border shadow p-6 rounded mb-6 max-w-xl mx-auto">
//                     <button
//                         onClick={() => setShowAddForm(false)}
//                         className="absolute top-2 right-2 text-red-600 font-bold text-xl hover:text-red-800"
//                     >
//                         ✖
//                     </button>
//                     <form onSubmit={handleAddRoom} className="flex flex-col gap-4">
//                         <label className="flex flex-col text-gray-700">
//                             Room Type:
//                             <select
//                                 value={formData.roomType}
//                                 onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
//                                 className="border rounded p-2 mt-1"
//                             >
//                                 <option>1 Seater Cooler</option>
//                                 <option>2 Seater Cooler</option>
//                                 <option>2 Seater AC</option>
//                                 <option>3 Seater Cooler</option>
//                                 <option>3 Seater AC</option>
//                             </select>
//                         </label>

//                         <label className="flex flex-col text-gray-700">
//                             Building Name:
//                             <input
//                                 type="text"
//                                 value={formData.buildingName}
//                                 onChange={(e) => setFormData({ ...formData, buildingName: e.target.value })}
//                                 className="border rounded p-2 mt-1"
//                                 required
//                             />
//                         </label>

//                         <label className="flex flex-col text-gray-700">
//                             Floor:
//                             <input
//                                 type="number"
//                                 value={formData.floor}
//                                 onChange={(e) => setFormData({ ...formData, floor: Number(e.target.value) })}
//                                 className="border rounded p-2 mt-1"
//                                 min={0}
//                                 required
//                             />
//                         </label>

//                         <label className="flex flex-col text-gray-700">
//                             Beds Available:
//                             <input
//                                 type="number"
//                                 value={formData.bedsAvailable}
//                                 onChange={(e) => setFormData({ ...formData, bedsAvailable: Number(e.target.value) })}
//                                 className="border rounded p-2 mt-1"
//                                 min={0}
//                                 required
//                             />
//                         </label>

//                         <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow mt-2">
//                             Add Room
//                         </button>
//                     </form>
//                 </div>
//             )}

//             {/* Rooms List */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {rooms.map((room) => (
//                     <div key={room._id} className="bg-white border rounded shadow p-4 hover:shadow-lg transition duration-200">
//                         <h3 className="font-bold text-lg text-indigo-700">{room.roomType}</h3>
//                         <p className="text-gray-600">Building: {room.buildingName}</p>
//                         <p className="text-gray-600">Floor: {room.floor}</p>
//                         <p className="text-gray-600">Beds Available: {room.bedsAvailable}</p>

//                         <div className="flex gap-2 mt-4">
//                             <button
//                                 onClick={() => handleUpdate(room)}
//                                 className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow"
//                             >
//                                 Update
//                             </button>
//                             <button
//                                 onClick={() => handleDelete(room._id)}
//                                 className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded shadow"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Pagination */}
//             {rooms.length > 0 && (
//                 <div className="flex justify-center gap-4 mt-8 items-center">
//                     <button
//                         onClick={handlePrev}
//                         disabled={page === 1}
//                         className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-600"
//                     >
//                         Prev
//                     </button>
//                     <span className="text-gray-700 font-medium">
//                         Page {page} of {totalPages}
//                     </span>
//                     <button
//                         onClick={handleNext}
//                         disabled={page === totalPages}
//                         className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-600"
//                     >
//                         Next
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }


"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
    const router = useRouter();
    const [rooms, setRooms] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showAddForm, setShowAddForm] = useState(false);
    const [formData, setFormData] = useState({
        roomType: "1 Seater Cooler",
        buildingName: "",
        floor: 0,
        bedsAvailable: 1,
    });

    const fetchRooms = async (pageNum = 1) => {
        const res = await fetch(`/api/rooms?page=${pageNum}&limit=10`);
        const data = await res.json();
        if (data.success) {
            setRooms(data.data);
            setPage(data.page);
            setTotalPages(data.totalPages);
        }
    };

    useEffect(() => {
        fetchRooms(1);
    }, []);

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/logout", { method: "POST" });
            if (res.ok) {
                router.push("/");
            } else {
                alert("Logout failed");
            }
        } catch (err) {
            alert(err.message);
        }
    };

    const handleShowRooms = () => fetchRooms(1);
    const handleNext = () => { if (page < totalPages) fetchRooms(page + 1); };
    const handlePrev = () => { if (page > 1) fetchRooms(page - 1); };

    const handleAddRoom = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/rooms", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                fetchRooms(page);
                setShowAddForm(false);
                setFormData({ roomType: "1 Seater Cooler", buildingName: "", floor: 0, bedsAvailable: 1 });
            } else alert(data.error);
        } catch (err) {
            alert(err.message);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this room?")) return;
        try {
            const res = await fetch(`/api/rooms/${id}`, { method: "DELETE" });
            const data = await res.json();
            if (data.success) fetchRooms(page);
        } catch (err) {
            alert(err.message);
        }
    };

    const handleUpdate = async (room) => {
        const newBeds = prompt("Enter new beds available", room.bedsAvailable);
        if (newBeds === null) return;
        try {
            const res = await fetch(`/api/rooms/${room._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...room, bedsAvailable: Number(newBeds) }),
            });
            const data = await res.json();
            if (data.success) fetchRooms(page);
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h1 className="text-3xl font-bold text-gray-800">Admin Panel - Room Management</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow"
                >
                    Logout
                </button>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
                <button onClick={handleShowRooms} className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow">
                    Show Available Rooms
                </button>
                <button onClick={() => setShowAddForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow">
                    Add Room
                </button>
            </div>

            {/* Add Room Form */}
            {showAddForm && (
                <div className="relative bg-white border shadow p-6 rounded mb-6 max-w-xl mx-auto">
                    <button
                        onClick={() => setShowAddForm(false)}
                        className="absolute top-2 right-2 text-red-600 font-bold text-xl hover:text-red-800"
                    >
                        ✖
                    </button>
                    <form onSubmit={handleAddRoom} className="flex flex-col gap-4">
                        <label className="flex flex-col text-gray-700">
                            Room Type:
                            <select
                                value={formData.roomType}
                                onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                                className="border rounded p-2 mt-1"
                            >
                                <option>1 Seater Cooler</option>
                                <option>2 Seater Cooler</option>
                                <option>2 Seater AC</option>
                                <option>3 Seater Cooler</option>
                                <option>3 Seater AC</option>
                            </select>
                        </label>

                        <label className="flex flex-col text-gray-700">
                            Building Name:
                            <input
                                type="text"
                                value={formData.buildingName}
                                onChange={(e) => setFormData({ ...formData, buildingName: e.target.value })}
                                className="border rounded p-2 mt-1"
                                required
                            />
                        </label>

                        <label className="flex flex-col text-gray-700">
                            Floor:
                            <input
                                type="number"
                                value={formData.floor}
                                onChange={(e) => setFormData({ ...formData, floor: Number(e.target.value) })}
                                className="border rounded p-2 mt-1"
                                min={0}
                                required
                            />
                        </label>

                        <label className="flex flex-col text-gray-700">
                            Beds Available:
                            <input
                                type="number"
                                value={formData.bedsAvailable}
                                onChange={(e) => setFormData({ ...formData, bedsAvailable: Number(e.target.value) })}
                                className="border rounded p-2 mt-1"
                                min={0}
                                required
                            />
                        </label>

                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow mt-2">
                            Add Room
                        </button>
                    </form>
                </div>
            )}

            {/* Rooms List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.map((room) => (
                    <div key={room._id} className="bg-white border rounded shadow p-4 hover:shadow-lg transition duration-200">
                        <h3 className="font-bold text-lg text-indigo-700">{room.roomType}</h3>
                        <p className="text-gray-600">Building: {room.buildingName}</p>
                        <p className="text-gray-600">Floor: {room.floor}</p>
                        <p className="text-gray-600">Beds Available: {room.bedsAvailable}</p>

                        <div className="flex gap-2 mt-4">
                            <button
                                onClick={() => handleUpdate(room)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => handleDelete(room._id)}
                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded shadow"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

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
        </div>
    );
}
