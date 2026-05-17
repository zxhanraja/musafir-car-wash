import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-brand-white pt-24 pb-8 border-t border-brand-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Left */}
          <div className="flex flex-col">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-3xl font-black tracking-tighter text-brand-red leading-none uppercase">
                Musafir
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase mt-1 text-brand-black">
                Car Wash
              </span>
            </Link>
            <p className="text-brand-black/70 text-lg mb-8 font-medium">
              Clean car. Better journey.
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.instagram.com/musafir.brat" 
                target="_blank"
                rel="noreferrer"
                className="text-brand-black hover:text-brand-red transition-colors font-bold uppercase tracking-widest text-sm"
              >
                Instagram
              </a>
              <a 
                href="tel:+13318067766" 
                className="text-brand-black hover:text-brand-red transition-colors font-bold uppercase tracking-widest text-sm"
              >
                Call / Text
              </a>
            </div>
          </div>

          {/* Center */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-black mb-6">Quick Links</h4>
            <div className="flex flex-col space-y-4">
              {["Home", "Services", "About", "Pricing", "Gallery", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-brand-black/70 hover:text-brand-red transition-colors font-medium text-lg w-fit"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-black mb-6">Contact</h4>
            <div className="flex flex-col space-y-4 text-brand-black/70 text-lg font-medium">
              <p className="hover:text-brand-red transition-colors">
                <a href="tel:+13318067766">+1 (331) 806-7766</a>
              </p>
              <p className="hover:text-brand-red transition-colors">
                <a href="https://www.instagram.com/musafir.brat" target="_blank" rel="noreferrer">
                  @musafir.brat
                </a>
              </p>
              <p className="leading-relaxed">
                New York / NJ / Long Island<br/>
                <span className="text-xs font-black uppercase tracking-wider text-brand-red bg-brand-red/5 px-2 py-0.5 rounded-sm border border-brand-red/10 inline-block mt-1">
                  We Come To You 📍
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-brand-black/50 font-medium">
            &copy; 2026 Musafir Car Wash. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-brand-black/50 font-medium">
            <Link href="#" className="hover:text-brand-red transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-red transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
