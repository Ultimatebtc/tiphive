<section className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Submit Your Quick Tip</h2>
    <form className="space-y-4">
        <div>
            <label>Title</label>
            <input type="text" className='w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-200' placeholder='Enter Your Title...' />

        </div>
        <div>
            <label for="tip-text" className="block text-gray-700 font-medium mb-2">Your Amazing Tip:</label>
            <textarea id="tip-text" rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-200" placeholder="e.g., 'Use a dryer sheet to remove deodorant stains.'"></textarea>
        </div>
        <div>
            <label for="tip-category" className="block text-gray-700 font-medium mb-2">Category:</label>
            <select id="tip-category" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-200">
                <option value="">Select a category</option>
                <option value="cooking">Cooking</option>
                <option value="cleaning">Cleaning</option>
                <option value="travel">Travel</option>
                <option value="tech">Tech</option>
                <option value="finance">Finance</option>
                <option value="health">Health</option>
                <option value="productivity">Productivity</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div>
            <label for="tip-media" className="block text-gray-700 font-medium mb-2">Optional: Image/Video</label>
            <input type="file" id="tip-media" className="w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition duration-200" />
            <p className="text-sm text-gray-500 mt-1">Max file size: 5MB</p>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 shadow-md">
            Submit Tip
        </button>
    </form>
</section>

import { Input } from "@mui/material";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCnWmgRDnDsMpMInx83PlQUYCzDkExP0k",
    authDomain: "tiphive-a52bd.firebaseapp.com",
    projectId: "tiphive-a52bd",
    storageBucket: "tiphive-a52bd.firebasestorage.app",
    messagingSenderId: "849852934053",
    appId: "1:849852934053:web:b3e5fe2bb7f0103737aa4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



<section className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Find Tips</h2>
    <div className="flex">
        <Input type="text" placeholder="Search for tips..." class="flex-grow p-3 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-200" />
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-r-lg hover:bg-indigo-700 transition duration-300">
            <FaSearch />
        </button>
    </div>
</section>