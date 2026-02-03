
const req = 
    { "query": 
        "\n    query userPublicProfile($username: String!) {\n  matchedUser(username: $username) {\n    contestBadge {\n      name\n      expired\n      hoverText\n      icon\n    }\n    username\n    githubUrl\n    twitterUrl\n    linkedinUrl\n    profile {\n      ranking\n      userAvatar\n      realName\n      aboutMe\n      school\n      websites\n      countryName\n      company\n      jobTitle\n      skillTags\n      postViewCount\n      postViewCountDiff\n      reputation\n      reputationDiff\n      solutionCountDiff\n      categoryDiscussCountDiff\n      certificationLevel\n      isFollowingMe\n      isFollowedByMe\n    }\n  }\n  ugcArticleUserSolutionArticles(username: $username, skip: 0, first: 0) {\n    totalNum\n  }\n  ugcArticleUserDiscussionArticles(username: $username, skip: 0, first: 0) {\n    totalNum\n  }\n}\n    ", 
    "variables": 
        { "username": "arnavu" }, 
    "operationName": 
        "userPublicProfile" 
}

export const getProfileData = async (userName) => {
    const res = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Referer": "https://leetcode.com/u/arnavu/"
        },
        body: JSON.stringify({
            ...req
        })
    });

    const data = await res.json();
    console.log(data.data.matchedUser);
}
