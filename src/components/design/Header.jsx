import styles from "./Header.module.css"
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div className={styles.media}>
        <img src="لوجو مدرسة الشمامسة.png" alt="لوجو مدرسة الشمامسة" />
      </div>
      <nav>
        <ul>
          <li><Link to={"/"}>الصفحة الرئيسية</Link></li>
          <li><Link to={"/submission"}>التقديم</Link></li>
          <li>مراحل المدرسة</li>
          <li>للتواصل معنا</li>
        </ul>
      </nav>
    </header>
  );
}
 
export default Header;