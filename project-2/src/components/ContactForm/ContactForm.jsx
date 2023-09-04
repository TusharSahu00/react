import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { useState } from "react";
 

const ContactForm = () => {
const [name,setName] = useState("tushar");
const [email,setEmail] = useState("tushar");
const [text,setText] = useState("tushar");

 

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHATS" />
          <Button text="VIA CALL" />
        </div>
        <Button isOutline="true" text="VIA EMAIL FORM" />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="Submit" />
          </div>
          <div>{name  +" " + email  +" " + text }</div>

        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
