import Image from "next/image";
import Link from "next/link";

type Props = {
  results: Product[];
};

const Results = ({ results }: Props) => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 w-full overflow-y-auto pb-2 h-[calc(100%-90px)] md:h-[calc(100%-100px)]">
      {results.map((result) => (
        <Link
          key={result.url}
          href={result.url}
          className="bg-white flex flex-col flex-wrap w-full max-w-[calc(100vw-140px)] rounded-lg shadow-md p-5 items-center"
        >
          <div className="h-32 md:h-40 overflow-hidden">
            <Image
              src={result.image}
              alt={result.title}
              className="object-contain h-32 md:h-40"
              width={200}
              height={200}
            />
          </div>

          <div className="flex flex-col py-5 flex-1 w-full flex-wrap">
            <p className="font-bold ">{result.title}</p>
            <p className="text-sm text-gray-500">
              {result.rating} {result.reviews} reviews
            </p>
          </div>

          <div className="flex space-x-2 justify-end flex-1">
            <p className="font-bold text-indigo-500 pt-2 text-xl mt-auto">
              {result.price > 0 ? `$${result.price}` : "N/A"}
            </p>

            {result.previus_price > 0 && (
              <p className="font-bold text-indigo-500/50 line-through pt-2 text-xl mt-auto">
                ${result.previus_price}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2 justify-end mt-5">
            {result.features.map(
              (feature, _i) =>
                feature && (
                  <p
                    key={feature + _i}
                    className="text-xs bg-indigo-500 px-2 py-1 text-white rounded-md"
                  >
                    {feature}
                  </p>
                )
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Results;
