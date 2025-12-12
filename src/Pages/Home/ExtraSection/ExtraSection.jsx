import React from "react";
import {
  FaLeaf,
  FaTruck,
  FaUtensils,
  FaStar,
  FaHeart,
  FaUserTie,
} from "react-icons/fa";

const ExtraSection = () => {
  const features = [
    {
      icon: <FaLeaf className="text-green-500 text-4xl mx-auto" />,
      title: "Fresh & Organic",
      desc: "All ingredients are fresh, organic, and carefully selected for healthy meals.",
    },
    {
      icon: <FaTruck className="text-orange-500 text-4xl mx-auto" />,
      title: "Fast Delivery",
      desc: "Your meals are delivered hot and fresh right to your doorstep quickly.",
    },
    {
      icon: <FaUserTie className="text-teal-500 text-4xl mx-auto" />,
      title: "Expert Chefs",
      desc: "Professional chefs maintain high-quality and hygienic cooking standards.",
    },
    {
      icon: <FaUtensils className="text-purple-500 text-4xl mx-auto" />,
      title: "Delicious Menu",
      desc: "We offer a wide variety of tasty meals to satisfy every craving.",
    },
    {
      icon: <FaStar className="text-yellow-400 text-4xl mx-auto" />,
      title: "Top Rated",
      desc: "Customers love our meals! We maintain high ratings and positive feedback.",
    },
    {
      icon: <FaHeart className="text-red-500 text-4xl mx-auto" />,
      title: "Customer Love",
      desc: "We care about our customers and ensure a delightful experience.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-orange-50 to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Our Service?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {feature.title}
              </h2>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
