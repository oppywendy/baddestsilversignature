import davido from "../assets/davido.jpg";
import burnaboy from "../assets/bss_burnaboy.jpg";
import skiibii from "../assets/bss_skiibii.jpg";
import buju from "../assets/bss_bnxn.jpg";
import dbanj from "../assets/dbanj.jpg";
import djobi from "../assets/dj obi.jpg";
import dotun from "../assets/dotun.jpg";
import kalu from "../assets/kalu.jpg";
import asisat from "../assets/asisat.jpg";
import e4ma from "../assets/e4ma.jpg";
import liquorose from "../assets/liquorose.jpg";
import ceo from "../assets/bss ceo of lagos.jpg";
import oppy from "../assets/oppy.jpg";
import kiki from "../assets/kiki.jpg";
import dammy from "../assets/dammy.jpg";
import zeus from "../assets/zeus.jpg";
import yakiss from "../assets/yakiss.jpg";
import gent from "../assets/gent.jpg";
import seunwheel from "../assets/bss_seunwheels.jpg";
import agbo from "../assets/agbo.jpg";
import color from "../assets/bss colors.jpg";
import color2 from "../assets/bss_color.jpg";
import sketch from "../assets/bss_sketch.jpg";
import lining from "../assets/bss_lining.jpg";
import customer from "../assets/bss customer 2.jpg";
import p4 from "../assets/home Service.jpg";
import lawi from "../assets/lawi.jpg";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import seven from "../assets/7.jpg";
import eight from "../assets/8.jpg";
import nine from "../assets/9.jpg";
import ten from "../assets/10.jpg";
import eleven from "../assets/11.jpg";
import twelve from "../assets/12.jpg";
import thirteen from "../assets/13.jpg";
import fourteen from "../assets/14.jpg";
import fifteen from "../assets/15.jpg";
import sixteen from "../assets/16.jpg";
import seventeen from "../assets/17.jpg";
import eighteen from "../assets/18.jpg";
import ninteen from "../assets/19.jpg";
import twenty from "../assets/20.jpg";
import two1 from "../assets/21.jpg";
import two2 from "../assets/22.jpg";
import two3 from "../assets/23.jpg";
import two4 from "../assets/24.jpg";
import two5 from "../assets/25.jpg";
import two6 from "../assets/26.jpg";
import two7 from "../assets/27.jpg";
import two8 from "../assets/28.jpg";
import two9 from "../assets/29.jpg";
import thirty from "../assets/30.jpg";
import three1 from "../assets/31.jpg";
import three2 from "../assets/32.jpg";
import three3 from "../assets/33.jpg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const photos = [
  { id: 1, image: davido },
  { id: 2, image: burnaboy },
  { id: 3, image: skiibii },
  { id: 4, image: buju },
  { id: 5, image: dbanj },
  { id: 6, image: djobi },
  { id: 7, image: dotun },
  { id: 8, image: kalu },
  { id: 9, image: asisat },
  { id: 10, image: e4ma },
  { id: 11, image: liquorose },
  { id: 12, image: ceo },
  { id: 13, image: oppy },
  { id: 14, image: kiki },
  { id: 15, image: dammy },
  { id: 16, image: zeus },
  { id: 17, image: yakiss },
  { id: 18, image: gent },
  { id: 19, image: seunwheel },
  { id: 20, image: agbo },
  { id: 21, image: color },
  { id: 22, image: color2 },
  { id: 23, image: sketch },
  { id: 24, image: lining },
  { id: 25, image: customer },
  { id: 26, image: p4 },
  { id: 27, image: lawi },
  { id: 28, image: one },
  { id: 29, image: two },
  { id: 30, image: three },
  { id: 31, image: four },
  { id: 32, image: five },
  { id: 33, image: six },
  { id: 34, image: seven },
  { id: 35, image: eight },
  { id: 36, image: nine },
  { id: 37, image: ten },
  { id: 38, image: eleven },
  { id: 39, image: twelve },
  { id: 40, image: thirteen },
  { id: 41, image: fourteen },
  { id: 42, image: fifteen },
  { id: 43, image: sixteen },
  { id: 44, image: seventeen },
  { id: 45, image: eighteen },
  { id: 46, image: ninteen },
  { id: 47, image: twenty },
  { id: 48, image: two1 },
  { id: 49, image: two2 },
  { id: 50, image: two3 },
  { id: 51, image: two4 },
  { id: 52, image: two5 },
  { id: 53, image: two6 },
  { id: 54, image: two7 },
  { id: 55, image: two8 },
  { id: 56, image: two9 },
  { id: 57, image: thirty },
  { id: 58, image: three1 },
  { id: 59, image: three2 },
  { id: 60, image: three3 },
];

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "ArrowRight") {
        setSelectedImage((prev) => (prev! + 1) % photos.length);
      }

      if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => (prev! - 1 + photos.length) % photos.length);
      }

      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage]);

  return (
    <div className="font-poppins pb-16 md:pb-20">
      <h1 className="text-center md:text-4xl text-2xl md:pt-36 pt-20 pb-5 md:pb-10 font-semibold text-black">
        OUR GALLERY
      </h1>

      <div className="w-full justify-center items-center flex">
        <div className="md:w-[98%] w-full h-[96%]">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-3 gap-1 items-center justify-center">
            {photos.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={item.image}
                  loading="lazy"
                  alt="Gallery picture"
                  onClick={() => setSelectedImage(index)} // FIXED HERE
                  className="w-full h-[160px] md:h-[300px] lg:h-[400px] object-cover shadow-lg cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage !== null && photos[selectedImage] && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-[-50px] right-0 bg-white/30 hover:bg-white/50 text-white px-4 py-2 rounded-full"
              >
                Close
              </button>

              {/* PREVIOUS BUTTON */}
              <button
                onClick={() =>
                  setSelectedImage(
                    (prev) => (prev! - 1 + photos.length) % photos.length,
                  )
                }
                className="absolute lg:left-[-50px] left-2 bg-white/20 hover:bg-white/40 text-white px-3 py-2 rounded-full"
              >
                ‹
              </button>

              {/* IMAGE */}
              <motion.img
                src={photos[selectedImage].image} // FIXED
                className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.25 }}
              />

              {/* NEXT BUTTON */}
              <button
                onClick={() =>
                  setSelectedImage((prev) => (prev! + 1) % photos.length)
                }
                className="absolute lg:right-[-50px] right-2 bg-white/20 hover:bg-white/40 text-white px-3 py-2 rounded-full"
              >
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photos;
