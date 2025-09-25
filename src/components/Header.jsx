// Header.jsx

export function Header() {
  return (
    <header className="bg-slate-200 w-full h-[100px] flex items-center justify-center">
      <h1 className="text-6xl font-bold text-center text-white space-x-1 opacity-20">
        {['M', 'Y', ' ', 'C', 'O', 'L', 'O', 'R', ' ', 'R', 'E', 'A', 'C', 'T', ' ', 'A', 'P', 'P'].map((letter, index) => (
          <span
            key={index}
            className={`inline-block animate-rainbow text-${['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'][index % 7]}-500 text-shadow-xl`}
            style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation for each letter
          >
            {letter}
          </span>
        ))}
      </h1>
    </header>
  );
}
