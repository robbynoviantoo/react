import { Brands } from "@/app/constants/brands";

export const HeroBrands = () => {
  return (
    <div className="relative overflow-hidden py-8">

      <div className="flex w-max animate-marquee">
        {[...Brands, ...Brands].map((brand, index) => (
          <div
            key={index}
            className="mx-8 flex h-16 items-center justify-center flex-shrink-0"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className=" w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};