"use server";

import { connectToDB } from "../mongoose";
import Subscribe from "@/lib/models/subscribe.model";
import { ISubscribe } from "@/types/ISubscribe";
import nodemailer from "nodemailer";
import { welcomeLetter } from "@/utils/welcomeLetter";

export const addSubscribe = async (data: ISubscribe) => {
  try {
    await connectToDB();
    const existingSubscription = await Subscribe.findOne({ email: data.email });
    if (existingSubscription) {
      return { message: "You are already subscribed!" };
    }

    await Subscribe.create(data);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NODEMAILER_USER,
      to: data.email,
      subject: "Welcome!",
      html: welcomeLetter(),
    };

    await transporter.sendMail(mailOptions);

    return { message: "Thank you for subscribing!" };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
