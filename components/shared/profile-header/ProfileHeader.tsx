import { IUser } from "@/types/IUser";
import ProfileAvatarLayout from "@/components/shared/profile-header/profile-avatar-layout/ProfileAvatarLayout";
import ProfileAvatar from "@/components/shared/profile-header/profile-avatar-layout/ProfileAvatar";

interface ProfileHeaderProps {
  user: IUser;
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <div className={"flex mt-0 lg:mt-[114px] gap-x-3 md:gap-x-16 items-end"}>
      <ProfileAvatarLayout>
        <ProfileAvatar />
      </ProfileAvatarLayout>
      <div className={"flex flex-col gap-2 md:gap-5 text-dark mt-5"}>
        <h1 className={"text-xl md:text-3xl lg:text-5xl font-bold"}>
          {user.userName?.toUpperCase()}
        </h1>
        <p className={"text-sm md:text-xl lg:text-3xl"}>Community member</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
