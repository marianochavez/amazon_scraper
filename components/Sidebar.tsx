"use client";

import { db } from "@/firebase";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { collection, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  const [snapshot, loading, error] = useCollection(
    query(collection(db, "searches"), orderBy("start_eta", "desc"))
  );

  return (
    <div className="px-2 md:px-4 py-6 border-b border-indigo-500/50">
      <div className="flex flex-col items-center justify-center mb-4 md:mb-10">
        <Link href="/">
          <DocumentMagnifyingGlassIcon className="w-12 md:w-16 text-indigo-600" />
        </Link>

        <h1 className="md:inline text-center text-md md:text-3xl mt-2 mb-2 font-bold">
          Web Scraper
        </h1>
        <h2 className="hidden md:inline text-center text-xs italic">
          Scraping the Unscrapable
        </h2>
      </div>

      <div className="overflow-y-auto pb-4 h-[calc(100%-107px)] md:h-[calc(100%-200px)]">
        <ul className="flex flex-col gap-2">
          {snapshot?.docs.map((doc) => (
            <SidebarRow key={doc.id} doc={doc} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
