import { galleryImages, galleryImages_2 } from "../../Data/Data";
import gallery1 from "/src/assets/aboutimg1.jpg";
import gallery2 from "/src/assets/aboutimg4.jpg";

const Gallery = () => {
  return (
    <>
      <section className="md:pt-6  md:pb-24 pb-12  text-text">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={gallery1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />

          {galleryImages.map((image) => (
            <img
              src={image.image}
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-scale"
              key={image.id}
            />
          ))}

          {galleryImages_2.map((image) => (
            <img
              src={image.image}
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-scale"
              key={image.id}
            />
          ))}
          <img
            src={gallery2}
            alt=""
            className="w-full h-full object-scale col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </>
  );
};

export default Gallery;
