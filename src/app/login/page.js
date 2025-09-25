// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add your login logic here
//         alert(`Email: ${email}, Password: ${password}`);
//     };

//     return (
//         <div className="relative min-h-screen flex items-center justify-center font-sans">
//             {/* Background Image */}
//             <Image
//                 src="/main.jpg"
//                 alt="Background"
//                 fill
//                 className="object-cover"
//                 priority
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/50"></div>

//             {/* Back Button */}
//             <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
//                 <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-200 font-medium">
//                     <img src="/assets/back.jpeg" alt="Back" className="w-6 h-6" />
//                     Back to Home
//                 </Link>
//             </div>

//             {/* Login Form */}
//             <div className="relative z-10 max-w-md w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-lg p-8">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//                     Login to Your Account
//                 </h2>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="your@example.com"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//                     >
//                         Login
//                     </button>
//                 </form>

//                 <p className="mt-4 text-sm text-gray-700 text-center">
//                     Don't have an account?{" "}
//                     <Link href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
//                         Sign Up
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// }


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add your login logic here
//         alert(`Email: ${email}, Password: ${password}`);
//     };

//     const clearFields = () => {
//         setEmail("");
//         setPassword("");
//     };

//     return (
//         <div className="relative min-h-screen flex items-center justify-center font-sans">
//             {/* Background Image */}
//             <Image
//                 src="/main.jpg"
//                 alt="Background"
//                 fill
//                 className="object-cover"
//                 priority
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/50"></div>

//             {/* Back Button */}
//             <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
//                 <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-200 font-medium">
//                     <img src="/assets/back.jpeg" alt="Back" className="w-6 h-6" />
//                     Back to Home
//                 </Link>
//             </div>

//             {/* Login Form */}
//             <div className="relative z-10 max-w-md w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-lg p-8">
//                 {/* Close/Clear Button */}
//                 <button
//                     onClick={clearFields}
//                     type="button"
//                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
//                     title="Clear fields"
//                 >
//                     &times;
//                 </button>

//                 <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//                     Login to Your Account
//                 </h2>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="your@example.com"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//                     >
//                         Login
//                     </button>
//                 </form>

//                 <p className="mt-4 text-sm text-gray-700 text-center">
//                     Don't have an account?{" "}
//                     <Link href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
//                         Sign Up
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// }


"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
    const [showForm, setShowForm] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        alert(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center font-sans">
            {/* Background Image */}
            <Image
                src="/main.jpg"
                alt="Background"
                fill
                className="object-cover"
                priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Back Button */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-200 font-medium">
                    <img src="/assets/back.jpeg" alt="Back" className="w-6 h-6" />
                    Back to Home
                </Link>
            </div>

            {/* Login Form */}
            {showForm && (
                <div className="relative z-10 max-w-md w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-lg p-8">
                    {/* Close Button */}
                    <button
                        onClick={() => setShowForm(false)}
                        type="button"
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
                        title="Close"
                    >
                        &times;
                    </button>

                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Login to Your Account
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-gray-700 text-center">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                            Sign Up
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
}
