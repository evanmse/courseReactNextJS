import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className={styles.page}>
      <Image
        src={"/hero.png"}
        alt="Image de profil"
        width={200}
        height={200}
      />

      <h1>Bienvenue dans mon application</h1>
      
      <Link href="/contact" className="btn-link"> Visiter mon application</Link>
    </div>
  );
}
