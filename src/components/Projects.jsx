

const Projects = () => {
    // Map technology names to icon URLs (Devicon CDN)
    const ICONS = {
        Flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        Express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        Tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        Vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    };

    const getIcon = (tech) => ICONS[tech] || null;
    const projects = [
        {
            id: 1,
            title: 'Kood Connect',
            description: 'A modern android application for Kood/Sisu students to find study partners or get help on tasks from other students.',
            technologies: ['Flutter', 'Firebase'],
            image: '/koodconnect.png',
            link: 'https://play.google.com/store/apps/details?id=fi.kood.sisu',
        },
        {
            id: 2,
            title: 'Portfolio',
            description: 'This portfolio is built from scratch using React and Tailwind, designed to showcase my skills as a frontend developer',
            technologies: ['React', 'Tailwind'],
            image: '/thisportfolio.png',
        },
        {
            id: 3,
            title: 'Internship',
            description: 'A full-stack project with integrated AI, where I used React for the frontend, Node.js for the backend, and Supabase for the database. I deployed the entire application myself and learned a lot throughout the process — from planning to deployment.',
            technologies: ['React', 'Node.js', 'Express', 'Supabase'],
            image: '/Iisiduuni.png',
        },
    ];

    return (
        <div className="relative min-h-[calc(100vh-80px)] bg-black pt-[60px] px-4 overflow-hidden">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
                {/* Primary line */}
                <div className="absolute right-[-10%] top-0 w-[140%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#52b788] to-transparent rotate-[-35deg] opacity-70 " />
                {/* Secondary lines */}
                <div className="absolute right-[-12%] top-[15%] w-[150%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#95d5b2] to-transparent rotate-[-32deg] opacity-60" />
                <div className="absolute right-[-8%] top-[30%] w-[130%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-28deg] opacity-50" />
                <div className="absolute right-[-15%] top-[50%] w-[160%] h-[2px] bg-gradient-to-l from-[#2d6a4f] via-[#74c69d] to-transparent rotate-[-33deg] opacity-50" />
                <div className="absolute right-[-10%] top-[70%] w-[120%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-30deg] opacity-40" />
                <div className="absolute right-[-10%] top-[80%] w-[120%] h-[2px] bg-gradient-to-l from-[#1b4332] via-[#52b788] to-transparent rotate-[-30deg] opacity-40" />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto space-y-2">
                {projects.map((project, idx) => (
                    <div
                        key={project.id}
                        className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-stretch gap-6 rounded-2xl shadow-2xl p-6`}
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2 px-1 md:px-1">
                            <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/7] bg-transparent rounded-lg overflow-hidden flex items-center justify-center">
                                {project.link ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="max-w-full max-h-full object-contain hover:opacity-90 transition-opacity"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/800x400?text=' + project.title;
                                            }}
                                        />
                                    </a>
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="max-w-full max-h-full object-contain"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/800x400?text=' + project.title;
                                        }}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Text */}
                        <div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col justify-center h-full">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{project.title}</h2>
                            <p className="text-white mb-4">{project.description}</p>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2"
                                >
                                    <span className="text-white transition-colors group-hover:text-blue-400">Download on Play Store</span>
                                </a>
                            )}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.map((tech, i) => {
                                    const icon = getIcon(tech);
                                    return (
                                        <span key={i} className="flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                                            {icon && (
                                                <img src={icon} alt={tech} className="w-4 h-4" />
                                            )}
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center mt-15">
                <div className="w-full md:w-3/4 lg:w-[900px] bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">See something interesting?</h3>
                        <h3 className="text-1xl md:text-2xl text-white">Feel free to contact me.</h3>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <a
                            href="mailto:Dahl.Jonathan@hotmail.com?subject=Project%20Inquiry"
                            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-md whitespace-nowrap"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M2.94 6.94a1.5 1.5 0 012.12 0L10 11.88l4.94-4.94a1.5 1.5 0 112.12 2.12l-6 6a1 1 0 01-1.32.08l-.1-.08-6-6a1.5 1.5 0 010-2.12z" /></svg>
                            <span className="whitespace-nowrap">Email me</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/dahljonathanhendry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-white/10 text-emerald-200 hover:text-white px-4 py-2 rounded-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v12H0V8zm7.5 0h4.78v1.64h.07c.67-1.27 2.3-2.61 4.72-2.61 5.04 0 5.97 3.32 5.97 7.64V20H18.4v-6.02c0-1.44-.03-3.29-2-3.29-2 0-2.3 1.56-2.3 3.18V20H7.5V8z" /></svg>
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="/CV%20-%20Jonathan%20Dahl.pdf"
                            download
                            className="inline-flex items-center gap-2 bg-white/5 text-emerald-200 hover:text-white px-4 py-2 rounded-lg border border-white/10 whitespace-nowrap"
                        >
                            <span className="text-emerald-400">⬇️</span>
                            <span className="whitespace-nowrap">Download CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
