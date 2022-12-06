import React from "react";
const Benefits = () => {

const benefits = [
    {id:1, name:'Ev Charging', img:'https://i.ibb.co/DLDmV9x/ev.png'},
    {id:2, name:'Ev Charging', img:'https://i.ibb.co/Vg59GG1/price.png'},
    {id:3, name:'Ev Charging', img:'https://i.ibb.co/DtLN3kV/charging.jpg'},
    {id:4, name:'Ev Charging', img:'https://i.ibb.co/s13b2TF/nature.png'},
]

  return <div>
    {
        benefits.map(benefit =><div key={benefit.id} className="w-full h-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover object-center w-56 h-56 mx-auto p-8"
          src={benefit.img}
          alt="Category"
        />

        <div className="px-6 py-4">
          <h2 className="text-xl text-gray-800 dark:text-white">{benefit.name}</h2>

          <p className="py-2 text-gray-700 dark:text-gray-400">
         Aut esse laboriosam fugiat ipsa perferendis eius in distinctio inventore asperiores doloremque, deserunt similique quo unde, odit facilis amet obcaecati delectus velit.
          </p>
        </div>
      </div> )
    }
  </div>;
};
export default Benefits;
