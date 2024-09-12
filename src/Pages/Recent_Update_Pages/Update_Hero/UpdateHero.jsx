const UpdateHero = ({ postImage, postTitle, postDate }) => {
  return (
    <>
      <div className="w-full">
        <div className=" w-full md:h-[480px] h-[300px] mb-8 mx-auto">
          <img
            loading="lazy"
            src={postImage}
            alt="HTML TAGS IMAGE"
            className="w-full h-full object-scale"
          />
        </div>
        <h1 className="text-3xl pb-2">{postTitle}</h1>
        <p className="text-md pb-6">{postDate}</p>
      </div>
    </>
  );
};

export default UpdateHero;
