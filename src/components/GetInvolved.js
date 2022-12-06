import React from "react";
import Cat1 from "../assets/images/cat1.png";
import Cat2 from "../assets/images/cat2.png";
import Cat3 from "../assets/images/cat3.png";
import Cat4 from "../assets/images/cat4.png";

const GetInvolved = () => {
  return (
    <div className="w-10/12 m-auto mt-24">
      <p className="text-4xl font-semibold text-center">Get Involved</p>
      <p className="w-full sm:w-8/12 m-auto leading-8 text-center mt-8">
        From raising the tiniest orphaned kitten, to giving a pair of cats a
        ride to a vet appointment, to helping make adoptions happen, to giving a
        new home to cat who lost theirs, and everything in between… being part
        of SpayMart’s lifesaving work is a feeling like no other! Be here for
        the cats and kittens who need you!
      </p>
      <div className="flex flex-wrap gap-20 lg:gap-48 justify-center mt-20">
        <div className="sm:w-80 sm:h-80 w-44 h-44 relative">
          <img src={Cat1} alt="" />
          <p className="bg-red-600 cursor-pointer px-5 py-3 w-32 mt-2 md:mt-8 m-auto text-center rounded-full text-white font-bold">
            ADOPT
          </p>
          <p className="absolute sm:font-semibold font-normal sm:leading-8 leading-4 sm:-top-8 sm:-left-8 -top-2 -left-2 text-center sm:p-12 p-3 flex items-center opacity-0 hover:opacity-100 text-white rounded-full transition sm:w-96 sm:h-96 w-48 h-48 getInvolved">
            SpayMart’s adoption centers feature cats and kittens, so if you’re
            looking for the perfect feline companion, you’ve come to the right
            place.
          </p>
        </div>
        <div className="sm:w-80 sm:h-80 w-44 h-44 relative">
          <img src={Cat2} alt="" />
          <p className="bg-red-600 cursor-pointer px-5 py-3 w-32 mt-2 md:mt-8 m-auto text-center rounded-full text-white font-bold">
            FOSTER
          </p>
          <p className="absolute sm:font-semibold font-normal sm:leading-8 leading-4 sm:-top-8 sm:-left-8 -top-2 -left-2 text-center sm:p-12 p-3 flex items-center opacity-0 hover:opacity-100 text-white rounded-full transition sm:w-96 sm:h-96 w-48 h-48 getInvolved">
            SpayMart’s adoption centers feature cats and kittens, so if you’re
            looking for the perfect feline companion, you’ve come to the right
            place.
          </p>
        </div>
        <div className="sm:w-80 sm:h-80 w-44 h-44 relative">
          <img src={Cat3} alt="" />
          <p className="bg-red-600 cursor-pointer px-5 py-3 w-32 mt-2 md:mt-8 m-auto text-center rounded-full text-white font-bold">
            DONATE
          </p>
          <p className="absolute sm:font-semibold font-normal sm:leading-8 leading-4 sm:-top-8 sm:-left-8 -top-2 -left-2 text-center sm:p-12 p-3 flex items-center opacity-0 hover:opacity-100 text-white rounded-full transition sm:w-96 sm:h-96 w-48 h-48 getInvolved">
            SpayMart’s adoption centers feature cats and kittens, so if you’re
            looking for the perfect feline companion, you’ve come to the right
            place.
          </p>
        </div>
        <div className="sm:w-80 sm:h-80 w-44 h-44 relative">
          <img src={Cat4} alt="" />
          <p className="bg-red-600 cursor-pointer px-5 py-3 w-32 mt-2 md:mt-8 m-auto text-center rounded-full text-white font-bold">
            VOLUNTEER
          </p>
          <p className="absolute sm:font-semibold font-normal sm:leading-8 leading-4 sm:-top-8 sm:-left-8 -top-2 -left-2 text-center sm:p-12 p-3 flex items-center opacity-0 hover:opacity-100 text-white rounded-full transition sm:w-96 sm:h-96 w-48 h-48 getInvolved">
            SpayMart’s adoption centers feature cats and kittens, so if you’re
            looking for the perfect feline companion, you’ve come to the right
            place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
