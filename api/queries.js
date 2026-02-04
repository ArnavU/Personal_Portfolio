
export const PROFILE_QUERY =
    `query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
            contestBadge {
                name
                expired
                hoverText
                icon
            }
            username
            githubUrl
            twitterUrl
            linkedinUrl
            profile {
                ranking
                userAvatar
                realName
                aboutMe
                school
                websites
                countryName
                company
                jobTitle
                skillTags
                postViewCount
                postViewCountDiff
                reputation
                reputationDiff
                solutionCountDiff
                categoryDiscussCountDiff
                certificationLevel
                isFollowingMe
                isFollowedByMe
            }
        }
    }`

export const LANGUAGE_STATS_QUERY =
    `query languageStats($username: String!) { 
        matchedUser(username: $username) {
            languageProblemCount {
                languageName
                problemsSolved
            }
        }
    }`

export const CONTEST_INFO_QUERY = 
    `query userContestRankingInfo($username: String!) {
        userContestRanking(username: $username) {
            attendedContestsCount
            rating
            globalRanking
            totalParticipants
            topPercentage
            badge {
                name
            }
        }
    }`

export const SUBMISSION_PROGRESS_QUERY = 
    `query userSessionProgress($username: String!) {
        allQuestionsCount {
            difficulty
            count
        }
        matchedUser(username: $username) {
            submitStats {
                acSubmissionNum {
                    difficulty
                    count
                    submissions
                }
                totalSubmissionNum {
                    difficulty 
                    count
                    submissions
                }
            }
        }
    }`