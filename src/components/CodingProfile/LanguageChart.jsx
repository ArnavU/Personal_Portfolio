
const languageColors = {
  JavaScript: 'bg-yellow-500',
  'Python3': 'bg-orange-500',
  Python: 'bg-blue-500',
  Java: 'bg-red-500',
  'C++': 'bg-blue-600',
  TypeScript: 'bg-pink-500',
  C: 'bg-purple-500',
  'C#': 'bg-green-500',
  Go: 'bg-cyan-500',
  Ruby: 'bg-red-600',
  Swift: 'bg-orange-500',
  Kotlin: 'bg-purple-600',
  Rust: 'bg-orange-600',
  PHP: 'bg-indigo-500',
  Scala: 'bg-red-700',
};

export default function LanguageChart({ languages, total }) {
  if (languages.length === 0) {
    languages = [
        {
            "languageName": "C++",
            "problemsSolved": 0
        },
        {
            "languageName": "MySQL",
            "problemsSolved": 0
        },
        {
          "languageName": "Java",
          "problemsSolved": 0
        },
        {
          "languageName": "C",
          "problemsSolved": 0
        },
        {
            "languageName": "JavaScript",
            "problemsSolved": 0
        },
        {
            "languageName": "Python3",
            "problemsSolved": 0
        }
    ]
  }

  const maxSolved = total || 1000;
  const topLanguages = languages.slice(0, 8).sort((a, b)=>b.problemsSolved-a.problemsSolved);

  return (
    <div className="space-y-4">
      {topLanguages.map((lang, index) => {
        const percentage = (lang.problemsSolved / maxSolved) * 100;
        const color = languageColors[lang.languageName] || 'bg-slate-500';

        return (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${color}`} />
                <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                  {lang.languageName}
                </span>
              </div>
              <span className="text-white font-semibold">
                {lang.problemsSolved} / {total}
                <span className="text-slate-500 text-sm ml-1">problems</span>
              </span>
            </div>
            <div className="relative w-full bg-slate-700/30 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full ${color} transition-all duration-700 ease-out group-hover:opacity-90 relative`}
                style={{
                  width: `${percentage}%`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-white/30" />
              </div>
            </div>
          </div>
        );
      })}

      {languages.length > 8 && (
        <div className="pt-4 border-t border-slate-700/50">
          <p className="text-slate-400 text-sm text-center">
            +{languages.length - 8} more languages
          </p>
        </div>
      )}
    </div>
  );
}
