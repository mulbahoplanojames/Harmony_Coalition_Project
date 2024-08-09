/*
Unique experiences and resources that set you apart
Comprehensive support and guidance throughout your academic journey
Free and MIT-licensed resources to enhance your learning
Distinctive programs designed to meet your needs
Guiding and supporting you every step of the way
Bridging the gap between Liberian students and the administration
Dedicated mentorship and a community that fosters your growth
*/

const offerDate = [
  {
    id: 1,
    text: "Exclusive opportunities tailored for Liberian students",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5 h-5 fill-current text-violet-600"
      >
        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
      </svg>
    ),
  },
  {
    id: 2,
    text: "Comprehensive support and guidance throughout your academic journey",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5 h-5 fill-current text-violet-600"
      >
        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
      </svg>
    ),
  },
  {
    id: 3,
    text: "Guiding and supporting you every step of the way",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5 h-5 fill-current text-violet-600"
      >
        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
      </svg>
    ),
  },
  {
    id: 4,
    text: "A welcoming and inclusive community of Liberian students",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5 h-5 fill-current text-violet-600"
      >
        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
      </svg>
    ),
  },
  {
    id: 5,
    text: "Bridging the gap between You and the administration",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5 h-5 fill-current text-violet-600"
      >
        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
      </svg>
    ),
  },
  {
    id: 6,
    text: "Dedicated mentorship and a community that fosters your growth",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5 h-5 fill-current text-violet-600"
      >
        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
      </svg>
    ),
  },
];

const Offer = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 md:mt-20 mt-[4rem] bg-gray-100  text-gray-800">
        <h2 className="mb-8 text-4xl font-bold leading-none text-center">
          What do we have to offer?
        </h2>
        <ul className="grid md:gap-10 gap-3 md:grid-cols-2 lg:grid-cols-3 place-items-center items-center">
          {offerDate.map((offer) => (
            <li key={offer.id} className="flex items-center space-x-2">
              <span className="text-2xl font-semibold">{offer.icon}</span>
              <span className="text-lg font-medium">{offer.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Offer;
