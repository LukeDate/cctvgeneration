import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from "../models/userModels";
import data from '../data';

const userRouter = express.Router();

userRouter.get("/seed", expressAsyncHandler( async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users)
    res.send({ createdUsers });

}));

export default userRouter;