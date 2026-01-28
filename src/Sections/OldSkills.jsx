import { ChevronDown } from "lucide-react";

const OldSkills = () => {
	const skills = [
		"React",
		"Node.js",
		"C++",
		"Java",
		"Next.js",
		"JavaScript",
		"Express.js",
		"REST APIs",
		"MongoDB",
		"MySQL",
		"Render",
		"Vercel",
		"Tailwind CSS",
		"Git",
		"GitHub Actions",
		"Data Structures & Algorithms",
		"Problem Solving",
	];
	return (
		<section>
			{/* Skills Section */}
			<div className="mt-20 animate-fade-in animation-delay-600">
				<p className="text-sm text-muted-foreground mb-6 text-center">
					Technologies I work with
				</p>
				<div className="relative overflow-hidden">
					<div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
					<div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
					<div className="flex animate-marquee">
						{[...skills, ...skills].map((skill, idx) => (
							<div key={idx} className="shrink-0 px-8 py-4">
								<span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transtion-colors">
									{skill}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Scroll */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-10 ">
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
export default OldSkills;
