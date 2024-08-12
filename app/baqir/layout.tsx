import Link from "next/link";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <nav className="flex gap-3 bg-white w-full">
        <Link href={"/baqir/portfolio"} className="text-blue-700">
          Portfolio
        </Link>
        <Link href={"/baqir"} className="text-blue-700">
          About
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default layout;
