
export default function Home() {
  return (
    <>
    <main id="home" className="max-w-7xl overflow-hidden pt-20">
      <div className="absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-indigo-200/70" />
      <div className="absolute right-10 top-28 h-56 w-56 rounded-full border border-indigo-400/40" />
      <div className="absolute right-20 top-32 h-64 w-64 rounded-full bg-indigo-300/40" />
      <div className="absolute left-12 top-[520px] h-28 w-28 rounded-full border border-indigo-400/50" />
      <div className="absolute bottom-12 left-0 h-40 w-40 rounded-full border-b-2 border-l-2 border-indigo-300/80" />

      <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col items-center justify-center px-6 text-center">
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
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/70 p-8 shadow-sm backdrop-blur">
            <h3 className="text-xl font-bold text-slate-900">Fast</h3>
            <p className="mt-3 text-slate-500">Clean layout and smooth scrolling behavior.</p>
          </div>
          <div className="rounded-2xl bg-white/70 p-8 shadow-sm backdrop-blur">
            <h3 className="text-xl font-bold text-slate-900">Modern</h3>
            <p className="mt-3 text-slate-500">Glass effect header with a soft SaaS design.</p>
          </div>
          <div className="rounded-2xl bg-white/70 p-8 shadow-sm backdrop-blur">
            <h3 className="text-xl font-bold text-slate-900">Responsive</h3>
            <p className="mt-3 text-slate-500">Works on mobile, tablet, and desktop.</p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}