import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"
import logo from "../assets/images/jobprep-logo.png"

const industries = ["Software Engineering", "Data Science", "Marketing", "Finance", "Product Management"]

const experienceLevels = [
    { label: "Intern", desc: "Still in university or recent grad" },
    { label: "Fresher", desc: "0-1 years of experience" },
    { label: "Junior", desc: "1-3 years of experience" },
]

const interviewTypes = [
    {
        label: "HR Interview",
        desc: "Culture fit & soft skills",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
    },
    {
        label: "Technical",
        desc: "Algorithms & domain knowledge",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
    {
        label: "Behavioral",
        desc: "STAR method scenarios",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4.13a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
]

export default function InterviewSetupPage() {
    const navigate = useNavigate()
    const [selectedIndustry, setSelectedIndustry] = useState("Software Engineering")
    const [selectedLevel, setSelectedLevel] = useState("Intern")
    const [selectedType, setSelectedType] = useState("Technical")

    return (
        <div className="min-h-screen bg-gray-50 font-display flex flex-col">
            {/* Navbar */}
            <header className="border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="JobPrep" className="h-8" />
                        <span className="font-bold text-gray-900">JobPrep</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                        <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
                        <a href="#" className="hover:text-primary transition-colors">Resources</a>
                        <a href="#" className="hover:text-primary transition-colors">History</a>
                    </nav>
                    <div className="w-9 h-9 rounded-full bg-orange-200 flex items-center justify-center">
                        <span className="text-orange-700 font-bold text-sm">A</span>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
                <div className="mb-10 animate-entry">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Interview Setup</h1>
                    <p className="text-gray-500">Configure your mock interview session to get started.</p>
                </div>

                <div className="space-y-6">
                    {/* Industry Selection */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <div className="flex items-center gap-2 mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                            </svg>
                            <h2 className="font-bold text-gray-900 text-lg">Industry Selection</h2>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, staggerChildren: 0.05 }}
                            className="flex flex-wrap gap-3"
                        >
                            {industries.map((ind) => (
                                <motion.button
                                    key={ind}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedIndustry(ind)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedIndustry === ind
                                        ? "bg-primary text-white shadow-sm"
                                        : "bg-gray-50 border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                                        }`}
                                >
                                    {ind}
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>

                    {/* Experience Level */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <div className="flex items-center gap-2 mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <h2 className="font-bold text-gray-900 text-lg">Experience Level</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {experienceLevels.map(({ label, desc }, index) => (
                                <motion.button
                                    key={label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    onClick={() => setSelectedLevel(label)}
                                    className={`relative text-left p-4 rounded-xl border-2 transition-all ${selectedLevel === label
                                        ? "border-primary bg-blue-50"
                                        : "border-gray-100 bg-gray-50 hover:border-primary/40"
                                        }`}
                                >
                                    {selectedLevel === label && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute top-3 right-3"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </motion.div>
                                    )}
                                    <p className="font-bold text-gray-900 text-sm mb-1">{label}</p>
                                    <p className="text-xs text-gray-400">{desc}</p>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Interview Type */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <div className="flex items-center gap-2 mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <h2 className="font-bold text-gray-900 text-lg">Interview Type</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {interviewTypes.map(({ label, desc, icon }, index) => (
                                <motion.button
                                    key={label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    onClick={() => setSelectedType(label)}
                                    className={`relative text-center p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-3 ${selectedType === label
                                        ? "border-primary bg-blue-50 text-primary"
                                        : "border-gray-100 bg-gray-50 hover:border-primary/40 text-gray-500"
                                        }`}
                                >
                                    {selectedType === label && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute top-3 right-3"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </motion.div>
                                    )}
                                    {icon}
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">{label}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="mt-10 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Estimated duration: 30-45 minutes
                    </div>
                    <button
                        onClick={() => navigate("/live-interview")}
                        className="flex items-center gap-3 bg-primary text-white px-12 py-4 rounded-2xl font-bold hover:bg-primary-dark transition-all hover:shadow-lg text-base"
                    >
                        Start Interview
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                    <p className="text-xs text-gray-400">By starting, you agree to our terms of practice.</p>
                </div>
            </main>

            <footer className="border-t border-gray-50 py-6 px-6">
                <div className="max-w-3xl mx-auto flex justify-between items-center text-xs text-gray-400">
                    <span>© 2024 JobPrep AI. All rights reserved.</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Help Center</a>
                        <a href="#" className="hover:text-primary transition-colors">Feedback</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
