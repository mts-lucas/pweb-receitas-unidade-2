import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-extrabold text-purple-500 text-5xl">Receitas da 2 Unidade</h1>
      <ul className="flex flex-col">
        <li className="p-4">
          <Link href="/receita1">
            <p className="font-semibold text-xl bg-blue-500 p-4 rounded-xl">Receita 1</p>
          </Link>
        </li>
        <li className="p-4">
          <Link href="/receita2">
            <p className="font-semibold text-xl bg-blue-500 p-4 rounded-xl">Receita 2</p>
          </Link>
        </li>
        <li className="p-4">
          <Link href="/receita3">
            <p className="font-semibold text-xl bg-blue-500 p-4 rounded-xl">Receita 3</p>
          </Link>
        </li>
        <li className="p-4">
          <Link href="/receita4">
            <p className="font-semibold text-xl bg-blue-500 p-4 rounded-xl">Receita 4</p>
          </Link>
        </li>
        <li className="p-4">
          <Link href="/receita5">
            <p className="font-semibold text-xl bg-blue-500 p-4 rounded-xl">Receita 5</p>
          </Link>
        </li>
        <li className="p-4">
          <Link href="/receita6">
            <p className="font-semibold text-xl bg-blue-500 p-4 rounded-xl">Receita 6</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}