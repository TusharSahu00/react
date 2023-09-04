import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <ul>
        <li>Location</li>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navigation;
