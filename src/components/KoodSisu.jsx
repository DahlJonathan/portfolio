const KoodSisu = () => {
    return (
        <div className="relative min-h-[calc(100vh-80px)] bg-black py-12 px-4 overflow-hidden">

            {/* Diagonal green tick lines background */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute right-[-10%] top-0 w-[140%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#52b788] to-transparent rotate-[-35deg] opacity-70" />
                <div className="absolute right-[-12%] top-[15%] w-[150%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#95d5b2] to-transparent rotate-[-32deg] opacity-60" />
                <div className="absolute right-[-8%] top-[30%] w-[130%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-28deg] opacity-50" />
                <div className="absolute right-[-15%] top-[50%] w-[160%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#74c69d] to-transparent rotate-[-33deg] opacity-50" />
                <div className="absolute right-[-10%] top-[70%] w-[120%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-30deg] opacity-40" />
                <div className="absolute right-[-10%] top-[80%] w-[120%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-30deg] opacity-40" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">KOOD/SISU</h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-prose mx-auto mb-6">
                        Kood/Sisu is a peer-to-peer coding school where students learn through self-study and collaboration.
                        We work independently on projects, review other students' tasks, provide constructive feedback,
                        and complete 4 comprehensive modules over 2 years. This unique approach develops both technical
                        skills and the ability to collaborate effectively in a team environment.
                    </p>
                </div>

                {/* Content sections */}
                <div className="relative z-10 w-full mx-auto">
                    <div className="grid gap-8 md:grid-cols-1">

                        <section className="bg-white/8 ring-1 ring-white/10 rounded-2xl p-5 md:p-7 hover:ring-white/20 transition">
                            <h2 className="text-white text-2xl font-semibold mb-4 text-center">Learning Method</h2>
                            <div className="text-gray-200 space-y-3 text-center">
                                <p className="leading-relaxed">At Kood/Sisu, learning happens through:</p>
                                <ul className="space-y-2 inline-block text-left">
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-400 mt-1">✓</span>
                                        <span><strong className="text-white">Self-directed study</strong> - Students work independently on projects at their own pace</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-400 mt-1">✓</span>
                                        <span><strong className="text-white">Group collaboration</strong> - We learn how to work effectively in groups</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-400 mt-1">✓</span>
                                        <span><strong className="text-white">Peer review</strong> - We evaluate and audit other students' code and projects</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-400 mt-1">✓</span>
                                        <span><strong className="text-white">Feedback culture</strong> - Giving and receiving constructive feedback is core to the process</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-400 mt-1">✓</span>
                                        <span><strong className="text-white">4 Modules in 2 years</strong> - Structured curriculum covering full-stack and mobile development</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-white/8 ring-1 ring-white/10 rounded-2xl p-5 md:p-7 hover:ring-white/20 transition">
                            <h2 className="text-white text-2xl font-semibold mb-6 text-center">Feedback from Kood/Sisu</h2>

                            {/* First row - 2 images side by side */}
                            <div className="flex justify-center mb-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full">
                                    <div className="rounded-lg overflow-hidden">
                                        <img
                                            src="/kood1.png"
                                            alt="Kood/Sisu feedback 1"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <div className="rounded-lg overflow-hidden">
                                        <img
                                            src="/kood2.png"
                                            alt="Kood/Sisu feedback 2"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Second row - 4 images in one row */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src="/kood5.png"
                                        alt="Kood/Sisu feedback 5"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src="/kood8.png"
                                        alt="Kood/Sisu feedback 6"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src="/kood6.png"
                                        alt="Kood/Sisu feedback 7"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src="/kood7.png"
                                        alt="Kood/Sisu feedback 8"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default KoodSisu;
