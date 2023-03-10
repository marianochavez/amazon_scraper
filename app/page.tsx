import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <DocumentMagnifyingGlassIcon className="w-40 md:w-64 text-indigo-600/20" />

      <h1 className="text-2xl md:text-3xl mt-2 text-black font-bold mb-5 text-center">
        Welcompe to the Amazon Web Scraper
      </h1>

      <h2 className="text-md md:text-lg italic text-black/50 text-center">
        Search any product on Amazon.com and get the results in seconds.
      </h2>
    </div>
  );
}

export default HomePage;
