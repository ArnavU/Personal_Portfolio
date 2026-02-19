import { ChevronDown } from "lucide-react";

const Skills = () => {
    const skills = [
        { icon: "react", name: "React", description: "UI Library", isIcon: false, src: "/skills_svg/react.svg" },
        { icon: "nodejs", name: "Node.js", description: "Runtime", isIcon: false, src: "/skills_svg/nodejs.svg" },
        { icon: "expressjs", name: "Express.js", description: "Backend Framework", isIcon: false, src: "/skills_svg/expressjs.svg" },
        { icon: "js", name: "JavaScript", description: "Interaction", isIcon: false, src: "/skills_svg/js.svg" },
        { icon: "tailwindcss", name: "Tailwind CSS", description: "Styling", isIcon: false, src: "/skills_svg/tailwindcss.svg" },
        { icon: "mongodb", name: "MongoDB", description: "Database", isIcon: false, src: "/skills_svg/mongodb.svg" },
        { icon: "mysql", name: "MySQL", description: "Database", isIcon: false, src: "/skills_svg/mysql.svg" },
        { icon: "nextjs", name: "Next.js", description: "React Framework", isIcon: false, src: "/skills_svg/nextjs.svg" },
        { icon: "c++", name: "C++", description: "Programming Language", isIcon: false, src: "/skills_svg/c++.svg" },
        { icon: "java", name: "Java", description: "Programming Language", isIcon: false, src: "/skills_svg/java.svg" },
        { icon: "restapi", name: "REST APIs", description: "API Design", isIcon: false, src: "/skills_svg/restapi.svg" },
        { icon: "postman", name: "Postman", description: "API Testing", isIcon: false, src: "/skills_svg/postman.svg" },
        { icon: "render", name: "Render", description: "Deployment", isIcon: false, src: "/skills_svg/render.svg" },
        { icon: "vercel", name: "Vercel", description: "Deployment", isIcon: false, src: "/skills_svg/vercel.svg" },
        { icon: "git", name: "Git", description: "Version Control", isIcon: false, src: "/skills_svg/git.svg" },
        { icon: "github", name: "GitHub Actions", description: "CI/CD", isIcon: false, src: "/skills_svg/github.svg" },
        { icon: "github", name: "Data Structures", description: "Core Skill", isIcon: false, src: "/skills_svg/dsa.svg" },
        { icon: "problemsolving", name: "Problem Solving", description: "Core Skill", isIcon: false, src: "/skills_svg/problemsolving.svg" },
    ];
	return (
		<section className="mb-28">
			{/* Skills Section */}
			<div className="mt-16 px-6 md:px-24 animate-fade-in animation-delay-600">
				<p className="text-sm text-muted-foreground mb-6 text-center">
					Skills and technologies I work with
				</p>
				<div className="relative overflow-hidden w-full flex flex-row flex-wrap justify-between gap-y-4">
					{skills.map((skill, idx) => (
                        <div 
                            key={idx}
                            className="w-[48%] md:w-[24%] p-2 border border-border hover:border-primary/30 rounded-xl flex flex-row gap-4 group transition-colors duration-150"
                        >
                            <div className="w-16 p-2 bg-surface rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-100">
                                {skill.isIcon
                                ? <> </>
                                : (
                                    <img 
                                        src={skill?.src}
                                        alt={skill?.name}
                                    />
                                )}
                            </div>
                            <div className="w-full text-sm">
                                <p className="text-foreground group-hover:text-primary transition-colors duration-150">{skill.name}</p>
                                <p className="text-muted-foreground transition-colors duration-150">{skill.description}</p>
                            </div>
                        </div>
                    ))}
				</div>
			</div>

			{/* Scroll */}
			<div className="relative left-1/2 top-2 -translate-x-1/2 animate-fade-in animation-delay-800 z-10 ">
				<a
					href="#about"
					className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
				>
					<span className="text-xs uppercase tracking-wide">
						Scroll
					</span>
					<ChevronDown className="w-6 h-6 animate-bounce" />
				</a>
			</div>
		</section>
	);
};
export default Skills;
