import { useState } from 'react';

const Navigation = ({ currentPage, onNavigate }) => {
    return (
        // The main nav container. Relative for absolute positioning of 'Jonathan Dahl' label.
        <nav className="relative bg-gradient-to-b from-[#2d6a4f] to-[#1b4332] shadow-md border-b border-[#0f3d2e] h-24">

            {/* Main Content Container */}
            <div className="max-w-6xl mx-auto px-4 h-full">

                {/* Centering Flex Container for All Nav Items + Logo */}
                <div className="flex items-center justify-center h-full relative">

                    {/* Home */}
                    <button
                        onClick={() => onNavigate('home')}
                        className={`text-lg transition-colors mr-8 ${currentPage === 'home' ? 'text-[#d8f3dc] font-semibold' : 'text-[#b7e4c7] hover:text-[#d8f3dc]'}`}
                    >
                        Home
                    </button>

                    {/* About me */}
                    <button
                        onClick={() => onNavigate('about')}
                        // Reduced margin to the left of 'About me' to bring it closer to the logo gap
                        className={`text-lg transition-colors ${currentPage === 'about' ? 'text-[#d8f3dc] font-semibold' : 'text-[#b7e4c7] hover:text-[#d8f3dc]'}`}
                    >
                        About
                    </button>

                    {/* Logo Spacer and Absolute Logo */}
                    {/* REDUCED WIDTH: w-48 (192px) - This creates the symmetrical gap. */}
                    <div className="w-100 relative z-11">
                        <div className="absolute left-1/2 -translate-x-1/2 -top-13">
                            <img
                                src="/portfolio.png"
                                alt="Portfolio Logo"
                                // Kept the large logo size as requested
                                className="h-40 w-auto drop-shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Projects */}
                    <button
                        onClick={() => onNavigate('projects')}
                        // Reduced margin to the right of 'Projects' to bring it closer to the logo gap
                        className={`text-lg transition-colors ${currentPage === 'projects' ? 'text-[#d8f3dc] font-semibold' : 'text-[#b7e4c7] hover:text-[#d8f3dc]'}`}
                    >
                        Projects
                    </button>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/dahljonathanhendry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-[#b7e4c7] hover:text-[#d8f3dc] transition-colors ml-8"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;