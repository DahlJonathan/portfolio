const Home = () => {
    return (
        <div className="relative min-h-[calc(100vh-80px)] flex items-start justify-center bg-black px-4 pt-6 md:pt-10 lg:pt-14 overflow-hidden">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                {/* Primary line */}
                <div className="absolute right-[-10%] top-0 w-[140%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#52b788] to-transparent rotate-[-35deg] opacity-70" />
                {/* Secondary lines */}
                <div className="absolute right-[-12%] top-[15%] w-[150%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#95d5b2] to-transparent rotate-[-32deg] opacity-60" />
                <div className="absolute right-[-8%] top-[30%] w-[130%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-28deg] opacity-50" />
                <div className="absolute right-[-15%] top-[50%] w-[160%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#74c69d] to-transparent rotate-[-33deg] opacity-50" />
                <div className="absolute right-[%] top-[70%] w-[120%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-30deg] opacity-40" />
                <div className="absolute right-[-10%] top-[80%] w-[10%] w-[120%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-30deg] opacity-40" />
            </div>
            {/* Background headline text behind the picture */}
            <div className="absolute inset-x-0 top-2 md:top-6 lg:top-8 z-10 flex flex-col items-center pointer-events-none select-none text-center z-10">
                <span className="uppercase tracking-widest font-extrabold text-white/50 text-2xl sm:text-3xl md:text-4xl mb-2">
                    welcome to my
                </span>
                <span className="uppercase leading-none font-black text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl z-10">
                    portfolio
                </span>
            </div>

            {/* Foreground image centered */}
            <img
                src="/minä.png"
                alt="Jonathan Dahl"
                className="relative z-10 w-[280px] h-[430px] sm:w-[360px] sm:h-[460px] md:w-[420px] md:h-[660px] object-cover rounded-xl shadow-2xl mt-10 md:mt-15 lg:mt-20"
            />
        </div>
    );
};

export default Home;
