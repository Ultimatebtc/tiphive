"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { collection, deleteDoc, doc, getDocs, query,} from "firebase/firestore";
import { db } from "@/lib/firebase.config";
import { useEffect } from "react";
import { TbLoader3 } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";

const CategoryComponent = () => {

    const [category, setTips] = useState([]);
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('');

    const fetchTip = async () => {
        let tipData = [];
        try {
            const querySnapshot = await getDocs(collection(db, "tips"))
            querySnapshot.forEach((doc) => {
                // id: doc.id,
                console.log(doc.id, " => ", doc.data());
                const id = doc.id
                const rec = { id, ...doc.data() }
                console.log(rec);
                tipData.push(rec)
                console.log(tipData);
            });
            setTips(tipData)
            // console.log(recipe);

        } catch (error) {
            console.error("Error fetching tips", error);
            alert("An error occurred")

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { fetchTip() }, [])

    // const result = category.filter(name =>
    //     name.toLowerCase().includes(search.toLowerCase())
    // )

    return (
        <main className="min-h-dvh">
            <section className="min-h-[40vh] bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed mt-8 rounded-xl">
                <div className="min-h-[40vh] bg-black/50 flex items-center justify-center rounded-xl">
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

            {
                loading ? (
                    <div className="h-[50vh] flex items-center justify-center">
                        <TbLoader3 className="animate-spin text-5xl text-green-600" />
                    </div>
                ) : (


                    <section className="bg-white p-6 rounded-xl shadow-md space-y-5">
                        {/* <div className="max-w-5xl mx-auto flex items-center justify-center ">
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                placeholder="Search for tips..."
                                className=" flex-grow border border-gray-500 w-full h-full rounded-l-lg p-3 "
                            />
                            
                            <button
                                onClick={() => updateSearch()}
                                className="bg-green-600 text-white px-6 py-3 rounded-r-lg hover:bg-green-700 transition duration-300">
                                <FaSearch className="w-5 h-5" />
                            </button>
                            <div className="items"></div>
                        </div> */}
                        <h2 className="text-2xl font-semibold text-gray-800">Popular Tips</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 md:p-10 p-3">
                            {category.map((category, i) => (
                                <div key={i} className="space-y-3 shadow-md p-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <p>{category.timestamp}</p>

                                        </div>
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">{category.categories}</span>
                                    </div>
                                    <p className="text-lg font-bold">{category.title}</p>
                                    <p className="line-clamp-2">{category.desc}</p>
                                    <div className="flex items-center justify-between">
                                        <h2 className="font-bold">{category.author}</h2>
                                        <Link
                                            href={"/category/" + category.id}
                                            className="flex items-center text-sm text-gray-600 hover:text-black transition-all duration-300"
                                        >
                                            Read More
                                            <MdKeyboardDoubleArrowRight className="text-lg" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
        </main>
    );
};

export default CategoryComponent;
