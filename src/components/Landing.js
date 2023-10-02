function Landing() {
  return (
    <section id="landing">
      <div className="bg-slate-950 w-full">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center h-screen bg-slate-950">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 id="tickerheading" className="title-font sm:text-5xl text-4xl mb-4 font-medium text-white font-inconsolata whitespace-nowrap">
              
            </h1> 
              <br className="hidden lg:inline-block" />
            <h2 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
            I love software and web development.
            </h2>
            <p className="mb-8 leading-relaxed">
            I'm a dedicated software engineering student focused on delivering innovative solutions. On this website, I share my skills, projects, and experiences. 
            </p>
            <div className="flex justify-center">
              <a
                href="#about"
                className="inline-flex text-white border-slate-400 border-2 py-2 px-6 focus:outline-none hover:bg-slate-400 rounded text-lg">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
