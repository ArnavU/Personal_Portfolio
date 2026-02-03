import { getApiResult } from "./service.js";

export default async function getLeetCodeResponse(req, res) {
    try {
        const {item, username:userName} = req.query;
        if(!item || !userName) {
            return res.status(400).json({
                success: false,
                message: "item and username required"
            })
        }
        const profileData = await getApiResult(item, userName);

        return res.status(200).json({
            success: true,
            profileData
        });
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            reason: err?.message || err,
        })
    }
}
