import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";

export default function NavBar(){
  return(
    <>
       <header>
      {/* Mobile & Tablet */}
      <div className="block lg:hidden">
        <MobileNav />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
    </header>
    </>
  );
}