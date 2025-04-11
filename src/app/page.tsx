import Link from "next/link";
// import AnimatedCard from "@/components/AnimatedCard";
// import AnimatedCardTwo from "@/components/AnimatedCardTwo";
// import Dashboard from "@/components/dashboard-2/Dashboard";
import ParallaxEffect from "@/components/ParallaxEffect";
// import HamburgerMenu from "@/components/HamburgerMenu";

export default function Home() {
  return (
    <>
      <nav className="px-8 py-6 bg-[#0d1b2a] font-[family-name:var(--font-geist-sans)]">
        <ul className="flex space-x-4 container mx-auto">
          <li>
            <Link href="/hamburger-menu" className="text-purple-600 hover:text-purple-800">
              Hamburger Menu
            </Link>
          </li>

          <li>
            <Link href="/parallax-effect" className="text-purple-600 hover:text-purple-800">
              Parallax Effect
            </Link>
          </li>

          <li>
            <Link href="/animated-button" className="text-purple-600 hover:text-purple-800">
              Animated Button
            </Link>
          </li>

          <li>
            <Link href="/dashboard" className="text-purple-600 hover:text-purple-800">
              Dashboard
            </Link>
          </li>

          <li>
            <Link href="/dropdown-menu" className="text-purple-600 hover:text-purple-800">
              Dropdown Menu
            </Link>
          </li>

          <li>
            <Link href="/image-grid" className="text-purple-600 hover:text-purple-800">
              Image Grid
            </Link>
          </li>
        </ul>
      </nav>

      <ParallaxEffect />
    </>
  );
}
