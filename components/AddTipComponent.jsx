"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { SlPaperPlane } from "react-icons/sl";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase.config";
import { TbLoader3 } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const AddTipComponent = ({ session }) => {
    const author = session?.user?.name;
    const uid = session?.user?.id;

    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false)

    console.log(author, uid);

    const initialValues = {
        title: "",
        categories: "",
        desc: "",

    };

    const validationSchema = Yup.object({
        title: Yup.string().required("This is a required field"),
        categories: Yup.string().required("This is a required field"),
        desc: Yup.string()
            .required("Please provide a description")
            .min(10, "Mininum of 10 characters"),
    });

    const handleSubmit = async (values, { resetForm }) => {
        setLoading(true);
        try {
            // object to be sent to the db
            const tipDetails = {
                author: session?.user?.name,
                authorId: uid,
                timestamp: new Date().toLocaleDateString(),
                ...values,
            };
            console.log(tipDetails);

            const docRef = await addDoc(collection(db, "tips"), tipDetails);
            setShowModal(true)
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
        resetForm();
    };

    return (
        <main className="min-h-dvh bg-gray-200 relative">
            <section className="min-h-[40vh] bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
                <div className="min-h-[40vh] bg-black/50 flex items-center justify-center p-3">
                    <div className="space-y-5">
                        <h1 className="text-white text-2xl md:text-4xl font-extrabold text-center">
                            Share your Tips for a better guide.
                        </h1>
                    </div>
                </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-md mt-5">
                <h2 className="max-w-3xl mx-auto text-2xl font-semibold text-gray-800 mb-6">Submit Your Quick Tip</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="max-w-3xl mx-auto space-y-4">
                        <div>
                            <label>Title</label>
                            <Field
                                name="title"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                                placeholder="Enter Your Title..."
                            />
                            <ErrorMessage
                                name="title"
                                component={"p"}
                                className="text-xs text-red-600"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Your Amazing Tip:</label>
                            <Field
                                name="desc"
                                as="textarea"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500
                                focus:border-indigo-500 transition duration-200"
                                placeholder="e.g., 'Use a dryer sheet to remove deodorant stains.'"
                            />
                            <ErrorMessage
                                name="desc"
                                component={"p"}
                                className="text-xs text-red-600"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Category:</label>
                            <Field as="select" name="categories" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-200">
                                <option value="">Select a category</option>
                                <option value="cooking">Cooking</option>
                                <option value="cleaning">Cleaning</option>
                                <option value="travel">Travel</option>
                                <option value="tech">Tech</option>
                                <option value="finance">Finance</option>
                                <option value="health">Health</option>
                                <option value="productivity">Productivity</option>
                                <option value="other">Other</option>
                            </Field>
                            <ErrorMessage
                                name="categories"
                                component={"p"}
                                className="text-xs text-red-600"
                            />
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className={`flex items-center justify-center gap-2 bg-green-600 w-full py-2 text-white text-lg hover:bg-green-700 transition-all duration-300 rounded-lg ${loading
                                ? "bg-gray-500 hover:bg-gray-500 cursor-not-allowed"
                                : ""
                                }`}
                        >
                            {loading ? (
                                <TbLoader3 className="text-2xl animate-spin text-center" />
                            ) : (
                                <span className="flex items-center gap-2">
                                    Submit Tip
                                    <SlPaperPlane />
                                </span>
                            )}
                        </button>
                    </Form>
                </Formik>
            </section>

            <div className={`h-auto w-full bg-black/80 absolute inset-0 ${showModal ? "flex" : "hidden"} items-center justify-center`}>
                <div className="w-[30rem] h-[15rem] bg-white relative flex items-center justify-center">
                    <button onClick={() => setShowModal(false)} className="absolute right-2 top-2">
                        <IoIosClose className="text-4xl text-red-600" />
                    </button>
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <FaCheckCircle className="text-center text-9xl text-green-600" />
                        <p className="text-lg ">Your Tips has been sucessfully uploaded</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AddTipComponent;