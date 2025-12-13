const About = () => {
    return (
        <div className="relative min-h-[calc(100vh-80px)] bg-black py-12 px-4 overflow-hidden">

            {/* Diagonal green tick lines background (kept for styling) */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
                {/* Primary line */}
                <div className="absolute right-[-10%] top-0 w-[140%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#52b788] to-transparent rotate-[-35deg] opacity-60 sm:opacity-70" />
                {/* Secondary lines (hide some on mobile for clarity) */}
                <div className="hidden sm:block absolute right-[-12%] top-[15%] w-[150%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#95d5b2] to-transparent rotate-[-32deg] opacity-60" />
                <div className="hidden sm:block absolute right-[-8%] top-[30%] w-[130%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-28deg] opacity-50" />
                <div className="hidden sm:block absolute right-[-15%] top-[50%] w-[160%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#74c69d] to-transparent rotate-[-33deg] opacity-50" />
                <div className="hidden sm:block absolute right-[-10%] top-[70%] w-[120%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-30deg] opacity-40" />
                <div className="hidden sm:block absolute right-[-10%] top-[80%] w-[120%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-30deg] opacity-40" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-center">

                    {/* Left text column */}
                    <div className="md:text-left text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">INTRODUCTION</h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-prose mx-auto md:mx-0">
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
                                className="max-w-full max-h-[38vh] sm:max-h-[45vh] md:max-h-[50vh] object-contain rounded-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Info sections under picture and introduction */}
                <div className="relative z-10 w-full max-w-6xl mx-auto mt-10 md:mt-14">
                    <div className="grid gap-8 md:grid-cols-2">
                        <section className="bg-white/8 ring-1 ring-white/10 rounded-2xl p-5 md:p-7 hover:ring-white/20 transition">
                            <h2 className="text-white text-2xl font-semibold mb-3">Personal Info</h2>
                            <ul className="text-gray-200 space-y-2">
                                <div className="flex items-baseline">
                                    <span className="text-white font-semibold mr-2">Name:</span>
                                    <span className="text-white text-sm">Jonathan Dahl</span>
                                </div>
                                <div className="flex items-baseline">
                                    <span className="text-white font-semibold mr-2">Location:</span>
                                    <span className="text-white text-sm">Ylivieska, Finland</span>
                                </div>
                                <div className="flex items-baseline">
                                    <span className="text-white font-semibold mr-2">Languages:</span>
                                    <span className="text-white text-sm">Swedish, Finnish, English</span>
                                </div>
                                <div className="flex items-baseline">
                                    <span className="text-white font-semibold mr-2">Age:</span>
                                    <span className="text-white text-sm">36</span>
                                </div>
                            </ul>
                        </section>

                        <section className="bg-white/8 ring-1 ring-white/10 rounded-2xl p-5 md:p-7 hover:ring-white/20 transition">
                            <h2 className="text-white text-2xl font-semibold mb-3">School</h2>
                            <ul className="text-gray-200 space-y-2">
                                <span className="text-white font-semibold">Kood/Sisu — graduating April 2026</span>
                                <li>- Full-stack and mobile developer</li>
                                <span className="text-white font-semibold">Yrkesskola Optima - 2005-2008</span>
                                <li>- CNC Machinist</li>
                            </ul>
                        </section>

                        {/* Full-width Coding Stack box */}
                        <section className="md:col-span-2 bg-white/10 ring-1 ring-white/15 rounded-2xl p-6 md:p-8 hover:ring-white/25 transition">
                            <h2 className="text-white text-2xl font-semibold mb-5 justify-center items-center text-center">Development Stack</h2>
                            <div className="flex flex-wrap items-center gap-5 justify-center items-center text-center">
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />
                                    <span className="text-gray-100">React</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-6 h-6" />
                                    <span className="text-gray-100">Tailwind CSS</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6" />
                                    <span className="text-gray-100">JavaScript</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" />
                                    <span className="text-gray-100">TypeScript</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-6 h-6" />
                                    <span className="text-gray-100">PostgreSQL</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-6 h-6" />
                                    <span className="text-gray-100">Firebase</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" alt="Supabase" className="w-6 h-6" />
                                    <span className="text-gray-100">Supabase</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-6 h-6" />
                                    <span className="text-gray-100">Flutter</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" className="w-6 h-6" />
                                    <span className="text-gray-100">React Native</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6" />
                                    <span className="text-gray-100">Node.js</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" className="w-6 h-6" />
                                    <span className="text-gray-100">Golang</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" alt="Visual Studio" className="w-6 h-6" />
                                    <span className="text-gray-100">Visual Studio</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" alt="Android Studio" className="w-6 h-6" />
                                    <span className="text-gray-100">Android Studio</span>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white/8 ring-1 ring-white/10 rounded-2xl p-5 md:p-7 hover:ring-white/20 transition">
                            <h2 className="text-white text-2xl font-semibold mb-4">Work Experience</h2>
                            {/* Timeline */}
                            <div className="relative">
                                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-white/10" />

                                <div className="relative pl-8 pb-5">
                                    <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white/20"></span>
                                    <div className="flex items-baseline justify-between">
                                        <span className="text-white font-semibold">Full-stack Developer Intern</span>
                                        <span className="text-gray-400 text-sm">6 months</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">Built full‑stack features and handled deployments</p>
                                </div>

                                <div className="relative pl-8 pb-5">
                                    <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white/20"></span>
                                    <div className="flex items-baseline justify-between">
                                        <span className="text-white font-semibold">Sievin Jalkine Oy</span>
                                        <span className="text-gray-400 text-sm">2019 → present</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">Factory Worker</p>
                                </div>

                                <div className="relative pl-8 pb-5">
                                    <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white/20"></span>
                                    <div className="flex items-baseline justify-between">
                                        <span className="text-white font-semibold">Kolppasen Betoni</span>
                                        <span className="text-gray-400 text-sm">2014 → 2019</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">Concrete Truck Operator</p>
                                </div>

                                <div className="relative pl-8">
                                    <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white/20"></span>
                                    <div className="flex items-baseline justify-between">
                                        <span className="text-white font-semibold">HSJ Production</span>
                                        <span className="text-gray-400 text-sm">2009 → 2014</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">Metalworker</p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white/8 ring-1 ring-white/10 rounded-2xl p-5 md:p-7 hover:ring-white/20 transition">
                            <h2 className="text-white text-2xl font-semibold mb-3">Hobbies</h2>
                            <ul className="text-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <li className="flex items-center gap-3"><span className="text-emerald-400">💻</span><span>Computers</span></li>
                                <li className="flex items-center gap-3"><span className="text-emerald-400">🏋️</span><span>Working out</span></li>
                                <li className="flex items-center gap-3"><span className="text-emerald-400">🧠</span><span>Coding projects</span></li>
                                <li className="flex items-center gap-3"><span className="text-emerald-400">🍎</span><span>Healthy lifestyle</span></li>
                            </ul>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;