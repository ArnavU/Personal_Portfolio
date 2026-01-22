import { useState } from "react";
import { Footer } from "./layout/Footer";
import Navbar from "./layout/Navbar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Experience from "./Sections/Experience";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Testimonials from "./Sections/Testimonials";
import { X } from "lucide-react";

const App = () => {
	const [showCv, setShowCv] = useState(false);

	return (
		<>
			{showCv && (
				<div className="sticky top-1/2 h-0 w-[99vw] flex justify-center z-100">
					<div className="absolute -translate-y-1/2 w-[85vw] h-[80vh] md:w-[50vw] md:h-[90vh]">
						<button 
              className="absolute -right-3.5 -top-3 z-100 p-2 bg-surface rounded-full hover:text-red-500 hover:bg-zinc-800 cursor-pointer border-2 border-red-500/50 hover:border-red-500 transition-all"
              onClick={()=>setShowCv(false)}
            >
							<X />
						</button>
						<iframe
							src={"/resume.pdf"}
							title="PDF Preview"
							className="h-full w-full rounded-xl"
						/>
					</div>
				</div>
			)}
			<div className="min-h-screen overflow-x-hidden relative">
				<Navbar />
				<main>
					<Hero setShowCv={setShowCv} />
					<About />
					<Projects />
					<Experience />
					<Testimonials />
					<Contact />
				</main>
				<Footer />
			</div>
		</>
	);
};
export default App;
