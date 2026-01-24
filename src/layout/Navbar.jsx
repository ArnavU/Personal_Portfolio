import { useEffect, useRef, useState } from "react"
import { Button } from "../components/Button";
import {Menu, X} from "lucide-react"


const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects"},
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuBtnRef = useRef(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        const handleOutsieClick = (e) => {
            if(menuBtnRef.current?.contains(e.target) || mobileMenuRef.current?.contains(e.target)) {
                return;
            }
            setIsMobileMenuOpen(false);
        }

        window.addEventListener("click", handleOutsieClick);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("click", handleOutsieClick);
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    return (
        <header
            className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
                isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
            } z-50`}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a
                    href="#"
                    className="text-xl transition-colors duration-75 font-bold tracking-tight hover:text-primary"
                >
                    Arnav<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <a href="#contact">
                    <div className="hidden md:block">
                        <Button size="sm">Contact Me</Button>
                    </div>
                </a>

                {/* Mobile Menu Button */}
                <button
                    ref={menuBtnRef}
                    className="relative md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {/* self closing div to cover the "X" SVG - svg hinders the outside click functionality */}
                    <div className="w-full h-full absolute inset-0" /> 
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav> 

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div ref={mobileMenuRef} className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg text-muted-foreground hover:text-foreground py-2"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a href="#contact">
                            <Button onClick={() => setIsMobileMenuOpen(false)}>
                                Contact Me
                            </Button>
                        </a>
                    </div>
                </div>
            )}
                   
        </header>
    )
}
export default Navbar