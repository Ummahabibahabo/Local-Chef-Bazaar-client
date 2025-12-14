import { FaMoneyBillWave, FaStar, FaTruck } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import { Link } from "react-router";

const MealsCards = ({ meal }) => {
  const {
    foodName,
    chefName,
    chefId,
    price,
    deliveryArea,
    foodImage,
    rating,
    _id,
  } = meal;
  console.log(meal);
  const infoClass =
    "flex items-center justify-between py-2 border-b border-dashed border-gray-300";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden flex flex-col">
      {/* Food Image */}
      <div className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-48 object-cover rounded-t-2xl border-b border-gray-200"
        />
      </div>

      {/* Food Info */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-bold mb-4 text-gray-800">{foodName}</h2>

        <div className={infoClass}>
          <div className="flex items-center gap-2">
            <GiChefToque className="text-red-500" /> {chefName}
          </div>
          <span className="text-gray-500 text-sm">ID: {chefId}</span>
        </div>

        <div className={infoClass}>
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-green-500" /> Price
          </div>
          <span className="text-gray-500 text-sm">{price} BDT</span>
        </div>

        <div className={infoClass}>
          <div className="flex items-center gap-2">
            <FaTruck className="text-blue-500" /> Delivery
          </div>
          <span className="text-gray-500 text-sm">{deliveryArea}</span>
        </div>

        {/* Bottom Section: Button + Rating */}
        <div className="mt-4 flex items-center justify-between">
          <Link
            to={`/meals-details/${_id}`}
            className="bg-primary hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-full shadow transition"
          >
            {" "}
            See Details
          </Link>

          <div className="flex items-center gap-1 text-yellow-500 font-semibold">
            <FaStar /> {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsCards;
