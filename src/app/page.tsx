"use client";



import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Star, Award, Handshake, Clock, Leaf } from "lucide-react";
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
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Engine Detailing",
              subtitle: "Under-Hood Grime Removal & Seal",
              price: "$60",
              subPriceText: "Starting from",
              duration: "1 Hour",
              features: [
                "Deep engine bay degreasing",
                "Removal of road grime & dust",
                "Safe detailing of components",
                "Trim & hose dressing & seal",
                "Restores factory under-hood look",
                "Prevents rubber/plastic drying",
              ],
              popular: false,
            },
            {
              title: "Premium Wash",
              subtitle: "Comprehensive Inside & Out Care",
              price: "$120",
              subPriceText: "Sedan / Starting from",
              duration: "2 Hours",
              features: [
                "Thorough outside & inside wash",
                "Complete cabin & trunk vacuum",
                "Plastic dressing & conditioning",
                "Glass polished inside & out",
                "Full wheel & tire detail",
                "Car body degreasing & decontamination",
                "Premium high-gloss tire shine ✨",
              ],
              popular: false,
            },
            {
              title: "Sedan Detailing",
              subtitle: "Deep Rejuvenation & Paint Protect",
              price: "$300 - $400",
              subPriceText: "Depending on condition",
              duration: "Full Restoration",
              features: [
                "Max rate capped at $400",
                "Deep seat shampooing & sanitization",
                "Complete leather conditioning",
                "Exterior decontamination & clay bar",
                "Single-stage machine polish for high gloss",
                "Long-lasting protective paint sealant",
              ],
              popular: true,
            },
            {
              title: "SUV & Minivan Detailing",
              subtitle: "Heavy-Duty Full Detail & Sealant",
              price: "$400 - $450",
              subPriceText: "Depending on condition",
              duration: "Full Restoration",
              features: [
                "Perfect for large cabin sizes",
                "Upholstery shampoo & hot water extraction",
                "Engine bay cleaning & dressing",
                "Multi-stage machine paint polish",
                "Ultra-hydrophobic ceramic spray sealant",
                "Wheel arches detailed & protected",
              ],
              popular: false,
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              style={{ willChange: "transform, opacity" }}
              className={cn(
                "group relative bg-brand-white border p-6 flex flex-col justify-between min-h-[580px] transition-[border-color,box-shadow] duration-300",
                service.popular ? "border-brand-red shadow-lg" : "border-brand-border"
              )}
            >
              {service.popular && (
                <span className="absolute top-4 right-4 bg-brand-red text-brand-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-sm">
                  Most Popular
                </span>
              )}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              
              <div>
                {service.duration && (
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-brand-red">
                    <Clock size={14} strokeWidth={2.5} />
                    <span>{service.duration}</span>
                  </div>
                )}
                
                <h3 className="text-2xl font-black uppercase tracking-tight text-brand-black mb-1">
                  {service.title}
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-wider text-brand-black/40 mb-8">
                  {service.subtitle}
                </p>
                
                <ul className="space-y-4 mb-12">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-brand-black/70 text-sm font-medium leading-tight">
                      <Check size={16} className="text-brand-red mr-3 mt-0.5 shrink-0" strokeWidth={3} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto pt-6 border-t border-brand-border/60">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-black/40 mb-1">
                  {service.subPriceText}
                </p>
                <p className="text-3xl font-black text-brand-black tracking-tighter">
                  {service.price}
                </p>
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
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
                className="relative aspect-[9/16] bg-brand-white/5 border border-white/10 overflow-hidden group rounded-[2rem] md:rounded-[3rem] shadow-2xl"
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              style={{ willChange: "transform, opacity" }}
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
                  { title: "Premium Quality", Icon: Award },
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
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
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
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              style={{ willChange: "transform, opacity" }}
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
      <section className="w-full py-32 bg-brand-white border-y border-brand-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
          >
            <h2 className="text-5xl md:text-[64px] font-black uppercase leading-[0.95] tracking-tighter text-brand-black">
              Trusted by <span className="text-brand-red italic font-light">Thousands</span>
            </h2>
            
            <div className="flex flex-col items-center justify-center gap-1 mt-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-brand-black">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-black/40 border-l border-brand-border/60 pl-3">
                  150+ Google Reviews
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Infinite Loop Marquee Row */}
        <div className="w-full relative flex overflow-x-hidden select-none py-6">
          {/* Faint luxury vignettes for soft edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-white to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee-horizontal flex gap-6">
            {/* Render 2 times for seamless looping */}
            {[...Array(2)].map((_, loopIdx) => (
              <div key={loopIdx} className="flex gap-6">
                {[
                  {
                    name: "Rajesh Gupta",
                    initials: "RG",
                    date: "3 months ago",
                    rating: 5,
                    text: "Absolutely perfect auto wash! The exterior body degreasing and tire shine made my car look brand new again.",
                    tag: "Premium Wash",
                  },
                  {
                    name: "David Miller",
                    initials: "DM",
                    date: "2 weeks ago",
                    rating: 5,
                    text: "Super convenient mobile service in NY. They came directly to my driveway in Long Island and detailed my SUV.",
                    tag: "SUV Detailing",
                  },
                  {
                    name: "Imran Khan",
                    initials: "IK",
                    date: "1 month ago",
                    rating: 5,
                    text: "Highly professional engine detailing. They cleaned all the tough grime and black dust from the bay. Stellar work!",
                    tag: "Engine Wash",
                  },
                  {
                    name: "Sanjay Verma",
                    initials: "SV",
                    date: "4 days ago",
                    rating: 5,
                    text: "Detailing was top notch! The paint correction removed almost all swirl marks. Capped at $400 is a steal.",
                    tag: "Sedan Detailing",
                  },
                  {
                    name: "Sarah Connor",
                    initials: "SC",
                    date: "3 weeks ago",
                    rating: 5,
                    text: "Amazing work! Inside vacuuming and plastic glass detailing was flawless. Musafir is now my go-to car wash.",
                    tag: "Premium Wash",
                  },
                  {
                    name: "Yasmin Al-Fayed",
                    initials: "YA",
                    date: "2 months ago",
                    rating: 5,
                    text: "Fantastic experience! The hot water extraction completely removed some deep cabin stains. 10/10 service!",
                    tag: "Minivan Detailing",
                  },
                  {
                    name: "John Miller",
                    initials: "JM",
                    date: "1 week ago",
                    rating: 5,
                    text: "Amazing mobile service. They came right to my office in Long Island. Best experience I've had in NY.",
                    tag: "Premium Wash",
                  },
                  {
                    name: "Zainab Siddiqui",
                    initials: "ZS",
                    date: "5 days ago",
                    rating: 5,
                    text: "Best mobile detailing in NYC. They arrived right on time and made my car shine inside out in just two hours.",
                    tag: "Premium Wash",
                  },
                  {
                    name: "Michael Chang",
                    initials: "MC",
                    date: "3 months ago",
                    rating: 5,
                    text: "Excellent ceramic spray sealant coating on my SUV. Water just sheets right off now. Fantastic job.",
                    tag: "SUV Detailing",
                  },
                  {
                    name: "Fatima Al-Sudais",
                    initials: "FA",
                    date: "1 month ago",
                    rating: 5,
                    text: "First-class engine detailing wash! The oil and mud residues were completely cleaned. Highly recommend them.",
                    tag: "Engine Wash",
                  },
                  {
                    name: "Robert Peterson",
                    initials: "RP",
                    date: "2 months ago",
                    rating: 5,
                    text: "Highly recommended for luxury cars. They treated my sedan with extreme care and clay bar treatment was perfect.",
                    tag: "Sedan Detailing",
                  },
                  {
                    name: "Kabir Ali",
                    initials: "KA",
                    date: "2 weeks ago",
                    rating: 5,
                    text: "Excellent value for money. The tire shine and exterior body gloss are next level. Best mobile detailing in NY!",
                    tag: "Premium Wash",
                  },
                  {
                    name: "Emily Watson",
                    initials: "EW",
                    date: "6 days ago",
                    rating: 5,
                    text: "Amazing mobile service. They came right to my home in Queens. Best detailing I've had in NY.",
                    tag: "Sedan Detailing",
                  },
                  {
                    name: "Yousef Al-Masri",
                    initials: "YA",
                    date: "1 month ago",
                    rating: 5,
                    text: "Absolute professionals! Detailing quality is unmatched, and the best part is they come right to your door.",
                    tag: "Sedan Detailing",
                  },
                  {
                    name: "Meera Das",
                    initials: "MD",
                    date: "2 months ago",
                    rating: 5,
                    text: "The dashboard and plastic glass detailing were immaculate. They paid close attention to every tiny detail.",
                    tag: "Premium Wash",
                  },
                  {
                    name: "Christopher Evans",
                    initials: "CE",
                    date: "3 weeks ago",
                    rating: 5,
                    text: "Highly professional crew. They arrived on time, were super polite, and did a magnificent job under the hood.",
                    tag: "Engine Wash",
                  }
                ].map((review, rIdx) => (
                  <div
                    key={`${loopIdx}-${rIdx}`}
                    className="w-[260px] sm:w-[320px] md:w-[360px] shrink-0 bg-brand-white border border-brand-border p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-red/30"
                  >
                    <div>
                      {/* Top Header Row of Card */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {/* Circle Initials */}
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-light text-brand-black flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 border border-brand-border/60">
                            {review.initials}
                          </div>
                          {/* Name + Verified Check */}
                          <div className="flex flex-col text-left">
                            <span className="text-xs sm:text-sm font-bold text-brand-black flex items-center">
                              {review.name}
                              <span className="inline-flex items-center justify-center bg-[#1DA1F2] text-white rounded-full p-0.5 ml-1 sm:ml-1.5 shrink-0" style={{ width: '10px', height: '10px' }}>
                                <Check size={6} className="text-white" strokeWidth={5} />
                              </span>
                            </span>
                            <span className="text-[10px] font-bold text-brand-black/30 mt-0.5">
                              {review.date}
                            </span>
                          </div>
                        </div>

                        {/* Google Logo SVG */}
                        <div className="shrink-0">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                          </svg>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-0.5 mb-3 sm:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="fill-[#FBBC05] text-[#FBBC05] sm:w-3.5 sm:h-3.5" />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-[11px] sm:text-xs md:text-sm text-brand-black/75 font-medium leading-relaxed text-left line-clamp-4">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Bottom Category Info */}
                    <div className="flex items-center justify-between border-t border-brand-border/60 pt-3 sm:pt-4 mt-4 sm:mt-6">
                      <span className="text-[9px] font-black uppercase tracking-wider text-brand-red bg-brand-red/5 px-2.5 py-1 rounded-sm border border-brand-red/10">
                        {review.tag}
                      </span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand-black/30">
                        Verified Review
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOOKING CTA SECTION */}
      <section id="booking" className="w-full py-40 bg-brand-red px-6 md:px-12 text-center text-brand-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="text-[11px] font-black uppercase tracking-[0.4em] mb-4 text-brand-white/80">
            📍 Mobile Detailing Service &mdash; We Come To You
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-black uppercase leading-[0.9] tracking-tighter mb-4">
            NY / NJ / Long Island
          </h2>
          <p className="text-xl md:text-2xl font-bold tracking-widest text-brand-white/95 mb-10 uppercase">
            Book your service today by call or text.
          </p>
          <p className="text-3xl md:text-5xl font-black tracking-tight mb-16 hover:scale-105 transition-transform duration-300 select-all">
            <a href="tel:+13318067766" className="hover:underline flex items-center justify-center gap-4">
              +1 (331) 806-7766
            </a>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center w-full justify-center">
            <a
              href="tel:+13318067766"
              className="group relative px-12 py-6 bg-brand-white text-brand-black font-black uppercase tracking-[0.2em] text-lg overflow-hidden min-w-[280px] flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center gap-4 transition-transform group-hover:-translate-y-[150%]">
                Call / Text Now &rarr;
              </span>
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-4 translate-y-[150%] transition-transform group-hover:translate-y-0">
                +1 (331) 806-7766
              </span>
            </a>
            
            <a
              href="https://www.instagram.com/musafir.brat"
              target="_blank"
              rel="noreferrer"
              className="px-12 py-6 border-2 border-brand-white text-brand-white font-black uppercase tracking-[0.2em] text-lg hover:bg-brand-white hover:text-brand-black transition-all duration-300 min-w-[280px] flex items-center justify-center gap-3"
            >
              Instagram @musafir.brat
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
