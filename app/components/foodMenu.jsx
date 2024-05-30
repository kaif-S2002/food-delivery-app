import Image from "next/image";

const FoodMenu = () => {
  return (
    <div className="foodMenu-wrapper flex flex-col justify-center items-center mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="title text-3xl font-bold mb-8">What's on your mind?</h1>
      <div className="foods-container flex justify-center items-center h-fit w-fit gap-5 max-lg:grid max-md:grid-cols-2 max-lg:grid-cols-4 ">
        <div className="food shadow-lg w-40 h-40 rounded-full object-cover overflow-hidden">
          <Image
            src="/assets/vegThali.png"
            alt="Veg Thali"
            width={200}
            height={200}
            className="food-image w-full h-full "
          />
          <p className="food-name text-lg font-bold mt-2">Veg</p>
        </div>
        <div className="food shadow-lg w-40 h-40 rounded-full object-cover overflow-hidden">
          <Image
            src="/assets/NonVeg.png"
            alt="Non-veg Thali"
            width={200}
            height={200}
            className="food-image w-full h-full object-cover rounded"
          />
          <p className="food-name text-lg font-bold mt-2">Non-Veg</p>
        </div>
        <div className="food shadow-lg w-40 h-40 rounded-full object-cover overflow-hidden">
          <Image
            src="/assets/parantha.png"
            alt="Breakfast"
            width={200}
            height={200}
            className="food-image w-full h-full object-cover rounded"
          />
          <p className="food-name text-lg font-bold mt-2">Breakfast</p>
        </div>
        <div className="food shadow-lg w-40 h-40 rounded-full object-cover overflow-hidden">
          <Image
            src="/assets/briyani.png"
            alt="Briyani"
            width={200}
            height={200}
            className="food-image w-full h-full object-cover rounded"
          />
          <p className="food-name text-lg font-bold mt-2">Briyani</p>
        </div>
        <div className="food shadow-lg w-40 h-40 rounded-full object-cover overflow-hidden">
          <Image
            src="/assets/Softdrinks.png"
            alt="Soft drinks"
            width={200}
            height={200}
            className="food-image w-full h-full object-cover rounded"
          />
          <p className="food-name text-lg font-bold mt-2">Soft Drinks</p>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
