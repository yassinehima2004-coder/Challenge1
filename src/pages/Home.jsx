
export default function Home() {
  return (
    <>
    <section id="hero" className="max-w-7xl overflow-hidden pt-20">
      <div className="absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-indigo-200/70" />
      <div className="absolute right-10 top-28 h-56 w-56 rounded-full border border-indigo-400/40" />
      <div className="absolute right-20 top-32 h-64 w-64 rounded-full bg-indigo-300/40" />
      <div className="absolute left-12 top-[520px] h-28 w-28 rounded-full border border-indigo-400/50" />
      <div className="absolute bottom-12 left-0 h-40 w-40 rounded-full border-b-2 border-l-2 border-indigo-300/80" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
          Free and Open-Source Next.js
          <br />
          Template for Startup &amp; SaaS
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-500 md:text-xl">
          Startup is free Next.js template for startups and SaaS business websites comes with
          all the essential pages, components, and sections you need to launch a complete
          business website, built-with Next.js and Tailwind CSS.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-md bg-indigo-500 px-8 py-4 font-semibold text-white shadow-md hover:bg-indigo-600">
            🔥 Get Pro 
          </button>
          <button className="rounded-md bg-slate-900 px-8 py-4 font-semibold text-white shadow-md hover:bg-slate-800">
            Star on GitHub
          </button>
        </div>
      </div>
    </section>
    <section id="features" className="max-w-7xl py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="w-full mx-auto text-center max-w-[570px]">
          <h2 className="mb-4 text-3xl font-bold text-black lg:text-[45px]">Main Features</h2>
          <p className="text-lg  text-slate-700">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 py-16 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full">
            <div className="bg-indigo-500 mb-10 h-[70px] w-[70px]  rounded-md"></div>
            <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Crafted for Startups</h3>
            <p className="text-slate-700 pr-[10px] font-medium">Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</p>
          </div>
          <div className="w-full">
            <div className="bg-indigo-500 mb-10 h-[70px] w-[70px]  rounded-md"></div>
            <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Crafted for Startups</h3>
            <p className="text-slate-700 pr-[10px] font-medium">Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</p>
          </div>
          <div className="w-full">
            <div className="bg-indigo-500 mb-10 h-[70px] w-[70px]  rounded-md"></div>
            <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Crafted for Startups</h3>
            <p className="text-slate-700 pr-[10px] font-medium">Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</p>
          </div>
          <div className="w-full">
            <div className="bg-indigo-500 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md"></div>
            <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Crafted for Startups</h3>
            <p className="text-slate-700 pr-[10px] font-medium">Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</p>
          </div>
          <div className="w-full">
            <div className="bg-indigo-500 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md"></div>
            <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Crafted for Startups</h3>
            <p className="text-slate-700 pr-[10px] font-medium">Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</p>
          </div>
          <div className="w-full">
            <div className="bg-indigo-500 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md"></div>
            <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Crafted for Startups</h3>
            <p className="text-slate-700 pr-[10px] font-medium">Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.</p>
          </div>
        </div>


      </div>
    </section>
    </>
  );
}