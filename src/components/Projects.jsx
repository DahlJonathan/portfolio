

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
            <div className="relative z-10 max-w-5xl mx-auto space-y-10">
                {projects.map((project, idx) => (
                    <div
                        key={project.id}
                        className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-6  rounded-2xl shadow-2xl p-6`}
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2">
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
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h2>
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
        </div>
    );
};

export default Projects;
