import {
	Code2,
	Trophy,
	ExternalLink,
} from "lucide-react";
import LanguageChart from "../components/CodingProfile/LanguageChart.jsx";
import { useEffect, useState } from "react";
import { fetchLeetCodeStats } from "../ApiRequests/leetcodeQuery.js";
import { LEETCODE_USERNAME } from "../data/constants.js";

function CodingProfile() {
	const [languageStats, setLanguageStats] = useState([]);
	const [contestStats, setcontestStats] = useState();
	const [submissionStats, setSubmissionStats] = useState();
	const [profileStats, setProfileStats] = useState();

	const totalSolved = submissionStats?.acSubmissionNum?.find(obj => obj.difficulty.toLowerCase()==="all").count || 0;
	const acTotalSubmissions = submissionStats?.acSubmissionNum?.find(obj => obj.difficulty.toLowerCase()==="all").submissions || 0;
	const totalSubmissions = submissionStats?.totalSubmissionNum?.find(obj => obj.difficulty.toLowerCase()==="all").submissions || 0;
	const acceptanceRate = totalSubmissions > 0 ? (acTotalSubmissions/totalSubmissions)*100 : 0;

	
	useEffect(() => {
		const getLangStats = async() => {
			const langStats = await fetchLeetCodeStats(LEETCODE_USERNAME, {item: "language"});
			if(langStats?.success) 
				setLanguageStats(langStats?.data?.matchedUser?.languageProblemCount);
		}
		
		const getContestStats = async() => {
			const contestStats = await fetchLeetCodeStats(LEETCODE_USERNAME, {item: "contest"});
			if(contestStats?.success)
				setcontestStats(contestStats?.data?.userContestRanking);

		}

		const getSubmissionStats = async() => {
			const submissionStats = await fetchLeetCodeStats(LEETCODE_USERNAME, {item: "submission"});
			if(submissionStats?.success) {
				setSubmissionStats(submissionStats?.data?.matchedUser?.submitStats);
			}
		}

		const getProfileStats = async() => {
			const profileStats = await fetchLeetCodeStats(LEETCODE_USERNAME, {item: "profile"});
			if(profileStats?.success) {
				setProfileStats(profileStats?.data?.matchedUser);
			}
		}

		getLangStats();
		getContestStats();
		getSubmissionStats();
		getProfileStats();
	}, [])


	return (
		<div id="coding-profile" className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<div className="flex items-center justify-center mb-4">
						<Code2 className="w-10 h-10 text-primary mr-3" />
						<h1 className="text-4xl md:text-5xl font-bold text-white">
							Coding Profile
						</h1>
					</div>
					<p className="text-slate-400 text-lg flex items-baseline justify-center gap-2">
						LeetCode Statistics • 
						<a href={`https://leetcode.com/${LEETCODE_USERNAME}`} target="_blank" rel="noopener noreferrer" aria-label={`Visit my leetcode profile`}> 
							<span className="text-primary font-semibold">@{LEETCODE_USERNAME}</span>
						</a>
						<a href={`https://leetcode.com/${LEETCODE_USERNAME}`} target="_blank" rel="noopener noreferrer" aria-label={`Visit my leetcode profile`} className="text-primary hover:text-primary/80 transition-colors">
							<ExternalLink className="w-5 h-5" />
						</a>
					</p>
				</div>

				{/* Main Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
					{/* Heat Map Card */}
					<div className="lg:col-span-2 glass backdrop-blur-sm border border-primary/30 rounded-xl p-4 shadow-xl hover:shadow-2xl transition-shadow">
						<div className="overflow-hidden">
							<img
								src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Ubuntu&ext=heatmap`}
								alt="LeetCode Activity"
								id="leet-card"
								className="w-full h-auto cursor-pointer"
								loading="lazy"
							/>
						</div>
					</div>

					{/* Languages */}
					<div className="lg:col-span-2 glass backdrop-blur-sm border border-primary/30 rounded-xl p-6 shadow-xl">
						<h2 className="text-xl font-semibold text-white mb-6 flex items-center">
							<Code2 className="w-5 h-5 mr-3 text-emerald-400" />
							Languages Used
						</h2>
						<LanguageChart languages={languageStats} total={totalSolved} />
					</div>
				</div>

				{/* Quick Stats */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
					<div className="glass backdrop-blur-sm border border-primary/30 rounded-xl p-5 shadow-xl">
						<p className="text-slate-400 text-sm mb-2">Problems Solved</p>
						<p className="text-3xl font-bold text-emerald-400">{totalSolved}</p>
					</div>
					<div className="glass backdrop-blur-sm border border-primary/30 rounded-xl p-5 shadow-xl">
						<p className="text-slate-400 text-sm mb-2">Acceptance Rate</p>
						<p className="text-3xl font-bold text-blue-400">{acceptanceRate.toFixed(2)}%</p>
					</div>
					<div className="glass backdrop-blur-sm border border-primary/30 rounded-xl p-5 shadow-xl">
						<p className="text-slate-400 text-sm mb-2">Global Ranking</p>
						<p className="text-3xl font-bold text-purple-400">#{profileStats?.profile?.ranking}</p>
					</div>
				</div>

				{/* Contest Stats */}
				{contestStats && (
					<div className="glass backdrop-blur-sm border border-primary/30 rounded-xl p-6 shadow-xl">
						<h2 className="text-xl font-semibold text-white mb-6 flex items-center">
							<Trophy className="w-5 h-5 mr-3 text-yellow-400" />
							Contest Statistics
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
							<div className="bg-slate-900/50 rounded-lg p-4 border border-primary/30 hover:border-slate-600/50 transition-colors">
								<div className="flex items-center justify-between">
									<span className="text-slate-400 text-sm">Rating</span>
									<p className="text-2xl font-bold text-yellow-400">{contestStats?.rating?.toFixed(2)}</p>
								</div>
							</div>
							<div className="bg-slate-900/50 rounded-lg p-4 border border-primary/30 hover:border-slate-600/50 transition-colors">
								<div className="flex items-center justify-between">
									<span className="text-slate-400 text-sm">Contests Attended</span>
									<p className="text-2xl font-bold text-blue-400">{contestStats?.attendedContestsCount}</p>
								</div>
							</div>
							<div className="bg-slate-900/50 rounded-lg p-4 border border-primary/30 hover:border-slate-600/50 transition-colors">
								<div className="flex items-center justify-between">
									<span className="text-slate-400 text-sm">Top Percentage</span>
									<p className="text-2xl font-bold text-purple-400">{contestStats?.topPercentage?.toFixed(1)}%</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default CodingProfile;
