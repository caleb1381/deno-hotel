import styles from "./breadcrumb.module.css";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Federo } from "next/font/google";

const federo = Federo({
  subsets: ["latin"],
  weight: "400",
});

const Breadcrumb = () => {
  const path = usePathname();
  const splitted = path.split("/");
  console.log(splitted);
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={federo.className}>
        <Link href="/">Home</Link>
        <Link href={path}>{path.slice(1)}</Link>
      </div>
    </div>
  );
};

export default Breadcrumb;
