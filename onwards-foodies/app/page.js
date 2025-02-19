import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started! (Home)
      </h1>
      <Link href='/meals'>Meals</Link>
      <Link href='/community'>Community</Link>
      <Link href='/meals/share'>Share</Link>
      <Link href='/meals/nesto-drugo'>Nesto drugo</Link>
    </main>
  );
}
