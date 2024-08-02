"use client";
import { SignIn } from "@clerk/nextjs";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
  }, []);

  return (
    <div className="signin-container">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
