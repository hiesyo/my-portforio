/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P2T0dKLMVWO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-blue-900 py-8 px-4 md:px-6">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-4 text-center text-white">
          <h1 className="text-4xl font-bold">Naoto Shimizu</h1>
          <p className="text-lg font-medium">Frontend Engineer</p>
          <p className="max-w-md">Kusozako Desu</p>
        </div>
      </header>
      <div className="flex flex-1">
        <nav className="bg-blue-800 p-6 text-white">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Skills</h3>
            <ul className="space-y-2 text-sm">
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
            <h3 className="text-lg font-semibold">Portfolio</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">View Projects</Link>
              </li>
            </ul>
            <h3 className="text-lg font-semibold">Blog</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Read Articles</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="flex-1 bg-gray-100 p-6">
          <div className="container mx-auto">
            <h2 className="mb-6 text-2xl font-bold">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link className="rounded-lg bg-white p-4 shadow" href="#">
                <Image
                  alt="Blog Post Thumbnail"
                  className="mb-4 aspect-video w-full rounded-lg object-cover"
                  height={360}
                  src="/placeholder.svg"
                  width={640}
                />
                <h3 className="mb-2 text-lg font-semibold">
                  Building a Responsive Web App with Next.js
                </h3>
                <p className="text-sm text-gray-500">April 15, 2023</p>
              </Link>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-blue-900 py-4 text-center text-white">
        <p>© {new Date().getFullYear()} Naoto shimizu. All rights reserved.</p>
      </footer>
    </div>
  );
}
