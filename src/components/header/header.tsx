import { links } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const Header = () => {
  return (
    <header className="header contain">
      <div className="logo">
        <Image
          width="100"
          height="60"
          priority
          src="/images/logo.png"
          alt="logos"
        />
      </div>
      <nav>
        <section className="links">
          {links.map((link, i) => (
            <div key={i}>
              <a href={link.link}>{link.name}</a>
            </div>
          ))}
        </section>
        <div className="booking">
          <Link href="/booking" className="pri_btn">
            Book Now
          </Link>
        </div>
      </nav>

      <div className="mobile_nav">
        <Sheet>
          <SheetTrigger>
            <div className="menu_bar">
              <FaBarsStaggered size={26} />
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="bg-off-white min-w-full ">
            <div className="mobile_links mt-10 ">
              {links.map((link, i) => (
                <SheetClose key={i} className="w-full cursor-pointer">
                  <div className="nav_item">
                    {/* {link.icons} */}
                    <a href={link.link}>{link.name}</a>
                  </div>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
