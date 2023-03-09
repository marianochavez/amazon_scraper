"use client";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";
import Spinner from "react-spinkit";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  doc: DocumentData;
};

const SidebarRow = ({ doc }: Props) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(doc.id));
  }, [doc.id, pathname]);

  return (
    <li
      onClick={() => router.push(`/search/${doc.id}`)}
      className={`flex justify-between p-4 cursor-pointer hover:bg-white hover:shadow-md rounded-lg ${
        active && "bg-white shadow-md"
      }`}
    >
      <div className="flex flex-col justify-center">
        <p className="text-xs md:text-base font-bold">{doc.data().search}</p>
        {doc.data().status === "pending" && (
          <p className="text-xs">Scraping information...</p>
        )}
      </div>

      <span className="ml-2">
        {doc.data().status === "pending" ? (
          <Spinner name="cube-grid" color="indigo" fadeIn="none" />
        ) : (
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
        )}
      </span>
    </li>
  );
};

export default SidebarRow;
