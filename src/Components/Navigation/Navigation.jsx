import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className= {`${styles.navigation} container`}>
    <div className="logo">
      <img src="loggo-removebg-preview.png" width={100} height={72} alt="image"  className="logo-img" />
    </div>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
   </nav>
  )
}

export default Navigation
