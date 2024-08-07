const {nanoid}=require('nanoid');
const URL=require('../models/url');
async function handleGenerateNewShortURL(req,res){
    const body=req.body();
    if(!body.URL){
       return res.status(400).json({
            "msg":"URL is required"
        })
    }
    const shortId=nanoid(8);
await URL.create({
    shortId:shortId,
    redirectURL:body.URL,
    visitHistory:[]
});
return res.json({
    id:shortId
});
};
module.exports={
    handleGenerateNewShortURL
}