import React from 'react';

import styles from "./Submission.module.css";

const Submission = () => {
  return (
    <main>
      <h2>برجاء كتابة بيانات الشخص المتقدم بعناية حتي يتم قبول البيانات.</h2>
      <section className={styles.subSection}>
        <form>
          <label htmlFor="username">الاسم الرباعي</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="email">البريد الالكتروني</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">كلمة مرور</label>
          <input type="password" id="password" name="password" required />
          <label htmlFor="phone">رقم هاتف مسجل علي واتساب</label>
          <input type="tel" id="phone" name="phoneNumber" required />
          <label htmlFor="address">العنوان</label>
          <input type="text" id="address" name="address" required />
          <label htmlFor="date">تاريخ الميلاد</label>
          <input type="date" id="date" name="date" required />
          {/* TODO */}
          <input type="submit" value="سجل طلبك" />
        </form>
      </section>
    </main>
  );
}
 
export default React.memo(Submission);