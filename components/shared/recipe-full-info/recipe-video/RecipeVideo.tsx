interface RecipeVideoProps {
  video: string;
}

const RecipeVideo = ({ video }: RecipeVideoProps) => {
  return (
    <div className={"flex flex-col gap-y-5"}>
      <h2 className={"text-xl lg:text-2xl font-bold"}>Video:</h2>
      <div className={"flex flex-col gap-y-5"}>
        <iframe
          width="320"
          height="320"
          src={video}
          className={"rounded-md w-[280px] h-[280px] md:w-[320px] md:h-[320px]"}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
      </div>
    </div>
  );
};

export default RecipeVideo;
