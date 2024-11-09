import { createUserService, deleteUserservice, getAllUsersService, getUserByIdService, updateUserService } from "../models/userModel.js";

// standard response function
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data
    });
};

export const createUser = async (req, res, next) => {
    const { name, email } = req.body;
    try{
        const newUser = await createUserService(name, email);
        handleResponse(res, 201, "User Created Successfully", newUser);
    }catch(err){
        next(err);
    }
}

export const getAllUsers = async (req, res, next) => {
    try{
        const users = await getAllUsersService();
        handleResponse(res, 200, "Users Fetched Successfully", users);
    }catch(err){
        next(err);
    }
}

export const getUserById = async (req, res, next) => {
    try{
        const user = await getUserByIdService(req.params.id);
        if(!user || user.length == 0) 
            handleResponse(res, 404, "User not found");
        
        handleResponse(res, 200, "User Fetched Successfully", user);

    }catch(err){
        next(err);
    }
}

export const updateUser = async (req, res, next) => {
    const { name, email } = req.body;
    try{
        const user = await updateUserService(req.params.id, name, email);
        if(!user) 
            handleResponse(res, 404, "User not found");
        
        handleResponse(res, 200, "User Updated Successfully", user);

    }catch(err){
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try{
        const user = await deleteUserservice(req.params.id);
        if(!user) 
            handleResponse(res, 404, "User not found");
        
        handleResponse(res, 200, "User DELETED Successfully");

    }catch(err){
        next(err);
    }
}