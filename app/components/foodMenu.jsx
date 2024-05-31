import Image from "next/image";

const FoodMenu = () => {
  return (
    <div className="foodMenu-wrapper flex flex-col justify-center items-center mx-auto p-4 pt-8">
      <h1 className="title text-3xl font-bold mb-8">What's on your mind?</h1>
      <div className="foods-container flex justify-center items-center h-fit w-fit gap-x-8 gap-y-5 max-lg:grid max-md:grid-cols-2 max-lg:grid-cols-4 ">
        <div className="food ">
          <Image
            src="/assets/vegThali.png"
            alt="Veg Thali"
            width={200}
            height={200}
            className="food-image shadow-lg w-36 h-36 rounded-full object-cover"
          />
          <p className="food-name text-base font-bold mt-2 text-center">Veg</p>
        </div>
        <div className="food ">
          <Image
            src="/assets/NonVeg.png"
            alt="Non-veg Thali"
            width={200}
            height={200}
            className="food-image shadow-lg w-36 h-36 rounded-full object-cover"
          />
          <p className="food-name text-base font-bold mt-2 text-center">
            Non-Veg
          </p>
        </div>
        <div className="food ">
          <Image
            src="/assets/parantha.png"
            alt="Breakfast"
            width={200}
            height={200}
            className="food-image shadow-lg w-36 h-36 rounded-full object-cover"
          />
          <p className="food-name text-base font-bold mt-2 text-center">
            Breakfast
          </p>
        </div>
        <div className="food ">
          <Image
            src="/assets/briyani.png"
            alt="Briyani"
            width={200}
            height={200}
            className="food-image shadow-lg w-36 h-36 rounded-full object-cover"
          />
          <p className="food-name text-base font-bold mt-2 text-center">
            Briyani
          </p>
        </div>
        <div className="food ">
          <Image
            src="/assets/Softdrinks.png"
            alt="Soft drinks"
            width={200}
            height={200}
            className="food-image shadow-lg w-36 h-36 rounded-full object-cover"
          />
          <p className="food-name text-base font-bold mt-2 text-center">
            Soft Drinks
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
