import { NavLink} from "react-router-dom";




export default function Header() {
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
<NavLink to = "/Home" className={((isActive) => isActive? "text-yellow-900": "text-gray-700")}>Home</NavLink>
<NavLink to = "//Product" className={((isActive) => isActive? "text-yellow-900": "text-gray-700")}>Products</NavLink>
<NavLink to = "/Contactus" className={((isActive) => isActive? "text-yellow-900": "text-gray-700")}>Contactus</NavLink>


</nav>
</header>
);
}