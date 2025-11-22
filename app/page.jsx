'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import weddingLottie from '../Assets/spring.json';
import AudioPlayer from '../Component/audioPlayer';
import cornerFlower from '../Assets/drum.json';

import c1 from '../Assets/c1.jpeg';
import c2 from '../Assets/c2.jpeg';
import c3 from '../Assets/c3.jpeg';

export default function Home() {
  const images = [c2, c1];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 20000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 py-8">
      <AudioPlayer />

      {/* Background Lottie */}
      <div className="absolute inset-0 -z-10">
        <Lottie
          animationData={weddingLottie}
          loop={true}
          autoplay={true}
          speed={0.4}
          style={{ width: '100%', height: '100%' }}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
      </div>
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10" />

      {/* Title - Mobile pe bada aur readable */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-rose-800 text-center z-10 mb-8 px-4 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
      >
        شادی کا دعوت نامہ
      </motion.h1>

      {/* Main Card - Mobile pe full width aur perfect fit */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ rotateY: 65, scale: 0.9, opacity: 0 }}
            animate={{ rotateY: 0, scale: 1, opacity: 1 }}
            exit={{ rotateY: -65, scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="relative"
          >
            {/* Golden Glow */}
            <motion.div
              animate={{ boxShadow: ["0 0 30px rgba(244,63,94,0.3)", "0 0 70px rgba(244,63,94,0.6)", "0 0 30px rgba(244,63,94,0.3)"] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-r from-rose-400 to-pink-400 blur-3xl opacity-60"
            />

            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border-4 border-white/70">
              <Image
                width={900}
                height={1350}
                src={images[currentIndex]}
                alt="Shaadi Card"
                className="w-full h-auto object-contain"
                quality={100}
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile-friendly Arrows - side mein adjust */}
        <button
          onClick={prev}
          className="absolute left-2 sm:-left-20 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-md shadow-xl p-3 sm:p-4 rounded-full z-30 hover:scale-110 transition-all"
        >
          <ChevronLeft className="w-2 h-2 sm:w-8 sm:h-8 text-rose-700" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:-right-20 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-md shadow-xl p-3 sm:p-4 rounded-full z-30 hover:scale-110 transition-all"
        >
          <ChevronRight className="w-2 h-2 sm:w-8 sm:h-8 text-rose-700" />
        </button>
      </div>

      {/* Dots - Mobile pe bhi clear */}
      <div className="flex gap-3 sm:gap-4 mt-10 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all ${i === currentIndex
              ? 'w-10 sm:w-12 h-3 bg-rose-600 rounded-full shadow-lg'
              : 'w-3 h-3 bg-white/80 rounded-full hover:bg-white/90'
              }`}
          />
        ))}
      </div>

      {/* Footer Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
        absolute bottom-6 sm:bottom-8 lg:bottom-10 
        left-1/2 -translate-x-1/2 
        w-full max-w-md px-6 
        text-center 
        text-rose-700 font-medium tracking-wider 
        text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl 
        leading-relaxed 
        z-30
      "
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        اس خاص دن کو اور خاص بنانے کیلئے آپکا آنا بہت ضروری ہے۔
      </motion.p>

      {/* Corner Lottie - Mobile pe size perfect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="fixed bottom-0 right-0 z-40 pointer-events-none"
      >
        <Lottie
          animationData={cornerFlower}
          loop={true}
          autoplay={true}
          style={{ width: '280px', height: '280px' }}  // mobile ke liye perfect
          speed={0.5}
          className='hidden'
        />
      </motion.div>
    </div>
  );
}