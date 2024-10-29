"use client";
import dynamic from 'next/dynamic';
import { Dropdown } from "flowbite-react";
const GrapesJSEditor = dynamic(() => import('./components/GrapesJSEditor'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>My Next.js App</h1>
      <GrapesJSEditor />
    </div>
  );
}