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
          className="space-y-6 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi There! 👋<br />
            I'M <span className="text-purple-400">ISHAAN JAIN</span>
          </h1>

          <p className="text-purple-300 text-xl font-medium">
            Software Engineer | Full Stack Developer | AI & ML Enthusiast
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Information Technology student at NIT Jalandhar with software
            engineering experience at Microsoft, focused on scalable systems,
            cloud infrastructure, full-stack development, and problem solving.
          </p>

          <a
            href="https://drive.google.com/file/d/1BdI88skmq-1ujeOwFM8OwCHRdjQfP3I5/view?usp=sharing"
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

      {/* About */}
      <Section id="about" title="LET ME INTRODUCE MYSELF">
        <p className="text-lg leading-relaxed max-w-4xl">
          I’m an Information Technology student at NIT Jalandhar with a strong
          interest in software engineering, cloud technologies, full-stack
          development, AI/ML, and algorithmic problem solving.
          <br /><br />
          I enjoy building practical applications and working on systems that
          combine strong engineering fundamentals with real-world impact. I
          have solved over <span className="font-semibold text-purple-300">1000+
          DSA problems</span> across competitive programming platforms.
          <br /><br />
          My technical experience spans C++, Java, JavaScript, Python, React,
          Node.js, databases, Linux, Docker, and cloud infrastructure.
        </p>
      </Section>

      {/* Experience */}
      <Section id="experience" title="EXPERIENCE">
        <div className="space-y-8 text-lg text-gray-300">
          <div className="border border-gray-700 rounded-2xl p-6 bg-gray-900/60">
            <h3 className="font-bold text-xl text-purple-300">
              Software Engineer Intern @ Microsoft
            </h3>
            <p className="text-gray-400 mt-1">
              June 2026 – July 2026 | Noida, India
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li>
                Worked on Azure Boost, porting Microsoft’s Autopilot Public Key
                Infrastructure (APPKI) stack from ARM/Overlake to AMD64 Linux,
                enabling end-to-end certificate provisioning.
              </li>
              <li>
                Integrated Microsoft’s KMPP key isolation framework in both
                in-process and out-of-process modes for secure private-key
                operations across the machine identity lifecycle.
              </li>
              <li>
                Developed an observability dashboard covering certificate
                issuance, KMPP operations, D-Bus communication, renewal,
                rotation metrics, and provisioning telemetry.
              </li>
            </ul>

            <p className="text-sm text-gray-500 mt-4">
              Tech: C++, Linux, CMake, OpenSSL, PKI, X.509, mTLS, D-Bus,
              Python, dm-verity
            </p>
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="EDUCATION">
        <div className="space-y-6 text-lg text-gray-300">
          <div>
            <h3 className="font-bold text-purple-300">
              Dr. B R Ambedkar National Institute of Technology, Jalandhar
            </h3>
            <p>B.Tech in Information Technology (2023 – Present)</p>
            <p>CGPA: 8.64</p>
          </div>

          <div>
            <h3 className="font-bold text-purple-300">
              Cambridge International School
            </h3>
            <p>Class 12 (2023) | 93% | CBSE</p>
            <p>Class 10 (2021) | 90% | CBSE</p>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="PROJECTS">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Crop Disease Detection using Lightweight DL Models"
            tech="Python, PyTorch, OpenCV, NumPy, CNNs, CBAM"
            link="#"
          >
            Built lightweight deep learning models for crop disease detection,
            achieving 98.11% accuracy and optimizing models for edge devices
            and real-time applications.
          </ProjectCard>

          <ProjectCard
            title="Automated Trading Bot with Real-Time Stock Sentiment Analysis"
            tech="Python, Flask, FinBERT, React, Tailwind, PyTorch, Recharts"
            link="https://github.com/Ishaanjain14/Ml-Trading-Bot"
          >
            Built an automated trading platform using FinBERT sentiment and
            technical indicators, with risk controls, backtesting, and a
            real-time performance dashboard.
          </ProjectCard>

          <ProjectCard
            title="QuizCraft - Real-Time Quiz & Competition Platform"
            tech="Node.js, Express, React, Socket.IO, JavaScript"
            link="https://github.com/Ishaanjain14/Quiz"
          >
            Developed a real-time quiz platform with authentication, RBAC,
            anti-cheat mechanisms, Excel uploads, and support for concurrent
            quizzes with 30+ users.
          </ProjectCard>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="TECH STACK">
        <ul className="list-disc pl-5 space-y-3 text-lg text-gray-300">
          <li>
            <strong>Languages:</strong> C, C++, Java, JavaScript, Python, HTML,
            CSS, SQL
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong> Node.js, Next.js, React.js,
            Express.js, Tailwind CSS
          </li>
          <li>
            <strong>Tools:</strong> Git/GitHub, Figma, VS Code, Postman, Docker,
            Google Colab, Kaggle
          </li>
          <li>
            <strong>Databases:</strong> MySQL, MongoDB, PostgreSQL
          </li>
          <li>
            <strong>Relevant Coursework:</strong> Data Structures, Design and
            Analysis of Algorithms, OOP, Computer Networks, DBMS, Operating
            Systems, AI, ML, Software Engineering
          </li>
        </ul>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="ACHIEVEMENTS">
        <ul className="list-disc pl-5 space-y-3 text-lg text-gray-300">
          <li>Among the top 10% of students in my academic year.</li>
          <li>
            Co-authored an IEEE conference paper on lightweight deep learning
            frameworks for plant disease detection, accepted at ICSCCC 2026.
          </li>
          <li>
            International Rank 12 in the International Mathematics Olympiad,
            placing in the top 1% globally.
          </li>
          <li>1000+ DSA problems solved across coding platforms.</li>
          <li>
            LeetCode Rating: 1669; ranked 948 out of 34,000+ participants in
            LeetCode Biweekly Contest 164.
          </li>
          <li>
            1st Runner-Up, Code Relay 2025, among 50+ contenders.
          </li>
          <li>
            Certifications: Web Development + DevOps Cohort (100xDevs) and
            Data Structures & Algorithms using C/C++ (Udemy).
          </li>
          <li>
            Placement Representative; Member of Web Development and Prayaas
            Club at NITJ.
          </li>
        </ul>
      </Section>

      {/* Coding Profiles */}
      <Section id="coding" title="CODING PROFILES">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-lg text-purple-300">
          <ProfileLink
            href="https://leetcode.com/ishaan__jain14/"
            icon={<SiLeetcode className="text-yellow-400" />}
            name="LeetCode"
          />
          <ProfileLink
            href="https://www.geeksforgeeks.org/user/jainishje7m/"
            icon={<SiGeeksforgeeks className="text-green-500" />}
            name="GeeksforGeeks"
          />
          <ProfileLink
            href="https://www.naukri.com/code360/profile/Ishaanjain"
            icon={<SiCodingninjas className="text-orange-500" />}
            name="Coding Ninjas"
          />
          <ProfileLink
            href="https://codeforces.com/profile/jainishaan987"
            icon={<SiCodeforces className="text-red-500" />}
            name="Codeforces"
          />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="GET IN TOUCH">
        <p className="text-lg text-gray-300 mb-6">
          Feel free to reach out for opportunities, collaborations, or just to
          connect!
        </p>

        <div className="text-purple-300 space-y-4">
          <p>
            Email:{' '}
            <a
              href="mailto:jainishaan987@gmail.com"
              className="hover:underline"
            >
              jainishaan987@gmail.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+919915035349" className="hover:underline">
              +91 99150 35349
            </a>
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700 mt-10 text-gray-500 text-sm">
        <p>Find me on</p>
        <div className="flex justify-center mt-2 space-x-6 text-xl text-purple-400">
          <a
            href="https://github.com/Ishaanjain14"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ishaan--jain14"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/ishaanjain1412"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/ishaan__jain14/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Ishaan Jain</p>
      </footer>
    </div>
  );
}

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
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noreferrer' : undefined}
      whileHover={{ scale: 1.03 }}
      className="block p-6 border border-gray-700 rounded-2xl shadow-lg bg-gray-900 space-y-3 transition-transform"
    >
      <h3 className="font-bold text-xl text-purple-300">{title}</h3>
      <p className="text-gray-300">{children}</p>
      <p className="text-sm text-gray-500">Tech: {tech}</p>
    </motion.a>
  );
}

function ProfileLink({ href, icon, name }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 hover:underline"
    >
      {icon} {name}
    </a>
  );
}
