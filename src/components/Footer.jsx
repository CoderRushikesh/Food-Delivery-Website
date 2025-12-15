import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">Rushikesh Kamble</h2>
          <p className="text-sm">Full Stack Developer</p>
        </div>

        {/* Middle Section */}
        <div className="text-center">
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:rushikamble462@example.com"
              className="text-green-400 hover:underline"
            >
              rushikesh@example.com
            </a>
          </p>
          <p className="text-sm">Phone : 7709200299 </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
