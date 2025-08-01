import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const chooseUs = [
    {
      title: "Step-by-step",
      desc: "We make it easy to learn how to make anything, one step at a time. From the stovetop to the workshop, you are sure to be inspired by the awesome projects that are shared everyday.",
    },
    {
      title: "Made By You",
      desc: "Instructables are created by you. No matter who you are, we all have secret skills to share. Come join our community of curious makers, innovators, teachers, and life long learners who love to share what they make.",
    },
    {
      title: "A Happy Place",
      desc: "Making things makes people happy. We can't prove it, but we know it to be true. Find your happy place, and join one of the friendliest online communities anywhere.",
    },
  ];
  return (
    <main className="min-h-dvh mx-auto px-4 py-8 md:py-12 ">
      <section className=" bg-green-700 text-white rounded-xl p-8 md:p-12 mb-12 shadow-lg flex items-center justify-between flex-col md:flex-row">
        <div className=" md:w-2/3 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold  mb-4">Unlock Smarter Living with TipHive!</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6"><span className="md:text-2xl text-white font-bold">TipHive </span> let users discover and connect with other contributors, making the platform more engaging and community-driven, 
            discover and share ingenious quick tips and life hacks that simplify your daily routine.</p>
          <Link href={"/category"} className="bg-white text-green-600 px-6 py-2 rounded-full font-bold text-base md:text-xl hover:bg-white/90 transition-all ">
          Explore Tips
          </Link>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <Image src={"/logo2.png"} alt="logo2" width={800} height={800} className="bg-white w-40 h-40 md:w-64 md:h-64  rounded-full shadow-xl"/>
        </div>
      </section>

       <section className="bg-gray-100 min-h-[50vh] p-3 md:p-10">
        <div className="lg:px-5 p-3 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {chooseUs.map((reason, i) => (
            <div key={i} className="space-y-3">
              
              <h2 className="text-center font-bold text-gray-700 text-3xl">{reason.title}</h2>
              <p className="text-xl text-gray-600 text-center">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
