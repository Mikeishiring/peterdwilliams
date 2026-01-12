import { useState } from 'react';

export default function PeterWilliamsWebsite() {
  const TacticalMapBg = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#6b8cae" strokeWidth="0.3" opacity="0.4"/>
        </pattern>
        <pattern id="topo" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M0 60 Q 30 40, 60 60 T 120 60" fill="none" stroke="#8b7355" strokeWidth="0.5" opacity="0.3"/>
          <path d="M0 80 Q 30 60, 60 80 T 120 80" fill="none" stroke="#8b7355" strokeWidth="0.5" opacity="0.3"/>
          <path d="M0 40 Q 30 20, 60 40 T 120 40" fill="none" stroke="#8b7355" strokeWidth="0.5" opacity="0.3"/>
          <circle cx="90" cy="50" r="20" fill="none" stroke="#8b7355" strokeWidth="0.3" opacity="0.2"/>
          <circle cx="90" cy="50" r="35" fill="none" stroke="#8b7355" strokeWidth="0.3" opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#e8e3d9"/>
      <rect width="100%" height="100%" fill="url(#topo)"/>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      <circle cx="320" cy="80" r="35" fill="none" stroke="#c41e3a" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.6"/>
      <circle cx="320" cy="80" r="20" fill="none" stroke="#c41e3a" strokeWidth="1" opacity="0.4"/>
      <path d="M 30 220 Q 100 180 180 200 T 380 170" fill="none" stroke="#2c2825" strokeWidth="1.5" opacity="0.3"/>
      <text x="300" y="85" fill="#c41e3a" fontSize="8" opacity="0.7">OBJ-A</text>
    </svg>
  );

  const TopoMapBg = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="topoFine" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M0 40 Q 20 25, 40 40 T 80 40" fill="none" stroke="#9b8b7b" strokeWidth="0.5"/>
          <path d="M0 55 Q 20 40, 40 55 T 80 55" fill="none" stroke="#9b8b7b" strokeWidth="0.4"/>
          <path d="M0 25 Q 20 10, 40 25 T 80 25" fill="none" stroke="#9b8b7b" strokeWidth="0.4"/>
          <g transform="translate(50, 60)" opacity="0.3">
            <line x1="0" y1="0" x2="-5" y2="10" stroke="#7b6b5b" strokeWidth="0.5"/>
            <line x1="3" y1="0" x2="-2" y2="10" stroke="#7b6b5b" strokeWidth="0.5"/>
            <line x1="6" y1="0" x2="1" y2="10" stroke="#7b6b5b" strokeWidth="0.5"/>
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#f0ebe3"/>
      <rect width="100%" height="100%" fill="url(#topoFine)"/>
      <path d="M 0 280 Q 100 240, 180 300 Q 250 340, 350 280 L 400 300 L 400 400 L 0 400 Z" fill="#d5e3ed" opacity="0.4"/>
      <path d="M 0 280 Q 100 240, 180 300 Q 250 340, 350 280 L 400 300" fill="none" stroke="#5a7a8a" strokeWidth="1"/>
      <text x="220" y="120" fill="#4a4a4a" fontSize="11" fontStyle="italic" opacity="0.5">NAGO-WAN</text>
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#2c2825]" style={{ fontFamily: 'Georgia, Times, serif' }}>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#f4f1eb]/90 backdrop-blur-md border-b border-[#d4cfc5]">
        <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href="#" className="font-medium text-[#2c2825]">Peter Williams</a>
          <div className="flex items-center gap-6 text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>
            <a href="#books" className="text-[#6b6560] hover:text-[#2c2825] transition-colors">Books</a>
            <a href="#media" className="text-[#6b6560] hover:text-[#2c2825] transition-colors">Media</a>
            <a href="#about" className="text-[#6b6560] hover:text-[#2c2825] transition-colors">About</a>
            <a href="mailto:askme@peterdwilliams.com" className="text-[#c41e3a] hover:text-[#a01830] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - More compact */}
      <header className="max-w-5xl mx-auto px-5 pt-10 pb-8">
        <h1 className="text-3xl md:text-4xl leading-tight mb-4">
          Hey, I'm Peter 👋
          <span className="text-[#6b6560]"> Welcome to my corner of military history.</span>
        </h1>
        <p className="text-base text-[#6b6560] max-w-2xl leading-relaxed">
          I'm an Australian <a href="#about" className="text-[#2c2825] underline decoration-[#c41e3a] decoration-2 underline-offset-2">military historian</a> specializing 
          in WWII's Pacific campaigns. Three decades of <a href="#media" className="text-[#2c2825] underline decoration-[#c41e3a] decoration-2 underline-offset-2">interviews with Japanese veterans</a> and 
          <a href="#books" className="text-[#2c2825] underline decoration-[#c41e3a] decoration-2 underline-offset-2"> books</a> that challenge conventional narratives.
        </p>
      </header>

      {/* Bento Grid - Tighter */}
      <main id="books" className="max-w-5xl mx-auto px-5 pb-16">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-3 auto-rows-[100px]">
          
          {/* Book 1 - Large */}
          <a 
            href="https://bookshop.org/p/books/japan-s-pacific-war-personal-accounts-of-the-emperor-s-warriors-peter-williams/16543015"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-6 md:col-span-8 row-span-3 group relative rounded-xl overflow-hidden border border-[#d4cfc5] hover:border-[#c41e3a]/40 transition-all duration-300 hover:shadow-lg"
          >
            <TopoMapBg />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c2825]/50 via-transparent to-transparent" />
            
            <div className="relative h-full p-5 flex flex-col justify-between">
              <span className="inline-block self-start px-2.5 py-1 bg-[#c41e3a] text-white text-xs rounded-full" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Books · 2021
              </span>
              <div>
                <h3 className="text-2xl font-medium text-[#2c2825] group-hover:text-[#c41e3a] transition-colors mb-1">
                  Japan's Pacific War
                </h3>
                <p className="text-[#5b5550] italic">Personal Accounts of the Emperor's Warriors</p>
                <p className="text-xs text-[#7b7570] mt-2" style={{ fontFamily: 'system-ui, sans-serif' }}>Pen &amp; Sword Publishing</p>
              </div>
            </div>
            
            <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#2c2825] flex items-center justify-center group-hover:bg-[#c41e3a] transition-all">
              <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

          {/* Stats Card */}
          <div className="col-span-3 md:col-span-4 row-span-2 rounded-xl bg-[#2c2825] text-[#f4f1eb] p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-2xl font-light">30+</p>
                <p className="text-[10px] text-[#a09890] uppercase tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>Years</p>
              </div>
              <div>
                <p className="text-2xl font-light">PhD</p>
                <p className="text-[10px] text-[#a09890] uppercase tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>History</p>
              </div>
            </div>
            <div>
              <p className="text-2xl font-light">150k+</p>
              <p className="text-[10px] text-[#a09890] uppercase tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>Video Views</p>
            </div>
          </div>

          {/* Video Card 2 - Small */}
          <a 
            href="https://www.youtube.com/watch?v=EJdFKjsiRdU"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3 md:col-span-4 row-span-1 group rounded-xl overflow-hidden relative bg-[#1a1815] flex items-center gap-3 p-3"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c41e3a] transition-colors">
              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs text-white truncate">Australia's Thermopylae</p>
              <p className="text-[10px] text-white/50" style={{ fontFamily: 'system-ui, sans-serif' }}>WW2TV · 10k views</p>
            </div>
          </a>

          {/* Video Card 1 - Featured */}
          <a 
            href="https://www.youtube.com/watch?v=6rTH767nThc"
            target="_blank"
            rel="noopener noreferrer"
            id="media"
            className="col-span-6 md:col-span-5 row-span-2 group rounded-xl overflow-hidden relative bg-gradient-to-br from-[#2a2520] to-[#1a1815]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#c41e3a]/10 to-transparent" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#c41e3a] transition-all duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-2 py-1 bg-[#c41e3a] text-white text-[10px] rounded-full" style={{ fontFamily: 'system-ui, sans-serif' }}>WW2TV</span>
              <span className="text-[10px] text-white/70" style={{ fontFamily: 'system-ui, sans-serif' }}>150k+ views</span>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-base text-white font-medium">Interviewing Japanese Veterans</h3>
              <p className="text-[10px] text-white/50 mt-1" style={{ fontFamily: 'system-ui, sans-serif' }}>Featured Interview</p>
            </div>
          </a>

          {/* Book 2 */}
          <a 
            href="https://bookshop.org/p/books/the-kokoda-campaign-1942-myth-and-reality-peter-williams/988064"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-6 md:col-span-7 row-span-2 group rounded-xl overflow-hidden relative border border-[#d4cfc5] hover:border-[#c41e3a]/40 transition-all duration-300 hover:shadow-lg"
          >
            <TacticalMapBg />
            
            <div className="relative h-full p-4 flex flex-col justify-between">
              <span className="inline-block self-start px-2.5 py-1 bg-[#6b5a4a] text-white text-xs rounded-full" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Books · 2012
              </span>
              <div>
                <h3 className="text-xl font-medium text-[#2c2825] group-hover:text-[#c41e3a] transition-colors mb-1">
                  The Kokoda Campaign 1942
                </h3>
                <p className="text-sm text-[#6b6560] italic">Myth and Reality</p>
                <p className="text-xs text-[#8b8580] mt-1" style={{ fontFamily: 'system-ui, sans-serif' }}>Cambridge University Press</p>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#2c2825] flex items-center justify-center group-hover:bg-[#c41e3a] transition-colors">
              <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

          {/* Publications Card */}
          <div className="col-span-6 md:col-span-5 row-span-2 rounded-xl bg-white border border-[#e4dfd5] p-4">
            <span className="text-[10px] text-[#c41e3a] font-medium uppercase tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>Publications</span>
            <h3 className="text-base font-medium mt-1 mb-3">Selected Works</h3>
            <div className="space-y-2 text-xs" style={{ fontFamily: 'system-ui, sans-serif' }}>
              <div className="flex justify-between"><span className="text-[#6b6560]">Against Overwhelming Odds?</span><span className="text-[#a09890]">2017</span></div>
              <div className="flex justify-between"><span className="text-[#6b6560]">Kokoda for Dummies</span><span className="text-[#a09890]">2012</span></div>
              <div className="flex justify-between"><span className="text-[#6b6560]">Battle of Anzac Ridge</span><span className="text-[#a09890]">2008</span></div>
              <div className="flex justify-between"><span className="text-[#6b6560]">Ottoman Artillery at Gallipoli</span><span className="text-[#a09890]">2005</span></div>
              <div className="flex justify-between"><span className="text-[#6b6560]">Japanese 18th Army in New Guinea</span><span className="text-[#a09890]">2006</span></div>
            </div>
          </div>

          {/* About Card */}
          <div 
            id="about"
            className="col-span-6 md:col-span-7 row-span-2 rounded-xl bg-[#e8e3d9] border border-[#d4cfc5] p-4 relative overflow-hidden"
          >
            <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 400 200">
              <defs>
                <pattern id="aboutGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8b9bab" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#aboutGrid)"/>
            </svg>
            
            <div className="relative flex gap-4 h-full">
              <div className="w-16 h-16 rounded-full bg-[#d4cfc5] flex-shrink-0 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#8b8580]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-[10px] text-[#c41e3a] font-medium uppercase tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>About</span>
                <h3 className="text-lg font-medium mt-0.5 mb-2">Dr. Peter Damian Williams</h3>
                <p className="text-[#6b6560] text-xs leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Born Hobart, 1957. PhD Military History. After teaching in Japan, I began decades of interviews 
                  with Japanese veterans—perspectives rarely heard in Western histories. Based in Canberra.
                </p>
                <div className="flex gap-3 mt-2 text-[10px] text-[#8b8580]" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  <span>📍 Canberra</span>
                  <span>🎓 PhD, MA, BA</span>
                  <span>🎖️ Pacific Theater</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <a 
            href="mailto:askme@peterdwilliams.com"
            className="col-span-6 md:col-span-5 row-span-1 rounded-xl bg-[#c41e3a] text-white p-4 flex items-center justify-between group hover:bg-[#a01830] transition-colors"
          >
            <div>
              <p className="text-[10px] text-white/70 uppercase tracking-wide" style={{ fontFamily: 'system-ui, sans-serif' }}>Get in touch</p>
              <p className="font-medium text-sm">askme@peterdwilliams.com</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

        </div>
      </main>

      {/* Footer - Compact */}
      <footer className="border-t border-[#d4cfc5] py-5 px-5">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-xs text-[#8b8580]" style={{ fontFamily: 'system-ui, sans-serif' }}>
          <p>© 2025 Dr. Peter Williams</p>
          <p>Military Historian · Canberra, Australia</p>
        </div>
      </footer>
    </div>
  );
}
