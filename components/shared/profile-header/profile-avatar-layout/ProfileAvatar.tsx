"use client";

import Image from "next/image";
import EditAvatarIcon from "@/components/shared/profile-header/EditAvatarIcon";
import { useEffect, useState } from "react";
import { IUser } from "@/types/IUser";
import { useSession } from "next-auth/react";

const ProfileAvatar = () => {
  const [user, setUser] = useState<IUser>(null);
  const session = useSession();

  const getUser = async () => {
    if (session.data?.user?.id) {
      const res = await fetch(`/api/user/${session.data.user.id}`);
      const data = await res.json();
      setUser(data);
    }
  };

  useEffect(() => {
    getUser();
  }, [session?.data?.user?.id]);

  return (
    <div className={"relative"}>
      {user && user.avatar ? (
        <Image
          src={user.avatar}
          alt={user.userName ? user.userName : "avatar"}
          className={
            "rounded-md w-20 md:w-[157px] lg:w-[217px] h-20 md:h-[157px] lg:h-[217px] object-cover"
          }
          width={217}
          height={217}
        />
      ) : (
        <div
          className={
            "flex items-center justify-center bg-primary w-full h-full rounded-md"
          }
        >
          <span
            className={"text-3xl md:text-6xl lg:text-8xl font-bold text-white"}
          >
            {user && user.userName && user?.userName[0]?.toUpperCase()}
          </span>
        </div>
      )}
      <EditAvatarIcon user={user} setUser={setUser} />
    </div>
  );
};

export default ProfileAvatar;
