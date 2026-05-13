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
                <div className={`${isOpen ? 'flex' : 'hidden'} md:flex md:flex-row flex-col items-center justify-center h-full gap-2 md:gap-10 py-1 md:py-2`}>

                    <button
                        onClick={() => handleNav('home')}
                        className={`w-full md:w-auto text-center text-base md:text-lg py-1 md:py-0 transition-colors ${currentPage === 'home' ? 'text-[#d8f3dc] font-semibold' : 'text-[#b7e4c7] hover:text-[#d8f3dc]'}`}
                    >
                        Home
                    </button>

                    <button
                        onClick={() => handleNav('projects')}
                        className={`w-full md:w-auto text-center text-base md:text-lg py-1 md:py-0 transition-colors ${currentPage === 'projects' ? 'text-[#d8f3dc] font-semibold' : 'text-[#b7e4c7] hover:text-[#d8f3dc]'}`}
                    >
                        Projects
                    </button>

                    <button
                        onClick={() => handleNav('koodsisu')}
                        className={`w-full md:w-auto text-center text-base md:text-lg py-1 md:py-0 transition-colors ${currentPage === 'koodsisu' ? 'text-[#d8f3dc] font-semibold' : 'text-[#b7e4c7] hover:text-[#d8f3dc]'}`}
                    >
                        Kood/Sisu
                    </button>

                    <a
                        href="https://www.linkedin.com/in/dahljonathanhendry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto text-center text-base md:text-lg text-[#b7e4c7] hover:text-[#d8f3dc] transition-colors py-1 md:py-0"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="/CV%20-%20Jonathan%20Dahl.pdf"
                        className="w-full md:w-auto text-center text-base md:text-lg text-[#b7e4c7] hover:text-[#d8f3dc] transition-colors py-1 md:py-0"
                    >
                        <span className="whitespace-nowrap">CV</span>
                    </a>

                </div>
            </div>
        </nav>
    );
};

export default Navigation;