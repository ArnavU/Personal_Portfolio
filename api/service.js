import { CONTEST_INFO_QUERY, LANGUAGE_STATS_QUERY, PROFILE_QUERY } from "./queries.js";

export const getApiResult = async (item, userName) => {

    const getQueryString = (item) => {
        switch (item) {
            case "profile":
                return PROFILE_QUERY;
            case "language":
                return LANGUAGE_STATS_QUERY;
            case "contest":
                return CONTEST_INFO_QUERY;
            default:
                return "";
        }
    }

    const getOperationsString = async (item) => {
        switch (item) {
            case "profile":
                return "userPublicProfile";
            case "language":
                return "languageStats";
            case "contest":
                return "userContestRankingInfo";
            default:
                return "";
        }
    }

    const response = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "query": getQueryString(item),
            "variables": { "username": userName },
            "operationName": getOperationsString(item)
        })
    });

    const data = await response.json();
    return data?.data;
}