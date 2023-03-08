import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />

      <h1 className="text-3xl mt-2 text-black font-bold mb-5 text-center">
        Welcompe to the Amazon Web Scraper
      </h1>

      <h2 className="text-lg italic text-black/50 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi
        at deserunt quam, exercitationem itaque vel minus optio maxime facilis
        asperiores sit eius doloremque ipsum eligendi laboriosam.
      </h2>
    </div>
  );
}

export default HomePage;
