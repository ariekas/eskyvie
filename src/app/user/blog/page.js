import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArchive, setSelectedArchive] = useState("");

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Eskayvie News
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Read news, stories, answers to questions, and facts about Eskayvie.
      </p>

      {/* Search and Archive Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search articles..."
          className="border border-gray-300 px-3 py-2 rounded-md w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border border-gray-300 px-3 py-2 rounded-md w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedArchive}
          onChange={(e) => setSelectedArchive(e.target.value)}
        >
          <option value="">Archives</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>

      {/* Grid Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Article 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
          <Image
            src="/image1.jpg"
            alt="Gastritis Medicine"
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Gastritis Medicine Gets Banned! What Will Happen?
            </h2>
            <p className="text-gray-500 text-xs mb-3">Admin Eskayvie - January 18, 2023</p>
            <p className="text-gray-600 text-sm mb-4">
              Wow, many people panicked when the popular gastritis medicine was banned! Don’t panic! Here is a solution.
            </p>
            <Link href="/article-1" className="inline-block bg-purple-500 text-white text-sm px-4 py-2 rounded-md hover:bg-purple-600 transition">
              Read More
            </Link>
          </div>
        </div>

        {/* Article 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
          <Image
            src="/image2.jpg"
            alt="High Blood Pressure"
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Don’t Do These 7 Things To Avoid High Blood Pressure!
            </h2>
            <p className="text-gray-500 text-xs mb-3">Admin Eskayvie - December 26, 2022</p>
            <p className="text-gray-600 text-sm mb-4">
              Have you ever experienced pain in the neck and headache continuously for no reason? If YES, blood pressure.
            </p>
            <Link href="/article-2" className="inline-block bg-purple-500 text-white text-sm px-4 py-2 rounded-md hover:bg-purple-600 transition">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
