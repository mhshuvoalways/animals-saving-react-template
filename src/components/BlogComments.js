import React from "react";
import Person1 from "../assets/images/person1.webp";

const BlogComments = () => {
  return (
    <div className="w-10/12 m-auto">
      <p className="text-4xl mt-20 mb-10">3 Comments</p>
      <div className="flex gap-5 mt-10">
        <img src={Person1} alt="" className="w-20 h-20 rounded-full" />
        <div className="space-y-3">
          <p className="text-xl">Emmi Eva Joe</p>
          <p className="text-gray-400">JANUARY 9, 2018 AT 2:21PM</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quidem laborum necessitatibus, ipsam impedit vitae autem, eum
            officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
            impedit necessitatibus, nihil?
          </p>
        </div>
      </div>
      <div className="flex gap-5 mt-10">
        <img src={Person1} alt="" className="w-20 h-20 rounded-full" />
        <div className="space-y-3">
          <p className="text-xl">Emmi Eva Joe</p>
          <p className="text-gray-400">JANUARY 9, 2018 AT 2:21PM</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quidem laborum necessitatibus, ipsam impedit vitae autem, eum
            officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
            impedit necessitatibus, nihil?
          </p>
        </div>
      </div>
      <div className="flex gap-5 mt-10">
        <img src={Person1} alt="" className="w-20 h-20 rounded-full" />
        <div className="space-y-3">
          <p className="text-xl">Emmi Eva Joe</p>
          <p className="text-gray-400">JANUARY 9, 2018 AT 2:21PM</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quidem laborum necessitatibus, ipsam impedit vitae autem, eum
            officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
            impedit necessitatibus, nihil?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogComments;
