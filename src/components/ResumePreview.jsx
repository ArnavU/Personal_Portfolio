import { X } from "lucide-react";
import PdfShimmer from "./PdfShimmer";
import { RESUME_DRIVE_ID } from "../data/constants";
import { useEffect, useState } from "react";

const ResumePreview = ({ setShowCv }) => {
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
        
		return () => {
			pdfViewer?.removeEventListener('mouseenter', disableScroll);
			pdfViewer?.removeEventListener('mouseleave', enableScroll);
            document.body.style.overflow = "";
		}
		
	}, [])

    const [loading, setLoading] = useState(true);
	return (
		<div className="sticky top-1/2 h-0 w-[99vw] flex justify-center z-100">
			<div
				id="pdf-viewer"
				className="absolute -translate-y-1/2 w-[85vw] h-[80vh] md:w-[50vw] md:h-[90vh]"
			>
				<button
					className="absolute -right-3.5 -top-3 z-100 p-2 bg-surface rounded-full hover:text-red-500 hover:bg-zinc-800 cursor-pointer border-2 border-red-500/50 hover:border-red-500 transition-all"
					onClick={() => {
						setShowCv(false);
						setLoading(true);
					}}
				>
					<X />
				</button>
				{loading && <PdfShimmer />}
				<iframe
					src={
						"https://drive.google.com/file/d/" +
						RESUME_DRIVE_ID +
						"/preview"
					}
					onLoad={() => setLoading(false)}
					title="PDF Preview"
					className="h-full w-full rounded-xl"
				/>
				<a
					href={
						"https://drive.google.com/uc?export=download&id=" +
						RESUME_DRIVE_ID
					}
					target="_blank"
					rel="noopener noreferrer"
					className="absolute bottom-20 border-2 md:bottom-4 right-4 z-10 rounded-lg bg-black/70 px-4 py-2 text-white"
				>
					⬇ Download PDF
				</a>
			</div>
		</div>
	);
};
export default ResumePreview;
