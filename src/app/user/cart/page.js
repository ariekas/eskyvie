import Navbar from "../components/Elements/Navbar";
import Footer from "../components/Elements/Footer";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <div className="container">
        <Navbar name="Cart" />
        <section className="bg-white antialiased">
          <div className="mx-auto">
            <div className="mt-5 md:gap-6 lg:flex lg:items-start xl:gap-8 mb-2">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-4">
                  {/* card */}
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <Link href="#" className="shrink-0 md:order-1 flex justify-center">
                        <Image
                          className="h-32 w-20"
                          src="/image/produk.png"
                          alt="imac image"
                          width={80}
                          height={128}
                        />
                      </Link>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                            value="1"
                            readOnly
                          />
                          <button
                            type="button"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900">$699</p>
                        </div>
                      </div>
                      <div className="w-full min-w-0 flex-1 md:order-2 md:max-w-md">
                        <p className="text-base text-gray-900 font-medium">
                          Tablet APPLE iPad Pro 12.9" 6th Gen, 128GB, Wi-Fi, Gold
                        </p>
                        <p className="text-base text-black opacity-50">
                          1 Box Savva Teh Tarik Caramel Flavour (20g x 15 sachets)
                        </p>
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-red-600 hover:underline mt-5"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  <div className="flex justify-center items-center border py-2 rounded-lg border-t-transparent">
                    <Link href="" className="text-[#AFA0D7] font-bold text-lg underline">
                      EMPTY CART
                    </Link>
                  </div>
                </div>
              </div>
              {/* detail order */}
              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">
                        Do you have a voucher or gift card?
                      </label>
                      <input
                        type="text"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-lg bg-[#AFA0D7] px-5 py-2.5 text-md text-white font-semibold focus:outline-none focus:ring-4"
                    >
                      Apply Code
                    </button>
                  </form>
                </div>
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                  <p className="text-xl font-semibold text-gray-900">Order summary</p>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-base font-bold text-gray-900">Total</dt>
                    <dd className="text-base font-bold text-gray-900">$8,191.00</dd>
                  </dl>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-[#AFA0D7] py-2.5 text-md font-semibold text-white focus:outline-none focus:ring-4"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;