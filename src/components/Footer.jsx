export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-20">
        <div>
          <h3 className="font-bold text-lg">Globalize the Local</h3>
          <p className="text-sm text-gray-400 mt-2">Connecting traditions, cultures, and travel worldwide.</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-6">
          <a href="#" className="hover:text-yellow-300">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-300">Terms & Conditions</a>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-6">&copy; {new Date().getFullYear()} Globalize the Local. All rights reserved.</p>
    </footer>
  );
}