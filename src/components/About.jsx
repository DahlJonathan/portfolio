const About = () => {
    return (
        <div className="relative min-h-[calc(100vh-80px)] bg-black py-12 px-4 overflow-hidden">

            {/* Diagonal green tick lines background (kept for styling) */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
                {/* Primary line */}
                <div className="absolute right-[-10%] top-0 w-[140%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#52b788] to-transparent rotate-[-35deg] opacity-70" />
                {/* Secondary lines */}
                <div className="absolute right-[-12%] top-[15%] w-[150%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#95d5b2] to-transparent rotate-[-32deg] opacity-60" />
                <div className="absolute right-[-8%] top-[30%] w-[130%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-28deg] opacity-50" />
                <div className="absolute right-[-15%] top-[50%] w-[160%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#74c69d] to-transparent rotate-[-33deg] opacity-50" />
                <div className="absolute right-[-10%] top-[70%] w-[120%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-30deg] opacity-40" />
                <div className="absolute right-[-10%] top-[80%] w-[120%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-30deg] opacity-40" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/*
                  KEY CHANGE HERE: Reduced the gap size significantly.
                  Changed `gap-4 md:gap-6` to `gap-4 md:gap-0 lg:gap-8`
                  - md:gap-0: removes the gap completely on medium screens, letting content touch.
                  - lg:gap-8: adds a small, controlled gap (2rem / 32px) on large screens.
                */}
                <div className="grid md:grid-cols-2 gap-4 lg:gap-8 items-center">

                    {/* Left text column */}
                    <div className="text-left">
                        <h1 className="text-6xl font-bold text-white mb-6">INTRODUCTION</h1>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                            Welcome to my portfolio! I'm a passionate full-stack and mobile developer student who loves coding and building meaningful applications.
                            I bring many years of hobbyist coding experience and 6 months of professional internship experience. I will be completing my degree at Kood/Sisu in April 2026.
                        </p>
                    </div>

                    {/* Right image column */}
                    <div className="flex justify-center md:justify-end">
                        <div className="bg-transparent rounded-lg shadow-2xl p-0 md:p-1">
                            <img
                                src="/minä2.png"
                                alt="Jonathan Dahl"
                                className="max-w-full max-h-[50vh] md:max-h-[50vh] object-contain rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;