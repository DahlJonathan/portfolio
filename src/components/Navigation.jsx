import { useState } from 'react';

const Navigation = ({ currentPage, onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = (page) => {
        onNavigate(page);
        setIsOpen(false);
    };

    return (
        // The main nav container. Relative for absolute positioning of 'Jonathan Dahl' label.
        <nav className="sticky top-0 z-50 relative bg-gradient-to-b from-[#2d6a4f] to-[#1b4332] shadow-md border-b border-[#0f3d2e] md:h-24 h-auto">

            {/* Main Content Container */}
            <div className="max-w-6xl mx-auto px-4 h-full">

                {/* Mobile header: logo + hamburger */}
                <div className="md:hidden flex items-center justify-between py-1">

                    <button
                        aria-label="Toggle menu"
                        aria-expanded={isOpen ? 'true' : 'false'}
                        onClick={() => setIsOpen((v) => !v)}
                        className="ml-3 inline-flex flex-col items-center justify-center space-y-1 rounded-md p-2 text-[#b7e4c7] hover:text-[#d8f3dc] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/30"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="block w-6 h-[2px] bg-current rounded"></span>
                        <span className="block w-6 h-[2px] bg-current rounded"></span>
                        <span className="block w-6 h-[2px] bg-current rounded"></span>
                    </button>
                </div>

                {/* Collapsible menu on mobile, centered row on md+ */}
                <div className={`${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row flex-col items-center h-full relative gap-1 md:gap-2 py-1 md:py-2`}>

                    {/* Left group - uses 1/3 width on md+ to balance with right */}
                    <div className="w-full md:w-1/3 flex items-center md:justify-end justify-center gap-6">
                        <button
                            onClick={() => handleNav('home')}
                            className={`text-base md:text-lg transition-colors ${currentPage === 'home' ? 'text-[#d8f3dc] font-semibold' : 'text-[#b7e4c7] hover:text-[#d8f3dc]'}`}
                        >
                            Home
                        </button>

                        <button
                            onClick={() => handleNav('projects')}
                            className={`text-base md:text-lg transition-colors ${currentPage === 'projects' ? 'text-[#d8f3dc] font-semibold' : 'text-[#b7e4c7] hover:text-[#d8f3dc]'}`}
                        >
                            Projects
                        </button>
                    </div>

                    {/* Center group for logo */}
                    <div className="hidden md:flex md:w-1/3 md:items-center md:justify-center md:relative">
                        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-12 flex justify-center">
                            <img
                                src="/portfolio.png"
                                alt="Portfolio Logo"
                                className="h-36 w-auto drop-shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right group - 1/3 width to balance left */}
                    <div className="w-full md:w-1/3 flex items-center md:justify-start justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/dahljonathanhendry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base md:text-lg text-[#b7e4c7] hover:text-[#d8f3dc] transition-colors"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="/CV%20-%20Jonathan%20Dahl.pdf"
                            className="text-base md:text-lg text-[#b7e4c7] hover:text-[#d8f3dc] transition-colors"
                        >
                            <span className="whitespace-nowrap">CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;