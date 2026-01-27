import { useEffect, useState } from "react";
import { Footer } from "./layout/Footer";
import Navbar from "./layout/Navbar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Experience from "./Sections/Experience";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Testimonials from "./Sections/Testimonials";
import { X } from "lucide-react";
import { RESUME_DRIVE_ID } from "./data/constants";

const App = () => {
	const [showCv, setShowCv] = useState(false);

	useEffect(() => {

		const disableScroll = () => {
			document.body.style.overflow = "hidden";
			console.log("Mouse entered")
		}
		const enableScroll = () => {
			document.body.style.overflow = "";
		}
		
		const pdfViewer = document.getElementById('pdf-viewer');
		pdfViewer?.addEventListener('mouseenter', disableScroll);
		pdfViewer?.addEventListener('mouseleave', enableScroll);
		if(!pdfViewer) document.body.style.overflow=""; // this is important since mouseleave is not recorded when the component is closed using close button
		
		return () => {
			pdfViewer?.removeEventListener('mouseenter', disableScroll);
			pdfViewer?.removeEventListener('mouseleave', enableScroll);
		}
		
	}, [showCv])

	return (
		<>
			{showCv && (
				<div className="sticky top-1/2 h-0 w-[99vw] flex justify-center z-100">
					<div id="pdf-viewer" className="absolute -translate-y-1/2 w-[85vw] h-[80vh] md:w-[50vw] md:h-[90vh]">
						<button
							className="absolute -right-3.5 -top-3 z-100 p-2 bg-surface rounded-full hover:text-red-500 hover:bg-zinc-800 cursor-pointer border-2 border-red-500/50 hover:border-red-500 transition-all"
							onClick={() => setShowCv(false)}
						>
							<X />
						</button>
						<iframe
							src={ "https://drive.google.com/file/d/" + RESUME_DRIVE_ID + "/preview" }
							title="PDF Preview"
							className="h-full w-full rounded-xl"
						/>
						<a
						  href={ "https://drive.google.com/uc?export=download&id=" + RESUME_DRIVE_ID }
						  target="_blank"
						  rel="noopener noreferrer"
						  className="absolute bottom-4 right-4 z-10 rounded-lg bg-black/70 px-4 py-2 text-white"
						>
						  ⬇ Download PDF
						</a>
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
