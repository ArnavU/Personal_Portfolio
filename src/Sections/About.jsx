import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
]


const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future, {" "}
              <span className="font-serif italic font-normal text-white">one component at a time.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a passionate software developer with a strong foundation in full-stack web development and hands-on experience building real-world applications. My journey began with curiosity about how web applications work and evolved into a deep focus on problem-solving and writing scalable, efficient code.
              </p>
              <p>
                I primarily work with the MERN stack (MongoDB, Express, React, Node.js) and enjoy building everything from intuitive user interfaces to robust backend systems. I’ve solved 1000+ data structures and algorithms problems on LeetCode, which has strengthened my analytical thinking and ability to tackle complex engineering challenges.
              </p>
              <p>
                Beyond development, I actively explore modern technologies, refine my problem-solving skills, and enjoy turning ideas into production-ready software. I’m always eager to learn, grow, and contribute to impactful engineering teams.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “My mission is to build reliable, scalable software grounded in strong engineering fundamentals — systems that are efficient, maintainable, and solve real-world problems.”
              </p>
            </div>
          </div> {/* Left Column End */}

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="text-lg font-semibold mb-2" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
export default About