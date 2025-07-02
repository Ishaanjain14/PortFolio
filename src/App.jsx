import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodingninjas,
  SiCodeforces,
} from 'react-icons/si';

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans scroll-smooth min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md py-4 px-8 flex justify-between items-center border-b border-gray-700">
        <h1 className="font-bold text-xl text-purple-400">Ishaan Jain</h1>
        <div className="space-x-8 text-sm md:text-base text-white flex items-center">
          <NavLink name="Home" href="#hero" />
          <NavLink name="About" href="#about" />
          <NavLink name="Experience" href="#experience" />
          <NavLink name="Education" href="#education" />
          <NavLink name="Projects" href="#projects" />
          <NavLink name="Skills" href="#skills" />
          <NavLink name="Achievements" href="#achievements" />
          <NavLink name="Contact" href="#contact" />
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 gap-12 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi There! 👋<br />I'M <span className="text-purple-400">ISHAAN JAIN</span>
          </h1>
          <p className="text-purple-300 text-xl font-medium">
            Freelancer | Developer | Tech Enthusiast
          </p>
          <a
            href="https://drive.google.com/file/d/1GQ7uIWsHH5VAfmaRXPWMswvlInP1Deq0/view"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 px-6 py-3 border border-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:border-purple-500 transition"
          >
            View Resume
          </a>
        </motion.div>

        <img
  src="/profile.jpeg"
  alt="Ishaan Jain"
  className="w-72 md:w-80 rounded-full object-cover border-4 border-purple-400"
/>

      </section>

      {/* About Section */}
      <Section id="about" title="LET ME INTRODUCE MYSELF">
        <p className="text-lg leading-relaxed max-w-3xl space-y-4">
          I’m an enthusiastic developer who fell in love with programming—and along the way, I’ve built some pretty exciting things! 🚀<br /><br />
          I’m fluent in languages like <span className="text-purple-300 font-semibold">C++, JavaScript, and Python</span>.<br /><br />
          My interests lie in crafting impactful <em className="text-purple-300">Web Applications</em>, with a strong inclination toward <em className="text-purple-300">problem-solving and algorithmic thinking</em>.<br /><br />
          I have solved over <span className="font-semibold text-purple-300">500+ DSA problems</span> across platforms like LeetCode, GFG, and Codeforces.<br /><br />
          I enjoy building full-stack projects using <span className="font-semibold text-purple-300">Node.js</span> and frameworks like <span className="font-semibold text-purple-300">React.js and Next.js</span>.
        </p>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="EXPERIENCE">
        <div className="space-y-6 text-lg text-gray-300">
          <div>
            <h3 className="font-bold text-purple-300">Web Development Intern @SmartBiz Technologies</h3>
            <p>June 2025 – July 2025 | React, Tailwind, REST APIs</p>
            <p>Worked on modular frontend components and improved user performance by 20%.</p>
            <p>Improved the User Interface of current Solutions Related to Income Tax Filing</p>
          </div>
        </div>
      </Section>

            {/* Education Section */}
      <Section id="education" title="EDUCATION">
        <div className="space-y-4 text-lg text-gray-300">
          <div>
            <h3 className="font-bold text-purple-300">NIT Jalandhar</h3>
            <p>B.Tech in Information Technology (2023 – Present)</p>
            <p>CGPA: 8.38</p>
          </div>
          <div>
            <h3 className="font-bold text-purple-300">Cambridge International School</h3>
            <p>Class 12 (2022–23) | 93% | CBSE</p>
            <p>Class 10 (2020–21) | 90% | CBSE</p>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="PROJECTS">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="QuizCraft"
            tech="Node.js, React.js, MongoDB"
            link="https://github.com/Ishaanjain14/Quiz"
          >
            Live quiz platform with user roles, Excel integration, and anti-cheat.
          </ProjectCard>
          <ProjectCard
            title="ML Trading Bot"
            tech="Python, Alpaca, HTML/CSS, JS"
            link="https://github.com/Ishaanjain14/Ml-Trading-Bot"
          >
            Python-based bot tested on Alpaca with a 7.2% simulated return.
          </ProjectCard>
          <ProjectCard
            title="ScrapCon"
            tech="Flutter, Node.js, MongoDB"
            link="https://github.com/Ishaanjain14/scrapconApp"
          >
            Industrial scrap trading platform with secure real-time interactions.
          </ProjectCard>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="TECH STACK">
        <ul className="list-disc pl-5 space-y-2 text-lg text-gray-300">
          <li><strong>Languages:</strong> C, C++, JavaScript, Python, HTML, CSS, SQL</li>
          <li><strong>Frameworks:</strong> Node.js, Next.js, React.js, Express.js, Tailwind CSS</li>
          <li><strong>Tools:</strong> Git, GitHub, Figma, VS Code, Postman</li>
          <li><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL</li>
        </ul>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="ACHIEVEMENTS">
        <ul className="list-disc pl-5 space-y-2 text-lg text-gray-300">
          <li>Top 10% of my academic batch</li>
          <li>International Rank 12 – International Mathematics Olympiad (IMO) 2021</li>
          <li>1st Runner Up – Code Relay 2025</li>
          <li>Member – CyberNauts & Web Dev Club</li>
          <li>500+ DSA problems solved (LeetCode, GFG, Coding Ninjas)</li>
        </ul>
      </Section>

      {/* Coding Profiles */}
      <Section id="coding" title="CODING PROFILES">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg text-purple-300">
          <a href="https://leetcode.com/Ishaanjain14/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
            <SiLeetcode className="text-yellow-400" /> LeetCode
          </a>
          <a href="https://auth.geeksforgeeks.org/user/ishaanjain14" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
            <SiGeeksforgeeks className="text-green-500" /> GeeksforGeeks
          </a>
          <a href="https://www.codingninjas.com/studio/profile/7a6d0b48-79d1-43f5-a418-7d8810e5e396" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
            <SiCodingninjas className="text-orange-500" /> Coding Ninjas
          </a>
          <a href="https://codeforces.com/profile/Ishaanjain14" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
            <SiCodeforces className="text-red-500" /> Codeforces
          </a>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="GET IN TOUCH">
        <p className="text-lg text-gray-300 mb-6">
          Feel free to reach out for opportunities, collaborations, or just to connect!
        </p>
        <div className="text-purple-300 space-y-4">
          <p>Email: <a href="mailto:jainishaan987@gmail.com" className="hover:underline">jainishaan987@gmail.com</a></p>
          <p>Phone: <a href="tel:+919915035349" className="hover:underline">+91 99150 35349</a></p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700 mt-10 text-gray-500 text-sm">
        <p>Find me on</p>
        <div className="flex justify-center mt-2 space-x-6 text-xl text-purple-400">
          <a href="https://github.com/Ishaanjain14" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/ishaan--jain14" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/ishaanjain1412" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/ishaan__jain14/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Ishaan Jain</p>
      </footer>
    </div>
  );
}

// Reusable Components
function NavLink({ name, href }) {
  return (
    <a href={href} className="hover:text-purple-400 transition">
      {name}
    </a>
  );
}

function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="px-6 md:px-20 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-8 text-purple-400 text-center md:text-left">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function ProjectCard({ title, tech, link, children }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.03 }}
      className="block p-6 border border-gray-700 rounded-2xl shadow-lg bg-gray-900 space-y-3 transition-transform"
    >
      <h3 className="font-bold text-xl text-purple-300">{title}</h3>
      <p className="text-gray-300">{children}</p>
      <p className="text-sm text-gray-500">Tech: {tech}</p>
    </motion.a>
  );
}
