import React, { useState } from 'react';
import { Home, GraduationCap, Zap } from 'lucide-react';

const WinstonsGateway: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<'school' | 'home' | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<'school' | 'home' | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Define your server mirrors here
  const schoolServers = [
    'https://school-server1.example.com',
    'https://school-server2.example.com',
    'https://school-server3.example.com'
  ];

  const homeServers = [
    'https://home-server1.example.com',
    'https://home-server2.example.com',
    'https://home-server3.example.com'
  ];

  const handleLocationSelect = (location: 'school' | 'home') => {
    setSelectedLocation(location);
    setIsRedirecting(true);

    // Animate loading progress
    const duration = 1800;
    const interval = 20;
    const steps = duration / interval;
    let step = 0;

    const progressInterval = setInterval(() => {
      step++;
      const progress = (step / steps) * 100;
      setLoadingProgress(Math.min(progress, 100));

      if (step >= steps) {
        clearInterval(progressInterval);
      }
    }, interval);

    // Select random server from the appropriate array
    const servers = location === 'school' ? schoolServers : homeServers;
    const randomServer = servers[Math.floor(Math.random() * servers.length)];

    // Redirect after animation
    setTimeout(() => {
      window.location.href = randomServer;
    }, duration);
  };

  // Helper to determine Orb RGBA Colors
  const getTopLeftOrbColor = () => {
    if (isRedirecting && selectedLocation === 'school') return 'rgba(37, 99, 235, 0.3)';
    if (isRedirecting && selectedLocation === 'home') return 'rgba(34, 197, 94, 0.3)';
    if (hoveredCard === 'school') return 'rgba(37, 99, 235, 0.25)';
    if (hoveredCard === 'home') return 'rgba(34, 197, 94, 0.25)';
    return 'rgba(255, 255, 255, 0.08)';
  };

  const getBottomRightOrbColor = () => {
    if (isRedirecting && selectedLocation === 'school') return 'rgba(37, 99, 235, 0.3)';
    if (isRedirecting && selectedLocation === 'home') return 'rgba(34, 197, 94, 0.3)';
    if (hoveredCard === 'school') return 'rgba(37, 99, 235, 0.25)';
    if (hoveredCard === 'home') return 'rgba(34, 197, 94, 0.25)';
    return 'rgba(255, 255, 255, 0.08)';
  };

  return (
    <div className="h-[100dvh] bg-zinc-950 text-white relative font-sans selection:bg-white/20 overflow-hidden flex flex-col">
      
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div 
        className="fixed top-[-10%] left-1/4 w-[500px] h-[500px] rounded-full blur-[128px] pointer-events-none animate-pulse transition-all duration-1000 ease-in-out"
        style={{ backgroundColor: getTopLeftOrbColor() }}
      ></div>

      <div 
        className="fixed bottom-[-10%] right-1/4 w-[500px] h-[500px] rounded-full blur-[128px] pointer-events-none animate-pulse transition-all duration-1000 ease-in-out"
        style={{ backgroundColor: getBottomRightOrbColor() }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col overflow-hidden">
        
        {!isRedirecting ? (
          <div className="flex-1 w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
            <div className="min-h-full flex flex-col items-center justify-center p-6 relative">
              
              <div className="w-full flex flex-col items-center justify-center gap-8 md:gap-12 max-w-6xl py-8 md:py-12 z-10">
                
                {/* Header Text */}
                <div className="space-y-4 text-center mt-4 md:mt-0 flex flex-col items-center">
                  <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 drop-shadow-2xl select-none leading-tight">
                    Winstons<br className="hidden md:block"/>Gateway
                  </h1>
                  <p className="text-zinc-500 font-medium tracking-widest uppercase text-sm md:text-base animate-in fade-in slide-in-from-bottom-2 duration-500">
                    Select Your Location
                  </p>
                </div>

                {/* Location Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl px-2 md:px-4">
                  
                  {/* School Card */}
                  <div
                    onClick={() => handleLocationSelect('school')}
                    onMouseEnter={() => setHoveredCard('school')}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group relative cursor-pointer active:scale-95 transition-transform"
                  >
                    <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-cyan-600 opacity-20 blur transition duration-500 group-hover:opacity-40 group-hover:blur-md"></div>
                    <div className="relative h-full overflow-hidden rounded-[2rem] bg-zinc-900 ring-1 ring-white/10 transition-all duration-500 group-hover:scale-[1.02] group-hover:bg-zinc-800/80">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      <div className="relative flex flex-col items-center justify-center gap-6 md:gap-8 p-8 text-center md:p-14">
                        <div className="relative">
                          <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/20 blur-xl"></div>
                          <div className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-zinc-800 to-black shadow-2xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:ring-blue-500/50">
                            <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-blue-500 transition-colors duration-300 group-hover:text-white" />
                          </div>
                        </div>
                        <div className="space-y-2 md:space-y-4">
                          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-500">
                            School
                          </h2>
                          <p className="mx-auto max-w-xs text-sm md:text-base font-medium text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                            Secure educational network.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Home Card */}
                  <div
                    onClick={() => handleLocationSelect('home')}
                    onMouseEnter={() => setHoveredCard('home')}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group relative cursor-pointer active:scale-95 transition-transform"
                  >
                    <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-green-600 to-emerald-600 opacity-20 blur transition duration-500 group-hover:opacity-40 group-hover:blur-md"></div>
                    <div className="relative h-full overflow-hidden rounded-[2rem] bg-zinc-900 ring-1 ring-white/10 transition-all duration-500 group-hover:scale-[1.02] group-hover:bg-zinc-800/80">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      <div className="relative flex flex-col items-center justify-center gap-6 md:gap-8 p-8 text-center md:p-14">
                        <div className="relative">
                          <div className="absolute inset-0 animate-pulse rounded-full bg-green-500/20 blur-xl"></div>
                          <div className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-zinc-800 to-black shadow-2xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:ring-green-500/50">
                            <Home className="h-8 w-8 md:h-10 md:w-10 text-green-500 transition-colors duration-300 group-hover:text-white" />
                          </div>
                        </div>
                        <div className="space-y-2 md:space-y-4">
                          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-green-500">
                            Home
                          </h2>
                          <p className="mx-auto max-w-xs text-sm md:text-base font-medium text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                            Personal network access.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer */}
              <div className="w-full flex justify-center pb-8 z-10 shrink-0 mt-auto pt-12">
                <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-medium text-zinc-700 select-none bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-zinc-800/50 shadow-lg">
                  <span>VER 2.1.0 (GATEWAY)</span>
                  <div className="h-1 w-1 rounded-full bg-zinc-700"></div>
                  <span className="flex items-center gap-1 text-zinc-500">
                    LOAD BALANCED
                  </span>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="flex-1 w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
            <div className="min-h-full flex flex-col items-center justify-center p-6 relative">
              
              <div className="w-full flex flex-col items-center justify-center gap-8 md:gap-12 max-w-6xl py-8 md:py-12 z-10">
                
                {/* Connecting Animation */}
                <div className="space-y-8 text-center">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 animate-pulse rounded-full blur-xl" style={{ 
                      backgroundColor: selectedLocation === 'school' ? 'rgba(37, 99, 235, 0.3)' : 'rgba(34, 197, 94, 0.3)'
                    }}></div>
                    <div 
                      className="relative flex h-32 w-32 mx-auto items-center justify-center rounded-full shadow-2xl transition-all duration-500" 
                      style={{
                        background: selectedLocation === 'school' 
                          ? 'linear-gradient(to bottom right, rgb(37, 99, 235), rgb(59, 130, 246))' 
                          : 'linear-gradient(to bottom right, rgb(34, 197, 94), rgb(74, 222, 128))',
                        boxShadow: selectedLocation === 'school' 
                          ? '0 0 0 4px rgba(37, 99, 235, 0.2)' 
                          : '0 0 0 4px rgba(34, 197, 94, 0.2)'
                      }}
                    >
                      <Zap className="h-16 w-16 text-white animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                      Connecting...
                    </h2>
                    <p className="text-zinc-400 text-base md:text-lg font-medium">
                      Routing to {selectedLocation === 'school' ? 'school' : 'home'} server
                    </p>
                  </div>

                  {/* Enhanced Loading Bar */}
                  <div className="w-full max-w-md mx-auto space-y-3">
                    <div className="h-3 bg-zinc-900 rounded-full overflow-hidden ring-1 ring-white/10 shadow-inner">
                      <div 
                        className="h-full rounded-full transition-all duration-100 ease-out shadow-lg"
                        style={{ 
                          width: `${loadingProgress}%`,
                          background: selectedLocation === 'school'
                            ? 'linear-gradient(to right, rgb(37, 99, 235), rgb(59, 130, 246))'
                            : 'linear-gradient(to right, rgb(34, 197, 94), rgb(74, 222, 128))'
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-zinc-600">
                      <span>Establishing secure connection</span>
                      <span>{Math.round(loadingProgress)}%</span>
                    </div>
                  </div>

                  {/* Connection Steps */}
                  <div className="space-y-2 text-sm font-medium">
                    <div className={`flex items-center justify-center gap-2 transition-all duration-300 ${loadingProgress > 20 ? 'text-zinc-500' : 'text-zinc-700'}`}>
                      <div className={`h-1.5 w-1.5 rounded-full ${loadingProgress > 20 ? 'bg-zinc-500' : 'bg-zinc-700'}`}></div>
                      <span>Verifying credentials</span>
                    </div>
                    <div className={`flex items-center justify-center gap-2 transition-all duration-300 ${loadingProgress > 50 ? 'text-zinc-500' : 'text-zinc-700'}`}>
                      <div className={`h-1.5 w-1.5 rounded-full ${loadingProgress > 50 ? 'bg-zinc-500' : 'bg-zinc-700'}`}></div>
                      <span>Selecting optimal server</span>
                    </div>
                    <div className={`flex items-center justify-center gap-2 transition-all duration-300 ${loadingProgress > 80 ? 'text-zinc-500' : 'text-zinc-700'}`}>
                      <div className={`h-1.5 w-1.5 rounded-full ${loadingProgress > 80 ? 'bg-zinc-500' : 'bg-zinc-700'}`}></div>
                      <span>Initiating secure tunnel</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>

      <style>{`
        @keyframes dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60%, 100% { content: '...'; }
        }
      `}</style>
    </div>
  );
};

export default WinstonsGateway;