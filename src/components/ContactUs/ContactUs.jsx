import React from "react";
import img from "../../assets/Home/truck2.jpg";

const ContactUs = () => {
  return (
    <section className="bg-black py-10 sm:py-16" id="contact">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Form Section */}
        <div>
          <h3 className="text-sm text-red-500 font-semibold uppercase mb-1">
            Contact
          </h3>
          <h2 className="text-3xl font-bold text-white mb-6">
            Get in touch
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name here"
                className="border border-gray-600 p-3 rounded w-full bg-transparent text-white placeholder-gray-400"
                required
              />
              <input
                type="email"
                placeholder="Your email here"
                className="border border-gray-600 p-3 rounded w-full bg-transparent text-white placeholder-gray-400"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your subject here"
                className="border border-gray-600 p-3 rounded w-full bg-transparent text-white placeholder-gray-400"
                required
              />
              <input
                type="tel"
                placeholder="Your phone here"
                className="border border-gray-600 p-3 rounded w-full bg-transparent text-white placeholder-gray-400"
              />
            </div>
            <textarea
              placeholder="Tell us a few words"
              className="border border-gray-600 p-3 rounded w-full h-28 resize-none bg-transparent text-white placeholder-gray-400"
              required
            ></textarea>
            <input
              type="text"
              placeholder="Type the below word"
              className="border border-gray-600 p-3 rounded w-full bg-transparent text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded shadow"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right Contact Info Section */}
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>

          <div className="relative z-10 text-white p-8">
            <h3 className="text-2xl font-semibold mb-2">Contact Details</h3>
            <p className="mb-6">Need any consultations? Contact with us</p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Email Address</h4>
                <a
                  href="mailto:logistiqxpress.inc@gmail.com"
                  className="text-sm hover:underline"
                >
                  logistiqxpress.inc@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold">Phone Number</h4>
                <a
                  href="tel:+18887555706"
                  className="text-sm hover:underline"
                >
                  +1 888-755-5706
                </a>
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=8500-84+Street+SE,+Calgary,+AB,+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  8500-84 Street SE, Calgary, AB, Canada
                </a>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61579332661327"
                  className="text-white hover:text-gray-300"
                >
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
  );
};

export default ContactUs;
