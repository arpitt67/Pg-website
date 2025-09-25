"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    const images = [
        "/assets/1.jpg",
        "/assets/2.jpg",
        "/assets/3.jpg",
        "/assets/4.jpg",
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Back Button */}
            <div className="p-4 sm:p-6">
                <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                    <div className="w-6 h-6 relative">
                        <Image src="/assets/back.jpeg" alt="Back" fill className="object-contain" />
                    </div>
                    Back to Home
                </Link>
            </div>

            {/* Header */}
            <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Our PG</h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto px-4">
                    Our PG provides fully furnished rooms with modern amenities, 24/7 security, Wi- Fi
                    and a friendly environment. Explore our facilities below.
                </p>
            </header>

            {/* Image Grid */}
            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
                    Photos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
                        >
                            <Image
                                src={src}
                                alt={`PG image ${index + 1}`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-6 mt-auto">
                © {new Date().getFullYear()} Arpit Web. All rights reserved.
            </footer>
        </div>
    );
}
