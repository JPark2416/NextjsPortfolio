"use client";
import React, { useEffect } from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>JP</title>
        <meta name="description" content="오늘도 빡코딩!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-7 py-4 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
