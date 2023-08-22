import { IUser } from "@/types/IUser";
import ProfileAvatarLayout from "@/components/shared/profile-header/profile-avatar-layout/ProfileAvatarLayout";
import ProfileAvatar from "@/components/shared/profile-header/profile-avatar-layout/ProfileAvatar";

interface ProfileHeaderProps {
  user: IUser;
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <div className={"flex mt-[114px] gap-x-16 items-end"}>
      <ProfileAvatarLayout>
        <ProfileAvatar />
      </ProfileAvatarLayout>
      <div className={"flex flex-col gap-5 text-dark"}>
        <h1 className={"text-5xl font-bold"}>{user.userName.toUpperCase()}</h1>
        <p className={"text-3xl"}>Community member</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
