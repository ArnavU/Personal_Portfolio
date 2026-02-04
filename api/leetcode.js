import { getApiResult } from "./service.js";

export default async function getLeetCodeResponse(req, res) {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        
        const {item, username:userName} = req.query;
        if(!item || !userName) {
            return res.status(400).json({
                success: false,
                message: "item and username required"
            })
        }
        const data = await getApiResult(item, userName);

        return res.status(200).json({
            success: true,
            data
        });
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            reason: err?.message || err,
        })
    }
}
