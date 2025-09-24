// Footer.jsx

export function Footer() {
  return (
    <footer className="bg-slate-300 w-full py-12 flex flex-col items-center justify-center text-white">
      <div className="text-4xl font-bold mb-6">Stay Connected with Us</div>
      <div className="flex gap-8 mb-6">
        <button className="px-8 py-3 bg-blue-500 rounded-full hover:bg-blue-600 text-white text-xl transition-all">
          Contact Us
        </button>
        <button className="px-8 py-3 bg-green-500 rounded-full hover:bg-green-600 text-white text-xl transition-all">
          Learn More
        </button>
      </div>
      <div className="text-lg">© 2025 My Color React App. All Rights Reserved.</div>
    </footer>
  );
}
