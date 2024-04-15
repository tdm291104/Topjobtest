import { Carousel } from "@material-tailwind/react";
 
export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://jobsgo.vn/blog/wp-content/uploads/2023/03/banner-tuyen-dung.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://jobsgo.vn/blog/wp-content/uploads/2023/03/luu-y-khi-thiet-ke-banner.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://jobsgo.vn/blog/wp-content/uploads/2023/03/banner-tuyen-dung-an-tuong.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}