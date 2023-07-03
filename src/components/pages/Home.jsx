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
      <article className={styles.description}>
        <h1>مدرسة و دياكونية سان ستيفانو للشمامسة</h1>
        <p>خدمة مدرسة الشمامسة بكنيسة العذراء مريم و الملاك ميخائيل و تشمل الحان و لغة قبطية و كتاب مقدس و عقيدة و طقس و محفوظات</p>
      </article>
    </main>
  );
}
 
export default Home;