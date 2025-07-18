import React, { useState, useEffect } from "react";
import tesla from "../../assets/tesla.png";
import ranger from "../../assets/rangers.png";
import porsche from "../../assets/porsche.png";
import oldtimer from "../../assets/oldtimer.png";

const carsData = [
  {
    id: 1,
    name: "Tesla Model S",
    price: "89 990",
    description: "Luxury electric sedan with cutting-edge technology",
    tags: ["Autopilot", "Long Range", "Premium Interior"],
    category: "Electric",
    image: tesla,
  },
  {
    id: 2,
    name: "Porsche 911",
    price: "99 200",
    description: "Iconic sports car with unmatched performance",
    tags: ["Rear-Engine", "PDK Transmission", "Sport Chrono"],
    category: "Sports",
    image: porsche,
  },
  {
    id: 3,
    name: "Range Rover Sport",
    price: "83 000",
    description: "Luxury SUV combining comfort and capability",
    tags: ["All-Terrain", "Air Suspension", "Premium Audio"],
    category: "SUV",
    image: ranger,
  },
  {
    //Sortörés
    id: 4,
    name: (
      <>
        Mercedes-Benz 300 <br /> SL Gullwing (1954)
      </>
    ),
    price: "1,500,000",
    description:
      "An iconic sports car renowned for its distinctive gull-wing doors and groundbreaking performance, truly an automotive masterpiece.",
    tags: ["Classic", "Luxury", "Collector's Item", "Iconic Design"],
    category: "Oldtimer",
    image: oldtimer,
  },
];

const Car = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCars, setFilteredCars] = useState(carsData);

  useEffect(() => {
    let currentCars = carsData;

    if (selectedCategory !== "All") {
      currentCars = currentCars.filter(
        (car) => car.category === selectedCategory
      );
    }

    if (searchTerm) {
      currentCars = currentCars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCars(currentCars);
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-[#009689] text-sm font-semibold uppercase tracking-wider mb-2">
          BROWSE OUR COLLECTION
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Find Your Dream Car
        </h1>
        <div className="relative w-full max-w-lg mx-auto mb-8">
          <input
            type="text"
            placeholder="Search by car name..."
            className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent text-gray-700"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Kategória szűrő gombok */}
        <div className="flex justify-center space-x-4 mb-16">
          {["All", "Electric", "Sports", "SUV", "Oldtimer"].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ease-in-out
                ${
                  selectedCategory === category
                    ? "bg-[#009689] text-white shadow-md" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300" 
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12">
        
        <p className="text-[#009689] text-sm font-semibold uppercase tracking-wider text-center mb-2">
          EXCLUSIVE SELECTION
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Our Premium Cars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="w-full h-56 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  {car.image ? (
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      className="text-gray-300 w-24 h-24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 13.5l9-7.5 9 7.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-5.5zM11.5 16h1m-1-4h1m-1-4h1m-1-4h1M7 21h10a2 2 0 002-2v-9l-9-7.5-9 7.5v9a2 2 0 002 2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17 12a5 5 0 11-10 0 5 5 0 0110 0z"
                      />
                    </svg>
                  )}
                  {/* Kategória címkék */}
                  {car.category === "Electric" && (
                    <span className="absolute bottom-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Electric
                    </span>
                  )}
                  {car.category === "Sports" && (
                    <span className="absolute bottom-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Sports
                    </span>
                  )}
                  {car.category === "SUV" && (
                    <span className="absolute bottom-3 left-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      SUV
                    </span>
                  )}
                  {car.category === "Oldtimer" && (
                    <span className="absolute bottom-3 left-3 bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Oldtimer
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {car.name}
                    </h3>
                    {/* $*/}
                    <p className="text-red-600 text-lg font-bold">
                      ${car.price}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {car.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="flex items-center justify-center text-[#009689] font-semibold py-2 rounded-md hover:bg-[#E0F2F1] transition duration-200 mt-auto" // 
                  >
                    View Details
                    <svg
                      className="ml-2 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No results found with the specified filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Car;