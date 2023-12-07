"use client";

import React, { useEffect } from "react";
import { redirect } from "next/navigation";

const page = () => {
  useEffect(() => redirect("/dashboard"), []);
  return "";
};

export default page;
