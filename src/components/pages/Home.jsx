import { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

const Home = () => {
  useEffect(() => {
    document.title = "سان ستيفانو | الرئيسية";
  }, []);

  return (
    <main>
      <section className={styles.landing}>
        <div className={styles.submission}>
          <h2>التقديم متاح الأن</h2>
          <p>يمكنك التقديم من خلال موقعنا</p>
          <Link to={"/submission"}>اضغط هنا</Link>
        </div>
      </section>
    </main>
  );
}
 
export default Home;