"use client";
import { SignedIn } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <SignedIn>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Selamat Datang di Dashboard !</h1>
      </div>
    </SignedIn>
  );
}
