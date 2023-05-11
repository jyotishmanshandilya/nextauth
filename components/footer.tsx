import Link from "next/link"
import styles from "./footer.module.css"
import packageJSON from "../package.json"
import { useSession } from "next-auth/react"

export default function Footer() {
  const {data: session} = useSession();

  return (
    <footer className={styles.footer}>
      <hr />
      <p>building <a href="https://www.dascii.com/">dascii</a></p>
      {session ? (
      <div>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <a href="https://www.instagram.com/jyotishman_jbx/">insta</a>
            </li>
            <li className={styles.navItem}>
              <a href="https://twitter.com/Jyotishman544">twitter</a>
            </li>
            <li className={styles.navItem}>
              <a href="https://www.linkedin.com/in/jyotishman-shandilya/">linkedin</a>
            </li>
          </ul>
      </div>
      ) : (
        <p>Sign In to see my socials</p>
      )
      }
    </footer>
  )
}
