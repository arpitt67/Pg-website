// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col font-sans">
//       {/* Navbar */}
//       <nav className="w-full fixed top-0 left-0 z-20 bg-black/40 text-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             {/* Logo */}
//             <div className="flex-shrink-0 text-xl font-bold">PG Web</div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-6">
//               <Link href="/" className="hover:text-gray-200">Home</Link>
//               <Link href="/admin/rooms" className="hover:text-gray-200">Rooms Available</Link>
//               <Link href="/about" className="hover:text-gray-200">About</Link>
//               <Link href="/contact" className="hover:text-gray-200">Contact Us</Link>
//               <Link
//                 href="/login"
//                 className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100"
//               >
//                 Login
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="focus:outline-none text-2xl"
//               >
//                 {isOpen ? "✖" : "☰"}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-black/80 px-4 py-3 space-y-2">
//             <Link href="/" className="block hover:text-gray-200">Home</Link>
//             <Link href="/admin/rooms" className="block hover:text-gray-200">Rooms Available</Link>
//             <Link href="/about" className="block hover:text-gray-200">About</Link>
//             <Link href="/contact" className="block hover:text-gray-200">Contact Us</Link>
//             <Link
//               href="/login"
//               className="block bg-white text-blue-600 px-4 py-2 rounded-full font-medium text-center hover:bg-gray-100"
//             >
//               Login
//             </Link>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <main className="relative w-full flex-grow">
//         <div className="relative w-full h-screen">
//           <Image
//             src="/main.jpg"
//             alt="PG showcase"
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Overlay Text */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
//             <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
//               Welcome to Ramzi PG
//             </h1>
//             <p className="text-lg sm:text-2xl text-white max-w-2xl">
//               Track rooms, availability, and connect with us easily.
//             </p>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-blue-600 text-white text-center py-4">
//         © {new Date().getFullYear()} PG Web. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col font-sans relative">
//       {/* Navbar */}
//       <nav className="w-full bg-blue-600 text-white fixed top-0 left-0 z-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="text-xl font-bold">PG Web</div>
//             <div className="hidden md:flex space-x-6">
//               <Link href="/" className="hover:text-gray-200">Home</Link>
//               <Link href="/about" className="hover:text-gray-200">About</Link>
//               <Link href="/contact" className="hover:text-gray-200">Contact</Link>
//               <button
//                 onClick={() => setShowLogin(true)}
//                 className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100"
//               >
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <main className="flex-grow flex flex-col items-center justify-center text-center pt-20">
//         <h1 className="text-5xl font-bold mb-6 text-gray-800">
//           Welcome to PG Management
//         </h1>
//         <p className="text-xl text-gray-600 mb-8 max-w-2xl px-4">
//           Track rooms, availability, and connect with us easily.
//         </p>
//         <div className="w-full max-w-2xl relative h-96">
//           <Image
//             src="/main.jpg"
//             alt="PG showcase"
//             fill
//             className="object-cover rounded-lg shadow-lg"
//             priority
//           />
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-blue-600 text-white text-center py-6 mt-auto">
//         © {new Date().getFullYear()} PG Web. All rights reserved.
//       </footer>

//       {/* Login Modal */}
//       {showLogin && (
//         <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
//           <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//             {/* Close Button */}
//             <button
//               onClick={() => setShowLogin(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
//             >
//               &times;
//             </button>

//             <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//               Login to Your Account
//             </h2>

//             <form className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="your@example.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//                 <input
//                   type="password"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//               >
//                 Login
//               </button>
//             </form>
//             <p className="mt-4 text-sm text-gray-700 text-center">
//               Don't have an account?{" "}
//               <Link href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
//                 Sign Up
//               </Link>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {

//   const [isOpen, setIsOpen] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col font-sans relative">
//       {/* Navbar */}
//       <nav className="w-full fixed top-0 left-0 z-20 bg-black/40 text-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             {/* Logo */}
//             <div className="flex-shrink-0 text-xl font-bold">Ramzi PG</div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-6">
//               <Link href="/" className="hover:text-gray-200">Home</Link>
//               <Link href="/admin/rooms" className="hover:text-gray-200">Rooms Available</Link>
//               <Link href="/about" className="hover:text-gray-200">About</Link>
//               <Link href="/contact" className="hover:text-gray-200">Contact Us</Link>
//               <button
//                 onClick={() => setShowLogin(true)}
//                 className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100"
//               >
//                 Login
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="focus:outline-none text-2xl"
//               >
//                 {isOpen ? "✖" : "☰"}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-black/80 px-4 py-3 space-y-2">
//             <Link href="/" className="block hover:text-gray-200">Home</Link>
//             <Link href="/admin/rooms" className="block hover:text-gray-200">Rooms Available</Link>
//             <Link href="/about" className="block hover:text-gray-200">About</Link>
//             <Link href="/contact" className="block hover:text-gray-200">Contact Us</Link>
//             <button
//               onClick={() => setShowLogin(true)}
//               className="block w-full bg-white text-blue-600 px-4 py-2 rounded-full font-medium text-center hover:bg-gray-100"
//             >
//               Login
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <main className="relative w-full flex-grow">
//         <div className="relative w-full h-screen">
//           <Image
//             src="/main.jpg"
//             alt="PG showcase"
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Overlay Text */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
//             <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
//               Welcome to Ramzi PG
//             </h1>
//             <p className="text-lg sm:text-2xl text-white max-w-2xl">
//               Track rooms, availability, and connect with us easily.
//             </p>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-blue-600 text-white text-center py-4">
//         © {new Date().getFullYear()} Arpit Web. All rights reserved.
//       </footer>

//       {/* Login Modal */}
//       {showLogin && (
//         <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
//           <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//             {/* Close Button */}
//             <button
//               onClick={() => setShowLogin(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
//             >
//               &times;
//             </button>

//             <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//               Login to Your Account
//             </h2>

//             <form className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="your@example.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//                 <input
//                   type="password"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//               >
//                 Login
//               </button>
//             </form>
//             <p className="mt-4 text-sm text-gray-700 text-center">
//               Don't have an account?{" "}
//               <Link href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
//                 Sign Up
//               </Link>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // for navigation after login

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle login submit
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // ✅ Redirect if login success
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-20 bg-black/40 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 text-xl font-bold">Ramzi PG</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-gray-200">Home</Link>
              <Link href="/admin/rooms" className="hover:text-gray-200">Rooms Available</Link>
              <Link href="/about" className="hover:text-gray-200">About</Link>
              <Link href="/contact" className="hover:text-gray-200">Contact Us</Link>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100"
              >
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none text-2xl"
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/80 px-4 py-3 space-y-2">
            <Link href="/" className="block hover:text-gray-200">Home</Link>
            <Link href="/admin/rooms" className="block hover:text-gray-200">Rooms Available</Link>
            <Link href="/about" className="block hover:text-gray-200">About</Link>
            <Link href="/contact" className="block hover:text-gray-200">Contact Us</Link>
            <button
              onClick={() => setShowLogin(true)}
              className="block w-full bg-white text-blue-600 px-4 py-2 rounded-full font-medium text-center hover:bg-gray-100"
            >
              Login
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative w-full flex-grow">
        <div className="relative w-full h-screen">
          <Image
            src="/main.jpg"
            alt="PG showcase"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              Welcome to Ramzi PG
            </h1>
            <p className="text-lg sm:text-2xl text-white max-w-2xl">
              Track rooms, availability, and connect with us easily.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        © {new Date().getFullYear()} Arpit Web. All rights reserved.
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-8">
            {/* Close Button */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Login to Your Account
            </h2>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

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
        </div>
      )}
    </div>
  );
}
