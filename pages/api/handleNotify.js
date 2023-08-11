// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import addNewNotifyUser from "../../utils/db/addUserNotify";

export default function handler(req, res) {
  if(!req.method === 'POST') {
    res.status(400).json({error: 'Only POST requests allowed'})
  }
  let email = req.body?.email;
  if(!email) {
    res.status(400).json({error: 'Email is required'})
  }
  addNewNotifyUser(email).then((result) => {
    return res.status(200).json({success: true})
  }).catch((err) => {
    return res.status(400).json({error: err.message})
  });

}
