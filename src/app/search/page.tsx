"use client";
import React, { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchPage() {
  // useRouter (hard navigation)
  const router = useRouter();
  const pathName = usePathname();

  // useSearchParams
  const searhParams = useSearchParams();

  return (
    <Suspense fallback={"loading..."}>
      <div> 
        PathName: {pathName}
        {/* button navigation using router */}
        <button className="border p-4 rounded" onClick={() => router.push("/")}>
          HomePage
        </button>
        {/* button forward using router */}
        <button className="border p-4 rounded" onClick={() => router.forward()}>
          Next Page
        </button>
        {/* button backward using router */}
        <button className="border p-4 rounded" onClick={() => router.back()}>
          Back From Previous Page
        </button>
        {/* searchParams */}
        Search Params: {searhParams.get("category")}
      </div>
    </Suspense>
  );
}
