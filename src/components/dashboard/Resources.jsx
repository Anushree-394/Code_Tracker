import React from 'react';
import { BookOpen, Video, FileText, Code, ExternalLink, Sparkles } from 'lucide-react';

const ResourceCard = ({ title, description, type, link }) => {
    let Icon = BookOpen;
    if (type === 'video') Icon = Video;
    if (type === 'article') Icon = FileText;
    if (type === 'practice') Icon = Code;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block group h-full">
            <div className="relative overflow-hidden h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-0.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_2rem_-0.5rem_#06b6d4]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col rounded-[15px] bg-slate-950/90 p-5 backdrop-blur-3xl">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-400 ring-1 ring-white/10 group-hover:scale-110 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                            <Icon size={20} />
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-400 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                            {type}
                        </span>
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                        {title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
                        {description}
                    </p>

                    <div className="mt-auto pt-4 flex items-center text-xs font-medium text-cyan-400 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        Open Resource <ExternalLink size={12} className="ml-1" />
                    </div>
                </div>
            </div>
        </a>
    );
};

const CompanyCard = ({ name, logo, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
        <div className="relative overflow-hidden rounded-xl bg-white/5 p-px transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex items-center justify-between rounded-[11px] bg-slate-900/50 p-4 backdrop-blur-sm border border-white/5 group-hover:border-white/10">
                <div className="flex items-center gap-4">
                    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-sm">
                        <img
                            src={logo}
                            alt={name}
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                e.target.parentNode.innerText = name[0];
                                e.target.parentNode.className += " flex items-center justify-center text-xl font-bold text-slate-900 h-full w-full";
                            }}
                        />
                    </div>
                    <span className="font-semibold text-slate-200 transition-colors group-hover:text-white">{name}</span>
                </div>
                <ExternalLink
                    size={16}
                    className="text-slate-500 transition-all duration-300 group-hover:text-fuchsia-400 group-hover:translate-x-1"
                />
            </div>
        </div>
    </a>
);

const Resources = ({ category }) => {
    const allResources = {
        DSA: [
            {
                title: "Striver's SDE Sheet",
                description: "Top 180+ coding interview questions curated by Striver.",
                type: "practice",
                link: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/"
            },
            {
                title: "Blind 75 LeetCode",
                description: "75 essential LeetCode questions to cover all common patterns.",
                type: "practice",
                link: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions"
            },
            {
                title: "Algorithms by Abdul Bari",
                description: "Deep dive into algorithm analysis and design.",
                type: "video",
                link: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O"
            },
            {
                title: "Introduction to Algorithms",
                description: "Comprehensive textbook on algorithms and data structures.",
                type: "article",
                link: "https://en.wikipedia.org/wiki/Introduction_to_Algorithms"
            }
        ],
        Interview: [
            {
                title: "System Design Primer",
                description: "Learn how to design large-scale systems for interviews.",
                type: "article",
                link: "https://github.com/donnemartin/system-design-primer"
            },
            {
                title: "Behavioral Interview Guide",
                description: "How to answer 'Tell me about a time' questions using STAR method.",
                type: "video",
                link: "#"
            },
            {
                title: "Mock Interview Practice",
                description: "Practice technical interviews with peers anonymously.",
                type: "practice",
                link: "https://pramp.com"
            }
        ],
        Aptitude: [
            {
                title: "IndiaBix Aptitude",
                description: "Aptitude questions and answers with examples.",
                type: "practice",
                link: "https://www.indiabix.com/aptitude/questions-and-answers/"
            },
            {
                title: "Quantitative Aptitude Tricks",
                description: "Shortcuts and tricks to solve problems faster.",
                type: "video",
                link: "#"
            },
            {
                title: "Logical Reasoning Basics",
                description: "Guide to logical reasoning patterns and problem types.",
                type: "article",
                link: "#"
            }
        ]
    };

    const companies = [
        { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com", link: "https://workat.tech/company/microsoft/interview-questions/problem-solving" },
        { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com", link: "https://workat.tech/company/amazon/interview-questions/problem-solving" },
        { name: "Google", logo: "https://logo.clearbit.com/google.com", link: "https://workat.tech/company/google/interview-questions/problem-solving" },
        { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com", link: "https://workat.tech/company/flipkart/interview-questions/problem-solving" },
        { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com", link: "https://workat.tech/company/adobe/interview-questions/problem-solving" },
        { name: "Uber", logo: "https://logo.clearbit.com/uber.com", link: "https://workat.tech/company/uber/interview-questions/problem-solving" },
        { name: "Swiggy", logo: "https://logo.clearbit.com/swiggy.com", link: "https://workat.tech/company/swiggy/interview-questions/problem-solving" },
        { name: "Paytm", logo: "https://logo.clearbit.com/paytm.com", link: "https://workat.tech/company/paytm/interview-questions/problem-solving" },
        { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com", link: "https://workat.tech/company/oracle/interview-questions/problem-solving" },
        { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com", link: "https://workat.tech/company/samsung/interview-questions/problem-solving" },
        { name: "MakeMyTrip", logo: "https://logo.clearbit.com/makemytrip.com", link: "https://workat.tech/company/makemytrip/interview-questions/problem-solving" },
        { name: "Morgan Stanley", logo: "https://logo.clearbit.com/morganstanley.com", link: "https://workat.tech/company/morgan-stanley/interview-questions/problem-solving" }
    ];

    const resources = allResources[category] || [];

    return (
        <div className="relative min-h-full p-6 md:p-10 overflow-hidden">
            {/* Background decoration */}
            <div className="pointer-events-none absolute top-0 right-0 -mr-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl opacity-50" />
            <div className="pointer-events-none absolute bottom-0 left-0 -ml-40 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl opacity-50" />

            <div className="relative mb-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-4">
                    <Sparkles size={12} className="text-amber-300" />
                    <span className="text-[10px] font-medium tracking-wide text-slate-300 uppercase">Premium Resources</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
                    <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">{category}</span> Library
                </h1>
                <p className="max-w-2xl text-lg text-slate-400">
                    Hand-picked articles, videos, and practice problems to help you master {category}.
                </p>
            </div>

            {resources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {resources.map((res, index) => (
                        <ResourceCard key={index} {...res} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-3xl border border-white/5 border-dashed mb-12">
                    <div className="p-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 mb-4 shadow-xl">
                        <BookOpen size={32} className="text-slate-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-300">No resources found</h3>
                    <p className="text-slate-500 mt-2">Checking for updates...</p>
                </div>
            )}

            {category === 'DSA' && (
                <div className="relative">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="flex h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
                            Target Top Companies
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {companies.map((company, index) => (
                            <CompanyCard key={index} {...company} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Resources;
