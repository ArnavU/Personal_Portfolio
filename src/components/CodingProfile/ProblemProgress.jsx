
export default function ProblemProgress({ stats } ) {
  const problems = [
    {
      difficulty: 'Easy',
      solved: stats.easySolved,
      total: stats.easyTotal,
      color: 'bg-emerald-500',
      lightColor: 'bg-emerald-500/20',
      textColor: 'text-emerald-400',
    },
    {
      difficulty: 'Medium',
      solved: stats.mediumSolved,
      total: stats.mediumTotal,
      color: 'bg-yellow-500',
      lightColor: 'bg-yellow-500/20',
      textColor: 'text-yellow-400',
    },
    {
      difficulty: 'Hard',
      solved: stats.hardSolved,
      total: stats.hardTotal,
      color: 'bg-red-500',
      lightColor: 'bg-red-500/20',
      textColor: 'text-red-400',
    },
  ];

  return (
    <div className="space-y-4">
      {problems.map((problem) => {
        const percentage = (problem.solved / problem.total) * 100;
        return (
          <div key={problem.difficulty}>
            <div className="flex items-center justify-between mb-2">
              <span className={`font-medium ${problem.textColor}`}>{problem.difficulty}</span>
              <span className="text-slate-400 text-sm">
                <span className="text-white font-semibold">{problem.solved}</span>
                <span className="text-slate-500"> / {problem.total}</span>
              </span>
            </div>
            <div className={`w-full ${problem.lightColor} rounded-full h-3 overflow-hidden`}>
              <div
                className={`h-full ${problem.color} transition-all duration-500 rounded-full relative`}
                style={{ width: `${percentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
              </div>
            </div>
            <div className="text-right mt-1">
              <span className="text-slate-500 text-xs">{percentage.toFixed(1)}% complete</span>
            </div>
          </div>
        );
      })}

      <div className="pt-4 border-t border-slate-700/50">
        <div className="flex items-center justify-between">
          <span className="text-slate-300 font-semibold">Total Progress</span>
          <span className="text-slate-400">
            <span className="text-white font-bold text-lg">{stats.totalSolved}</span>
            <span className="text-slate-500"> / {stats.totalQuestions}</span>
          </span>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden mt-2">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-500 transition-all duration-500 rounded-full relative"
            style={{ width: `${(stats.totalSolved / stats.totalQuestions) * 100}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
