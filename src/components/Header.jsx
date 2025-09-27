// Header.jsx

export function Header() {
  return (
    <header className="bg-slate-200 w-full h-[100px] flex items-center justify-center">
      <h1 className="text-6xl font-bold text-center text-white space-x-1 opacity-20">
        {['M','a','c',' ',' ',' ','P','a','l','l','e','t'].map((letter, index) => (
  <span
    key={index}
    className={`inline-block animate-rainbow ${letter === ' ' ? 'mx-2' : 'text-white text-shadow-xl'}`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {letter}
  </span>
))}

      </h1>
    </header>
  );
}
