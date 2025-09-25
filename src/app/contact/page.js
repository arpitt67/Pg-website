"use client";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans relative flex flex-col">
            {/* Back Button */}
            <div className="fixed top-4 left-4 z-50">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-white bg-black/50 px-3 py-1 rounded-md hover:bg-black/70 font-medium shadow"
                >
                    <Image src="/assets/back.jpeg" alt="Back" width={24} height={24} />
                    Back to Home
                </Link>
            </div>

            {/* Header */}
            <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 text-center relative">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto px-4">
                    Get in touch with RAMZI Paying Guest for bookings, queries, or assistance.
                </p>
            </header>

            {/* Contact Section */}
            <main className="flex-grow max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-center space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">RAMZI PAYING GUEST</h2>
                        <p className="text-gray-700">
                            <span className="font-medium">Address:</span> Η ΝΟ Η-037, BLOCK-H, NEAR ALPHA 2 MARKET 1st Avenue, SECTOR-ALPHA 2, Alpha 2, Greater Noida, Gautambuddha Nagar, Uttar Pradesh, 201308
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">Phone:</span> +91 8826522925, +91 9990162841
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">Email:</span> info@ramzipg.com
                        </p>

                        {/* Location Map */}
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Location</h3>
                            <div className="w-full h-64 rounded-lg overflow-hidden shadow">
                                <iframe
                                    title="PG Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.623234993791!2d77.5225253!3d28.5674325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4e5b8f5a2b3%3A0x1234567890abcdef!2sΗ%20ΝΟ%20Η-037%2C%20BLOCK-H%2C%20NEAR%20ALPHA%202%20MARKET!5e0!3m2!1sen!2sin!4v1695568290123!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    className="border-0"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-6 mt-auto">
                © {new Date().getFullYear()} Arpit Web. All rights reserved.
            </footer>
        </div>
    );
}
