"use client";

import PencilIcon from "@/assets/icons/PencilIcon";
import { Dispatch, useState } from "react";
import SpinnerIcon from "@/assets/icons/SpinnerIcon";
import { SessionProvider, useSession } from "next-auth/react";
import { updateAvatarUser } from "@/lib/actions/user.action";
import { IUser } from "@/types/IUser";

interface EditAvatarIconProps {
  user: IUser;
  setUser: Dispatch<IUser>;
}

const EditAvatarIcon = ({ user, setUser }: EditAvatarIconProps) => {
  const [loading, setLoading] = useState(false);

  const handleChangeAvatar = async () => {
    // @ts-ignore
    const file = await window.showOpenFilePicker();
    const image = await file[0].getFile();
    if (image) {
      setLoading(true);
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "wzzc5bs7");
      data.append("cloud_name", "djhfyftot");
      fetch("https://api.cloudinary.com/v1_1/djhfyftot/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (user._id) {
            updateAvatarUser(user?._id, data.url);
            setUser({ ...user, avatar: data.url });
            setLoading(false);
          }
        })
        .catch(() => console.log("error"));
    }
  };
  return (
    <SessionProvider>
      <div
        className={
          "text-white absolute -top-4 -right-4 p-3 rounded-full bg-[#91D785] border-[3px] border-white shadow cursor-pointer w-6 h-6 md:w-[60px] md:h-[60px] flex items-center justify-center"
        }
        onClick={handleChangeAvatar}
      >
        {loading ? (
          <SpinnerIcon
            className={"w-5 h-5 md:w-[34px] md:h-[34px] absolute md:relative"}
          />
        ) : (
          <PencilIcon
            className={"w-5 h-5 md:w-[34px] md:h-[34px] absolute md:relative"}
          />
        )}
      </div>
    </SessionProvider>
  );
};

export default EditAvatarIcon;
