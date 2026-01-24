import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
	{
		quote: "Working with Arnav was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
		author: "Harshdeep Khartade",
		role: "VIIT - Pune",
		avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
	},
	{
		quote: "Arnav is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
		author: "Vedant Kavhar",
		role: "VIIT - Pune",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
	},
	{
		quote: "Not only is Arnav technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
		author: "Abhay Baral",
		role: "VIIT - Pune",
		avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
	},
	{
		quote: "Arnav's expertise in React and Node.Js helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
		author: "Rohan Nikumbh",
		role: "VIIT - Pune",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
	},
];

const Testimonials = () => {
  const tLen = testimonials.length;
	const [activeIdx, setActiveIdx] = useState(0);

	return (
		<section id="testimonials" className="py-32 relative">
			<div className="absolute top-1/2 left-0 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
						What People Say
					</span>
					<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
						Kind Words from{" "}
						<span className="font-serif italic font-normal text-white">
							amazing people
						</span>
					</h2>
				</div>

				{/* Testimonial Carousel */}
				<div className="max-w-4xl mx-auto transition-all">
					<div className="relative transition-all">
						{/* Main Testimonial */}
						<div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
							<div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
								<Quote className="w-6 h-6" />
							</div>

							<blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
								"{testimonials[activeIdx].quote}"
							</blockquote>

							<div className="flex items-center gap-4">
								<img
									src={testimonials[activeIdx].avatar}
									alt={testimonials[activeIdx].author}
									className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
								/>
                <div>
  								<div className="font-semibold">
  									{testimonials[activeIdx].author}
  								</div>
  								<div className="text-sm text-muted-foreground">
  									{testimonials[activeIdx].role}
  								</div>
                </div>
							</div>
						</div>

  					{/* Testimonials Navigation */}
  					<div className="flex items-center justify-center gap-4 mt-8">
  						<button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-100"
                onClick={() => setActiveIdx((prev) => (prev+tLen-1)%tLen)}
              >
  							<ChevronLeft />
  						</button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => {setActiveIdx(idx)}}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx===activeIdx
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-100"
                onClick={() => setActiveIdx(prev => (prev+1)%tLen)}
              >
                <ChevronRight />
              </button>
  					</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Testimonials;
