import { Wizard } from "@/components/wizard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <main className="w-full max-w-xl bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8">
        <Wizard />
      </main>
    </div>
  );
}
