import SnakeGame from "./components/SnakeGame";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Retro <span className="text-green-500">Snake</span>
        </h1>
        <p className="max-w-md text-lg text-zinc-400">
          A classic snake game built with React, Next.js, and Tailwind CSS.
        </p>
        
        <SnakeGame />
      </main>
      
      <footer className="mt-16 text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Snake Game App</p>
      </footer>
    </div>
  );
}
