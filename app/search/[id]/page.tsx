"use client";

import { deleteDoc, doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import Spinner from "react-spinkit";
import { db } from "@/firebase";
import Results from "@/components/Results";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const SearchPage = ({ params: { id } }: Props) => {
  const [snapshot, loading, error] = useDocument(doc(db, "searches", id));

  if (loading)
    return (
      <h1 className="flex flex-col items-center p-10 animate-pulse text-xl gap-y-5">
        Loading results...
        <Spinner name="pacman" color="indigo" fadeIn="none" />
      </h1>
    );

  if (!snapshot?.exists()) return;

  if (snapshot.data()?.status === "pending")
    return (
      <div className="flex flex-col gap-y-5 py-10 items-center justify-between">
        <p className="text-indigo-600 animate-pulse text-center">
          Scraping results from Amazon...
        </p>

        <Spinner
          style={{
            height: "100px",
            width: "100px",
          }}
          name="cube-grid"
          color="indigo"
          fadeIn="none"
        />

        <DeleteButton id={id} />
      </div>
    );

  return (
    <div className="py-5">
      <div className="flex items-center justify-between mb-7 gap-x-2">
        <div className="flex flex-col md:flex-row gap-x-4">
          <h1 className="font-bold text-xs md:text-lg">
            Search results for{" "}
            <span className="text-indigo-600">
              &quot;{snapshot.data()?.search}&quot;
            </span>
          </h1>
          <p className="text-gray-400 text-xs md:text-lg">
            {snapshot.data()?.results?.length > 0 &&
              `${snapshot.data()?.results?.length} results found`}
          </p>
        </div>

        <DeleteButton id={id} />
      </div>

      {snapshot.data()?.results?.length > 0 && (
        <Results results={snapshot.data()?.results} />
      )}
    </div>
  );
};

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteDoc(doc(db, "searches", id));
    router.push("/");
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs md:text-md"
    >
      Delete Search
    </button>
  );
};

export default SearchPage;
