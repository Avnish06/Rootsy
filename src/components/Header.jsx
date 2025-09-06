export function Header() {
return (
<header className="flex items-center justify-between px-6 md:px-20 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
<div className="flex items-center space-x-3">
<img
src="/Helper/logo.png"
alt="Globalize the Local Logo"
className="h-10 w-auto"
/>
<h1 className="text-2xl font-bold">Globalize the Local</h1>
</div>
<nav className="space-x-6 font-medium">
<a href="#" className="hover:text-yellow-300">Home</a>
<a href="#" className="hover:text-yellow-300">Products</a>
<a href="#" className="hover:text-yellow-300">Travel Insights</a>
<a href="#" className="hover:text-yellow-300">About</a>
</nav>
</header>
);
}