import Image from "next/image";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { RiAlignLeft } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { TbCircleLetterEFilled } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import Navbar from "../components/Elements/Navbar";
import Button from "../components/Elements/Buttons";

const Order = () => {
  return (
    <>
      <Navbar name="Order" />

      <div className="m-3">
        {/** Order Card */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl m-2">
          <div className="border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 flex justify-between">
            <div className="date flex">
              <p className="text-[#939393]">Estimated Delivery:</p>
              <p>22-08-2024</p>
            </div>
            <div className="status">
              <p className="font-bold text-[#AFA0D7] text-lg">Order in Delivery</p>
            </div>
          </div>
          <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="flex justify-center col-span-4 md:col-span-3">
              <Image
                src="/image/Rectangle 48.png"
                alt="Product Image"
                width={150}
                height={150}
                className="max-w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center col-span-4 md:col-span-6">
              <h1 className="font-bold">Exclusive Savva Gift Box | Merchandize</h1>
              <p>X1</p>
              <div className="price flex mt-5">
                <p className="font-bold text-[#AFA0D7] mr-2">$36.00 USD</p>
                <p className="line-through">$40.00 USD</p>
              </div>
            </div>
            <div className="flex flex-col justify-center col-span-4 md:col-span-3 gap-2">
              <button className="py-3 w-full text-sm font-medium rounded-lg border border-transparent bg-[#AFA0D7] text-white hover:bg-blue-700">
                Mark
              </button>
              <button className="py-3 w-full text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600">
                Buy More
              </button>
              <button className="py-3 w-full text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600">
                Contact Seller
              </button>
            </div>
          </div>
          <div className="border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 flex justify-end">
            <p>Total orders :</p>
            <p className="text-[#AFA0D7] text-lg font-bold ml-2">24.000</p>
          </div>
        </div>

        {/** Second Order Card */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl m-2">
          <div className="border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 flex justify-between">
            <div className="date flex">
              <p className="text-[#939393]">Estimated Delivery:</p>
              <p>22-08-2024</p>
            </div>
            <div className="status">
              <p className="font-bold text-[#AFA0D7] text-lg">Finished</p>
            </div>
          </div>
          <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="flex justify-center col-span-4 md:col-span-3">
              <Image
                src="/image/Rectangle 48.png"
                alt="Product Image"
                width={150}
                height={150}
                className="max-w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center col-span-4 md:col-span-6">
              <h1 className="font-bold">Exclusive Savva Gift Box | Merchandize</h1>
              <p>X1</p>
              <div className="price flex mt-5">
                <p className="font-bold text-[#AFA0D7] mr-2">$36.00 USD</p>
                <p className="line-through">$40.00 USD</p>
              </div>
            </div>
            <div className="flex flex-col justify-center col-span-4 md:col-span-3 gap-2">
              <button className="py-3 w-full text-sm font-medium rounded-lg border border-transparent bg-[#AFA0D7] text-white hover:bg-blue-700">
                Mark
              </button>
              <button className="py-3 w-full text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600">
                Buy More
              </button>
              <button className="py-3 w-full text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600">
                Contact Seller
              </button>
            </div>
          </div>
          <div className="border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 flex justify-end">
            <p>Total orders :</p>
            <p className="text-[#AFA0D7] text-lg font-bold ml-2">24.000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
