import React from "react";
import img from "../../assets/Home/truck2.jpg";

const ContactUs = () => {
  return (
    <>
      <section className="bg-white py-10 sm:py-16" id="contact">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Form */}
          <div>
            <h3 className="text-sm text-red-600 font-semibold uppercase mb-1">
              Contact
            </h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in touch
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name here"
                  className="border border-gray-300 p-3 rounded w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email here"
                  className="border border-gray-300 p-3 rounded w-full"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your subject here"
                  className="border border-gray-300 p-3 rounded w-full"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your phone here"
                  className="border border-gray-300 p-3 rounded w-full"
                />
              </div>
              <textarea
                placeholder="Tell us a few words"
                className="border border-gray-300 p-3 rounded w-full h-28 resize-none"
                required
              ></textarea>
              <input
                type="text"
                placeholder="Type the below word"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <p className="italic text-sm">catch</p>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded shadow"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
              {/* Black overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 text-white p-8">
              <h3 className="text-2xl font-semibold mb-2">
                 contact detail
              </h3>
              <p className="mb-6">Need any consultations contact with us</p>

              <div className="space-y-4">
              
                <div>
                  <h4 className="font-semibold">Email Address</h4>
                  <p className="text-sm"> logistiqxpress.inc@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-sm">
                    11909 149 ave Se Calgary
                  </p>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
