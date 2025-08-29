import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import icon1 from "../assets/icons/Asset 9-rxbb.png"
import icon2 from "../assets/icons/Asset 22-rxbb.png"
import icon3 from "../assets/icons/Asset 4-rxbb.png"

export default function StayConnected() {
  return (
    <section className="p-8 m-0 relative flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Text Section */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">
          Keep in touch for latest announcements!
        </h2><img src={icon2} alt="icon" className="h-6 md:h-8 w-auto" />
        <p className="text-gray-500 text-base md:text-lg">
          Let's get connected so that we can reach out to each other via socials. <br />
          Stack out <span className="font-semibold text-gray-900">@GDGDurgapur</span> for updates and news.
        </p>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex items-center gap-4 mb-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <a href="https://www.facebook.com/GDGDurgapur/" className="bg-blue-500 text-white p-3 rounded-full hover:scale-110 transition-transform">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/gdg.durgapur/" className="bg-purple-500 text-white p-3 rounded-full hover:scale-110 transition-transform">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/gdgdurgapur/" className="bg-blue-800 text-white p-3 rounded-full hover:scale-110 transition-transform">
          <FaLinkedinIn />
        </a>
      </motion.div>

      {/* GDG Logo */}
      <motion.div
        className="absolute bottom-4 right-4 flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
        <span className="text-gray-700 text-sm">Google Developer Groups</span>
      </motion.div>
    </section>
  );
}
