import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

const page = () => {
  const category = [
    {
      image: "/c1.jpg",
      author: "John Wick",
      title: "Quick Tab Recovery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
      timestamp: "7/9/20205",
    },
    {
      image: "/c1.jpg",
      author: "John Wick",
      title: "Quick Tab Recovery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
      timestamp: "7/9/20205",
    },
    {
      image: "/c1.jpg",
      author: "John Wick",
      title: "Quick Tab Recovery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
      timestamp: "7/9/20205",
    },
    {
      image: "/c1.jpg",
      author: "John Wick",
      title: "Quick Tab Recovery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
      timestamp: "7/9/20205",
    },
    {
      image: "/c1.jpg",
      author: "John Wick",
      title: "Quick Tab Recovery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
      timestamp: "7/9/20205",
    },
    {
      image: "/c1.jpg",
      author: "John Wick",
      title: "Quick Tab Recovery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus rerum atque. Omnis hic ea error modi, voluptatem architecto praesentium.",
      timestamp: "7/9/20205",
    },
  ];
  return (
    <main className="min-h-dvh">
     <section className="min-h-[40vh] bg-blue-700">
        <div className="min-h-[40vh] flex items-center justify-center">
          <div className="space-y-5">
            <h1 className="text-white text-4xl font-extrabold text-center">
              Explore Tips from Different Users
            </h1>
            <p className="text-gray-200 text-center text-lg">
              Browse clever tips from everyday users to make your 
              life easier, smarter, and more efficient.
            </p>
          </div>
        </div>
      </section>

       <section className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 md:p-10 p-3">
        {category.map((category, i) => (
          <div key={i} className="space-y-3 shadow-md p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p>{category.timestamp}</p>
                
              </div>
              <IoIosMore className="text-xl" />
            </div>
            <Image
                  src={category.image}
                  alt="user"
                  width={800}
                  height={800}
                  className="w-full rounded-xl"
                />
            <p className="text-lg font-bold">{category.title}</p>
            <p className="line-clamp-2">{category.desc}</p>
            <div className="flex items-center justify-between">
              <h2 className="font-bold">{category.author}</h2>
              <Link
                href={"#"}
                className="flex items-center text-sm text-gray-600 hover:text-black transition-all duration-300"
              >
                Read More
                <MdKeyboardDoubleArrowRight className="text-lg" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default page
