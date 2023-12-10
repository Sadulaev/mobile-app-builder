"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const index = () => {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    router.push("/projects");
  }, [pathname]);
  return "";
};

export default index;
