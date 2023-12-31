function Project({ heading, content, image, bgcolor }) {
  return (
    <section>
      <div className={bgcolor + ' w-full'}>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center h-2/6">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
                {heading}
            </h1>
            <p className="mb-8 leading-relaxed display-linebreak">
                {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
