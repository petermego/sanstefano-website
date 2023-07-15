import React from 'react';
import { useFormik } from 'formik';

import styles from "./Submission.module.css";

const validate = values => {
  const errors = {};
  if (!values.username || values.username.trim() === '') {
    errors.username = 'مطلوب';
  } else if (values.username.trim().length < 15) {
    errors.username = 'يجب ان يكون الاسم لا يقل عن 15 حرف';
  }

  if (!values.password) {
    errors.password = 'مطلوب';
  } else if (values.password.length < 8) {
    errors.password = 'يجب ان يكون كلمة المرور لا تقل عن 8 خانات';
  }
  
  if (!values.email) {
    errors.email = 'مطلوب';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'بريد الكتروني مرفوض';
  }

  if (!values.formno) {
    errors.formno = 'مطلوب';
  }

  if (!values.phone || values.phone.trim() === '') {
    errors.phone = 'مطلوب';
  }

  if (!values.address) {
    errors.address = 'مطلوب';
  }

  if (!values.date) {
    errors.date = 'مطلوب';
  }

  return errors;
};

const Submission = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      formno: '',
      phone: '',
      address: '',
      date: '',
      stage: '',
    },
    validate,
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <main>
      <h2>برجاء كتابة بيانات الشخص المتقدم بعناية حتي يتم قبول البيانات.</h2>
      <section className={styles.subSection}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">الاسم الرباعي</label>
          {formik.errors.username ? <p>{formik.errors.username}</p> : null}
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            required />
          <label htmlFor="email">البريد الالكتروني</label>
          {formik.errors.email ? <p>{formik.errors.email}</p> : null}
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required />
          <label htmlFor="password">كلمة مرور</label>
          {formik.errors.password ? <p>{formik.errors.password}</p> : null}
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required />
          <label htmlFor="formno">رقم تسجيل الاستمارة</label>
          {formik.errors.formno ? <p>{formik.errors.formno}</p> : null}
          <input
            type="number"
            id="formno"
            name="formno"
            onChange={formik.handleChange}
            value={formik.values.formno}
            required />
          <label htmlFor="phone">رقم هاتف مسجل علي واتساب</label>
          {formik.errors.phone ? <p>{formik.errors.phone}</p> : null}
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            required />
          <label htmlFor="address">العنوان</label>
          {formik.errors.address ? <p>{formik.errors.address}</p> : null}
          <input
            type="text"
            id="address"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            required />
          <label htmlFor="date">تاريخ الميلاد</label>
          {formik.errors.date ? <p>{formik.errors.date}</p> : null}
          <input
            type="date"
            id="date"
            name="date"
            onChange={formik.handleChange}
            value={formik.values.date}
            required />
          <select
            id="stage"
            name="stage"
            required
            value={formik.values.stage}
            onChange={formik.handleChange}
          >
            <option>اختر المرحلة</option>
            <option value={1}>بيبي كلاس</option>
            <option value={2}>KG1</option>
            <option value={3}>KG2</option>
            <option value={4}>اولي ابتدائي</option>
            <option value={5}>ثانية ابتدائي</option>
            <option value={6}>ثالثة ابتدائي</option>
            <option value={7}>رابعة ابتدائي</option>
            <option value={8}>خامسة ابتدائي</option>
            <option value={9}>سادسة ابتدائي</option>
            <option value={10}>اعدادي</option>
            <option value={11}>ثانوي</option>
            <option value={12}>خريج</option>
          </select>
          <input type="submit" value="سجل طلبك" />
        </form>
      </section>
    </main>
  );
}
 
export default React.memo(Submission);