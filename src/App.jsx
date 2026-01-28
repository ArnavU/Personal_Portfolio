import { useState } from "react";
import { Footer } from "./layout/Footer";
import Navbar from "./layout/Navbar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Experience from "./Sections/Experience";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Testimonials from "./Sections/Testimonials";
import Skills from "./Sections/Skills";
import ResumePreview from "./components/ResumePreview";

const App = () => {
	const [showCv, setShowCv] = useState(false);

	return (
		<>
			{showCv && (
				<ResumePreview setShowCv={setShowCv} />
			)} 
			<div className="min-h-screen overflow-x-hidden relative">
				<Navbar />
				<main>
					<Hero setShowCv={setShowCv} />
					<Skills />
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
