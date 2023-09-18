"use server";

import { connectToDB } from "@/lib/mongoose";
import User from "@/lib/models/user.model";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { generatePassword } from "../../utils/generatePassword";
import { IUser } from "@/types/IUser";

export const signUp = async (data) => {
  await connectToDB();
  try {
    if (!data.password || !data.email || !data.name) {
      return {
        message: "Please fill all the fields",
        isCreated: false,
      };
    }

    const userExists = await User.findOne({ email: data.email });
    if (userExists) {
      return {
        message: "User already exists",
        isCreated: false,
      };
    }

    const newUser = new User({
      userName: data.name,
      email: data.email,
      password: data.password,
      avatar: null,
    });

    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        await newUser.save();
      });
    });

    return {
      message: "User created successfully",
      isCreated: true,
    };
  } catch (error) {
    console.log(error);
  }
};

export const changeDataUser = async (data: IUser) => {
  const { userName, email, password, gender, birthDate } = data;

  try {
    await connectToDB();
    const user = await User.findOne({ email });

    if (!user) {
      return {
        message: "User not found",
        isUpdated: false,
      };
    }

    if (userName) {
      user.userName = userName;
    }
    if (gender) {
      user.gender = gender;
    }

    if (birthDate) {
      user.birthDate = birthDate;
    }

    if (password) {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) throw err;
          user.password = hash;
          await user.save();
        });
      });
    }
    await user.save();
    return {
      message: "User updated successfully",
    };
  } catch (error) {
    console.log(error);
  }
};

export const forgotPassword = async (email) => {
  await connectToDB();
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return {
        message: "User not found",
        passwordSend: false,
      };
    }

    const newPassword = await generatePassword();
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: "New password",
      text: `Your new password is ${newPassword} Please change it after login.`,
    };

    await transporter.sendMail(mailOptions);

    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(newPassword, salt, async (err, hash) => {
        if (err) throw err;
        user.password = hash;
        await user.save();
      });
    });

    return {
      message: "Password send successfully",
      passwordSend: true,
    };
  } catch (error: any) {
    return {
      message: error.message,
      passwordSend: false,
    };
  }
};

export const getUser = async (id: string | null | undefined) => {
  try {
    await connectToDB();
    const user: IUser = await User.findById(id);
    return JSON.stringify(user);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateAvatarUser = async (id: string, avatar: string) => {
  try {
    await connectToDB();
    const user: IUser = await User.findByIdAndUpdate(id, { avatar });
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
