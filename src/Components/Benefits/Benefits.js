import React from "react";
import { FaArrowRight } from "react-icons/fa";
import arrowRight from "../../assets/images/arrow-green2.png";

const Benefits = () => {
  const benefits = [
    { id: 1, name: "Ev Charging", img: "https://i.ibb.co/DLDmV9x/ev.png" },
    {
      id: 2,
      name: "Affordable Price",
      img: "https://i.ibb.co/Vg59GG1/price.png",
    },
    {
      id: 3,
      name: "Charging Points",
      img: "https://i.ibb.co/DtLN3kV/charging.jpg",
    },
    {
      id: 4,
      name: "Nature Friendly",
      img: "https://i.ibb.co/s13b2TF/nature.png",
    },
  ];

  return (
    <section className="py-20 px-20">
      <span className="flex items-center justify-center text-center mb-5">
        <img src={arrowRight} className="h-4 w-20 mr-2" alt="" />
        <p className="text-lime-500 font-semibold text-center">Why Choose Us</p>
      </span>
      <span className="flex items-center">
        <h1 className="text-3xl font-bold lg:ml-80 text-end">
          Why Us <br /> Electric Vehicle
        </h1>
        <p className="pl-7">
          Expedita eligendi fuga in saepe asperiores vel sequi animi neque illum{" "}
          <br />
          provident facilis ea, doloribus sit, facere reiciendis pariatur
          inventore itaque soluta.
        </p>
      </span>

      <div className="py-10">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="w-full h-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg text-black dark:bg-gray-800 hover:-translate-y-2 hover:shadow-2xl hover:bg-lime-600 hover:text-white"
            >
              <img
                className="object-cover object-center w-28 h-28 mx-auto p-4"
                src={benefit.img}
                alt="..."
              />

              <div className="px-6 py-4">
                <h2 className="text-xl font-semibold dark:text-white">
                  {benefit.name}
                </h2>

                <p className="py-4  dark:text-gray-400">
                  Aut esse laboriosam fugiat ipsa perferendis eius in distinctio
                  inventore asperiores doloremque, deserunt similique quo unde.
                </p>
                <span className="flex items-center mb-4">
                  <p>Explore More </p>
                  <FaArrowRight className="text-lime-500 text-2xl pl-2" />{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Benefits;
