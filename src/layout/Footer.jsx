import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL } from "../data/constants";
import LaserFlow from "../components/LaserFlow";

const socialLinks = [
  { icon: Github, href: GITHUB_URL, label: "GitHub" },
  { icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = (new Date()).getFullYear(); 
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              Arnav<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Arnav Umarkar. Built with passion and code. 
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* <div
        className="absolute h-[800%] w-full bottom-0 right-0"
      >
        <LaserFlow
              color="#FF4444"
              // color="#4A9EFF"
              horizontalBeamOffset={0.32}
              verticalBeamOffset={-0.375}
              flowSpeed={0.35}
              verticalSizing={33.8}
              horizontalSizing={0.5}
              fogIntensity={1}
              fogScale={0.25}
              wispSpeed={12.0}
              wispIntensity={7.0}
              flowStrength={0.3}
              decay={1.2}
              falloffStart={2.0}
              fogFallSpeed={0.8}
              wispDensity={1.2}
              mouseTiltStrength={0}
              className="w-full h-full"
            />
        </div> */}
    </footer>
  )
}