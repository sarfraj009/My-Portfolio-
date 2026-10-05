// High-tech SVG previews for projects to ensure reliable rendering without external image dependencies

export function EventoraPreview() {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 flex flex-col justify-between p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Top Header */}
      <div className="flex items-center justify-between relative z-10">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
          EVENTORA // TICKETING
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40">
          ● LIVE RAZORPAY
        </span>
      </div>

      {/* Ticket graphic center */}
      <div className="relative z-10 bg-slate-900/90 border border-indigo-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-white tracking-wide">Tech Conference 2026</div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">VIP PASS • SECURE TICKET</div>
          <div className="text-[10px] text-indigo-400 font-mono mt-1 font-semibold">₹1,499 • VERIFIED QR</div>
        </div>
        <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center shadow-inner">
          {/* Simulated QR Code */}
          <svg className="w-full h-full text-slate-900" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 2h4v4h-4v-4zm-4-4h4v2h-4v-2zm2 4h2v4h-2v-4zm2-2h2v2h-2v-2z" />
          </svg>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 relative z-10">
        <span>JWT Auth • Admin Scanner</span>
        <span className="text-indigo-400">v2.4.0</span>
      </div>
    </div>
  );
}

export function RealStatePreview() {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 flex flex-col justify-between p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="flex items-center justify-between relative z-10">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
          REALSTATE // PORTAL
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/40">
          CLOUDINARY CDN
        </span>
      </div>

      {/* Property Showcase Graphic */}
      <div className="relative z-10 bg-slate-900/90 border border-cyan-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xs font-bold text-white">Modern Luxury Villa</div>
            <div className="text-[10px] text-slate-400 font-mono">Gomti Nagar, Lucknow</div>
          </div>
          <span className="text-xs font-bold font-mono text-cyan-400">₹85,00,000</span>
        </div>
        <div className="mt-2 flex gap-1.5 text-[9px] font-mono text-slate-300">
          <span className="bg-slate-800 px-1.5 py-0.5 rounded">4 BHK</span>
          <span className="bg-slate-800 px-1.5 py-0.5 rounded">2,800 sq.ft</span>
          <span className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400">Verified Seller</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 relative z-10">
        <span>Buyer / Seller Workflows</span>
        <span className="text-cyan-400">Geospatial Filters</span>
      </div>
    </div>
  );
}

export function AiEcommercePreview() {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950 flex flex-col justify-between p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="flex items-center justify-between relative z-10">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
          AI COMMERCE // INTELLIGENT
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-fuchsia-300 bg-fuchsia-950/60 border border-fuchsia-500/40">
          AI RECOMMENDATIONS
        </span>
      </div>

      <div className="relative z-10 bg-slate-900/90 border border-purple-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold text-white">Smart Match Engine</div>
          <span className="text-[10px] font-mono text-purple-400 bg-purple-950 px-2 py-0.5 rounded">98% Match Score</span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1.5 text-[9px] font-mono text-center">
          <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700">
            <span className="block text-slate-400">Product A</span>
            <span className="text-white font-bold">$129</span>
          </div>
          <div className="bg-purple-900/40 p-1.5 rounded border border-purple-500/50">
            <span className="block text-purple-300">AI Pick</span>
            <span className="text-white font-bold">$199</span>
          </div>
          <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700">
            <span className="block text-slate-400">Product C</span>
            <span className="text-white font-bold">$89</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 relative z-10">
        <span>Stripe Checkout API</span>
        <span className="text-purple-400">Vector Clustering</span>
      </div>
    </div>
  );
}

export function HousePricePreview() {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 flex flex-col justify-between p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="flex items-center justify-between relative z-10">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          ML REGRESSION // PREDICTOR
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/40">
          STREAMLIT APP
        </span>
      </div>

      <div >
        {/* <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-white">Estimated Valuation:</span>
          <span className="text-sm font-extrabold font-mono text-emerald-400">₹74.5 Lakhs</span>
        </div> */}
        
        {/* Regression Visual Bar */}
        <div >
          <div >
            {/* <span>R² Score: 0.89</span>
            <span>MAE: ±2.4%</span> */}
          </div>
          <div >
            <div  />
          </div>
        </div>
      </div>

      <div >
        {/* <span>Scikit-learn Pipeline</span> */}
        {/* <span className="text-emerald-400">Real-time Inference</span> */}
      </div>
    </div>
  );
}

export function SpamEmailPreview() {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-amber-950 via-slate-900 to-orange-950 flex flex-col justify-between p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="flex items-center justify-between relative z-10">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
          NLP CLASSIFIER // SPAM FILTER
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-amber-300 bg-amber-950/60 border border-amber-500/40">
          TF-IDF + NAIVE BAYES
        </span>
      </div>

      {/* <div className="relative z-10 bg-slate-900/90 border border-amber-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md"> */}
        {/* <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-white">Classification Result:</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40">
            SPAM DETECTED
          </span>
        </div> */}
        {/* <div className="mt-2 text-[10px] font-mono text-slate-400 bg-slate-800/80 p-1.5 rounded line-clamp-1 border border-slate-700">
          "URGENT: Claim your lottery winnings now..."
        </div> */}
        {/* <div className="mt-1.5 flex justify-between text-[9px] font-mono text-slate-400">
          <span>Confidence: 99.4%</span>
          <span className="text-amber-400">Tokens analyzed: 38</span>
        </div> */}
      {/* </div> */}

      {/* <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 relative z-10">
        <span>Interactive Streamlit UI</span>
        <span className="text-amber-400">Text Stemming</span>
      </div> */}
    </div>
  );
}

export function DriverDrowsinessPreview() {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-rose-950 via-slate-900 to-red-950 flex flex-col justify-between p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="flex items-center justify-between relative z-10">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
          COMPUTER VISION // OPENCV
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-rose-300 bg-rose-950/60 border border-rose-500/40">
          REAL-TIME WEBCAM
        </span>
      </div>

      <div className="relative z-10 bg-slate-900/90 border border-rose-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold text-white">Tracking Driver EAR</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-semibold">EAR: 0.32 (AWAKE)</span>
        </div>

        {/* Eye Wireframe Simulation */}
        <div className="mt-2 flex items-center justify-center gap-3 py-1 bg-slate-950/80 rounded border border-slate-800">
          <div className="w-12 h-6 border border-cyan-400/80 rounded-full flex items-center justify-center relative">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          </div>
          <div className="w-12 h-6 border border-cyan-400/80 rounded-full flex items-center justify-center relative">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 relative z-10">
        <span>68 Landmark Points</span>
        <span className="text-rose-400">Audio Alarm System</span>
      </div>
    </div>
  );
}

export function getProjectPreview(id) {
  switch (id) {
    case 'eventora':
      return <EventoraPreview />;
    case 'realstate':
      return <RealStatePreview />;
    case 'ai-ecommerce':
      return <AiEcommercePreview />;
    case 'house-price':
      return <HousePricePreview />;
    case 'spam-email':
      return <SpamEmailPreview />;
    case 'driver-drowsiness':
      return <DriverDrowsinessPreview />;
    default:
      return <EventoraPreview />;
  }
}
