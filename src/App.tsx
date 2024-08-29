// import Button from "components/Button";
// // Ensure the path matches your file name
// import Badge from "components/Badge"; // Ensure the path matches your file name

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "components/Card"; 

import { GraduationCap, Briefcase, Award } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Component() {
  const techStack = {
    "Programming Languages": ["Python", "C++"],
    "Web Technologies": ["HTML", "CSS", "JavaScript"],
    "Cloud Platforms": ["Amazon Web Services (AWS)", "Google Cloud"],
    "AI & Machine Learning": ["AutoGPT", "Transformer Models", "BERT Model"],
    "Other Skills": [
      "Android Development",
      "Electronics",
      "Communications Engineering",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Profile Photo Section */}
      <motion.div
        className="flex flex-col items-center pt-16 pb-8 bg-gradient-to-b from-blue-900 to-black"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-438nrdsNxwewdlU7eShE8N3fs6X0Yg.jpeg"
            alt="Md Yunus Profile"
            width={1920}
            height={1080}
            style={{ objectFit: "cover" }} // Updated for correct style usage
            className="transition-all duration-300 hover:scale-110"
          />
        </div>
        <motion.h1 variants={fadeIn} className="text-4xl font-bold mb-2">
          MD YUNUS
        </motion.h1>
        <motion.p variants={fadeIn} className="text-xl mb-4">
          Founder @ Virtual Study Buddy | Open source contributor, Google Cloud
          Study Jam participant
        </motion.p>
      </motion.div>

      {/* Summary Section */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.div variants={fadeIn}>
          <Card className="bg-gray-100 text-gray-900">
            <CardHeader>
              <CardTitle className="text-2xl">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At the helm of Virtual Study Buddy, we're revolutionizing study
                sessions with a chat-based bot, integrating AutoGPT GitHub
                repositories to support students in programming languages like
                Python and C++. As a B.Tech student at Guru Nanak Dev
                University, I'm honing my technical acumen in Electronics and
                Communications Engineering, blending academic rigor with
                practical innovation.
              </p>
              <p className="mt-4">
                Embracing the role of an Indigo Squad Member at Mood Indigo IIT
                Bombay, I channel my creativity into fostering a culture of
                ingenuity. My commitment to learning is exemplified through
                certifications in Cyber Security and Machine Learning,
                equipping me with the knowledge to push the boundaries in AI.
                I'm driven by the potential to influence education and society
                through technology.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl font-semibold mb-8 text-center"
        >
          Education
        </motion.h2>
        <motion.div className="space-y-8" variants={stagger}>
          <motion.div variants={fadeIn}>
            <Card className="bg-gray-100 text-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2" /> Guru Nanak Dev University,
                  Amritsar
                </CardTitle>
                <CardDescription>
                  Bachelor of Technology - BTech, Electronics and Communications
                  Engineering (July 2023 - Present)
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="bg-gray-100 text-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2" /> R S M PUBLIC SCHOOL, SUPAUL
                </CardTitle>
                <CardDescription>
                  INTERMEDIATE, SCIENCE (April 2020 - March 2022)
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl font-semibold mb-8 text-center"
        >
          Experience
        </motion.h2>
        <motion.div className="space-y-8" variants={stagger}>
          <motion.div variants={fadeIn}>
            <Card className="bg-gray-100 text-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2" /> Virtual Study Buddy
                </CardTitle>
                <CardDescription>
                  Founder (January 2024 - Present)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Founded Virtual Study Buddy, leveraging AutoGPT GitHub
                    repositories to create a chat-based bot with document and
                    file upload capabilities, proficient in multiple programming
                    languages.
                  </li>
                  <li>
                    Programmed, optimized, and continuously upgraded the bot's
                    features while working on content plagiarism detection to
                    ensure originality.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="bg-gray-100 text-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2" /> Mood Indigo IIT Bombay
                </CardTitle>
                <CardDescription>
                  Indigo Squad Member (August 2023 - Present)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Channeling creativity to foster a culture of ingenuity in one
                  of India's largest college cultural festivals.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="bg-gray-100 text-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2" /> Hacktoberfest
                </CardTitle>
                <CardDescription>
                  Open Source Contributor (October 2023 - November 2023)
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Card className="bg-gray-100 text-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2" /> GDSC - GNDU
                </CardTitle>
                <CardDescription>
                  Google Cloud Study Jam Participant (September 2023 - October
                  2023)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Completed GenAI & Cloud Computing Foundation Course.</li>
                  <li>Became a Cloud Shell Expert.</li>
                  <li>Ranked 2nd highest score in the course.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl font-semibold mb-8 text-center"
        >
          Skills & Certifications
        </motion.h2>
        <motion.div className="space-y-8" variants={stagger}>
          {Object.entries(techStack).map(([category, skills], index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-gray-100 text-gray-900">
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <motion.div variants={fadeIn}>
            <Card className="bg-gray-100 text-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2" /> Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cyber Security Certification</li>
                  <li>Machine Learning Certification</li>
                  <li>Cloud Shell Expert Certification</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}