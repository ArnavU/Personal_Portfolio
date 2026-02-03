import { useEffect } from "react"

const CodingProfile = () => {
    useEffect(() => {
        fetch("/api/leetcode?username=arnav_umarkar")
        .then(res => res.json())
        .then((data) => {
            console.log("Leetcode Response data: ", data)
        });
    }, [])

    return (
        <section id="coding-profile" className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center gap-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-secondary-foreground text-sm font-medium tracking-widest uppercase">
                            Coding Profile
                        </h2>
                    </div>
                    
                    <a 
                        href="https://leetcode.com/arnavu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black w-full duration-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
                    >
                        <img 
                            src="https://leetcard.jacoblin.cool/arnavu?theme=dark&font=Inter&ext=heatmap" 
                            className="w-full h-auto" 
                            alt="LeetCode coding profile" 
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CodingProfile