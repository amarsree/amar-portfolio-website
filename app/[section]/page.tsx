"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { scrollToSection } from "@/lib/utils";

export default function SectionPage({
  params,
}: {
  params: { section: string };
}) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page
    router.replace("/");

    // After a short delay to allow for the redirect, scroll to the section
    setTimeout(() => {
      scrollToSection(params.section);
    }, 100);
  }, [params.section, router]);

  return null;
}
