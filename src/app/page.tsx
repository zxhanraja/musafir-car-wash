"use client";



import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Star, Sparkles, Handshake, Clock, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import Preloader from "@/components/Preloader";

export default function Home() {


  return (
    <div className="flex flex-col w-full selection:bg-brand-red selection:text-brand-white">
      <Preloader />

      {/* 2. HERO SECTION */}
      <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden bg-brand-black">


        {/* Full Background Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full z-0 overflow-hidden"
        >
          <Image
            src="/images/herocar.png"
            alt="Luxury Car Detailing"
            fill
            className="object-cover object-[70%_center]"
            unoptimized
            priority
          />
          
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />

          {/* Standard luxury gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40"></div>
          

        </motion.div>

        {/* Huge Faint Accent Text */}
        <div className="hidden xl:block absolute right-8 top-0 bottom-0 z-0 pointer-events-none select-none">
          <div className="h-full flex items-center justify-center">
            <span 
              className="text-brand-white/[0.03] font-black text-[150px] leading-none uppercase tracking-widest"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              PREMIUM
            </span>
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 w-full px-6 lg:px-24 pt-64 md:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[60%] flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-brand-red"></div>
              <span className="text-brand-white/50 font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">
                Luxury Auto Care
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-6xl md:text-[80px] lg:text-[95px] font-black uppercase leading-[0.9] tracking-tight text-brand-white mb-8">
              CLEANER<span className="text-brand-red text-[0.8em]">.</span><br />
              SHINIER<span className="text-brand-red text-[0.8em]">.</span><br />
              <span className="hidden sm:inline">BETTER<span className="text-brand-red text-[0.8em]">.</span></span>
            </h1>
            
            <p className="text-sm md:text-lg text-brand-white/60 font-medium max-w-[420px] mb-10 leading-relaxed">
              Experience true showroom shine with advanced detailing technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#booking"
                className="w-full sm:w-auto px-8 py-4 bg-brand-white text-brand-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-red hover:text-brand-white transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Book Your Wash
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 border border-brand-white/10 text-brand-white/70 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/5 hover:text-brand-white transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="w-full py-32 px-6 md:px-12 max-w-[1440px] mx-auto bg-brand-white">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-brand-red text-brand-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Our Services
            </span>
            <h2 className="text-5xl md:text-[64px] font-black uppercase leading-[0.95] tracking-tighter text-brand-black max-w-2xl">
              Premium Care
              <br />
              For Your Car.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Basic Wash",
              price: "$49",
              features: ["Exterior foam wash", "Tire cleaning", "Quick dry"],
            },
            {
              title: "Premium Wash",
              price: "$99",
              features: ["Interior + exterior", "Vacuum cleaning", "Dashboard polish"],
            },
            {
              title: "Interior Detailing",
              price: "$149",
              features: ["Deep seat cleaning", "Odor removal", "Leather conditioning"],
            },
            {
              title: "Ceramic Coating",
              price: "$499",
              features: ["Paint protection", "High gloss finish", "Water resistance"],
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-brand-white border border-brand-border p-10 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-brand-black mb-6">
                {service.title}
              </h3>
              <ul className="space-y-4 mb-12">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-brand-black/70 font-medium">
                    <Check size={18} className="text-brand-red mr-3 shrink-0" strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-black/50 mb-1">Starting from</p>
                <p className="text-3xl font-black text-brand-black tracking-tighter">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. OUR WORKS SECTION (VIDEOS) */}
      <section id="works" className="w-full py-32 bg-brand-black text-brand-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-[100px] font-black uppercase leading-none tracking-tighter mb-4">
                OUR <span className="text-brand-red italic font-light">WORK</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-10 max-w-3xl mx-auto relative px-4">
            {[
              { src: "/images/videos/video1.webm", title: "Showroom Shine" },
              { src: "/images/videos/video2.webm", title: "Ceramic Finish" }
            ].map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotate: i === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: i === 0 ? -1 : 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="relative aspect-[9/16] bg-brand-white/5 border border-white/10 overflow-hidden group rounded-[2rem] md:rounded-[3rem] shadow-2xl hover:scale-[1.02] transition-all duration-500"
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                >
                  <source src={video.src} type="video/webm" />
                </video>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-red mb-2">Musafir</p>
                  <h3 className="text-base md:text-xl font-black uppercase tracking-tight text-brand-white leading-none">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section id="about" className="w-full py-32 bg-brand-light overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] lg:h-[600px] bg-brand-black"
            >
              <Image
                src="/images/about-storefront.png"
                alt="Musafir Garage Storefront"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:w-1/2"
            >
              <span className="inline-block px-3 py-1 bg-brand-red text-brand-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
                About Musafir
              </span>
              <h2 className="text-5xl md:text-[64px] font-black uppercase leading-[0.95] tracking-tighter text-brand-black mb-8">
                Driven by Passion.
                <br />
                Defined by Quality.
              </h2>
              <p className="text-xl text-brand-black/70 font-medium leading-relaxed mb-12">
                Musafir Car Wash combines modern equipment, skilled detailing experts, and premium products to deliver exceptional results.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: "Premium Quality", Icon: Sparkles },
                  { title: "Expert Team", Icon: Handshake },
                  { title: "On-Time Service", Icon: Clock },
                  { title: "Eco Friendly", Icon: Leaf },
                ].map((feature) => (
                  <div key={feature.title} className="flex items-center gap-4 border-l-2 border-brand-red pl-4">
                    <feature.Icon size={20} className="text-brand-red shrink-0" strokeWidth={1.5} />
                    <span className="font-bold uppercase tracking-wider text-sm text-brand-black">{feature.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="w-full py-40 bg-brand-black text-brand-white px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-black uppercase leading-[0.9] tracking-tighter mb-24 max-w-4xl mx-auto">
            Why Drivers
            <br />
            Choose Musafir.
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-[1440px] mx-auto border-t border-brand-white/10 pt-20">
          {[
            { stat: "10K+", label: "Cars Washed" },
            { stat: "4.9", label: "Rating" },
            { stat: "7", label: "Years Experience" },
            { stat: "100%", label: "Satisfaction" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-red tracking-tighter mb-4">{item.stat}</span>
              <span className="text-xs md:text-base font-bold uppercase tracking-widest text-brand-white/70">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. GALLERY SECTION */}
      <section id="gallery" className="w-full py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-5xl md:text-[64px] font-black uppercase leading-[0.95] tracking-tighter text-brand-black">
            The Gallery.
          </h2>
          <a href="#" className="hidden md:inline-block border-b-2 border-brand-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-brand-red hover:border-brand-red transition-all">
            View All Work
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          {[
            { src: "/images/foam-wash.png", span: "md:col-span-2 md:row-span-2 col-span-1 row-span-1 h-[300px] md:h-full" },
            { src: "/images/foam-wash.png", span: "col-span-1 h-[300px] md:h-full" },
            { src: "/images/foam-wash.png", span: "col-span-1 h-[300px] md:h-full" },
            { src: "/images/herocar.png", span: "md:col-span-3 md:row-span-2 col-span-1 row-span-1 h-[300px] md:h-full" },
          ].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={cn("relative overflow-hidden bg-brand-light group cursor-pointer", img.span)}
            >
              <Image
                src={img.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIAL SECTION */}
      <section className="w-full py-40 bg-brand-white border-y border-brand-border px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[400px] text-brand-light leading-none font-black select-none z-0">
          "
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-1 mb-12">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-brand-red text-brand-red" />
              ))}
            </div>
            <h3 className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-tighter text-brand-black mb-12">
              "Best detailing experience in the city. The attention to detail is unmatched."
            </h3>
            <p className="text-xl font-bold uppercase tracking-widest text-brand-red">
              &mdash; Ahmed Raza
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8. BOOKING CTA SECTION */}
      <section id="booking" className="w-full py-40 bg-brand-red px-6 md:px-12 text-center text-brand-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-black uppercase leading-[0.9] tracking-tighter mb-8">
            Book Your Appointment Today.
          </h2>
          <p className="text-2xl font-medium tracking-wide text-brand-white/80 mb-16">
            Fast. Reliable. Premium car care.
          </p>
          <a
            href="#"
            className="group relative px-12 py-6 bg-brand-white text-brand-black font-black uppercase tracking-[0.2em] text-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-4 transition-transform group-hover:-translate-y-[150%]">
              Book Now &rarr;
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center gap-4 translate-y-[150%] transition-transform group-hover:translate-y-0">
              Book Now &rarr;
            </span>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
