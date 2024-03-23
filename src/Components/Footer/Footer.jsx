import * as React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./footer.module.css";

const styleImg = {
  height: "42px",
  cursor: "pointer"
};

function Footer() {
  return (
    <div className={styles.footer}>
      <h4 className={styles.head1}>
        Create your own Meetup group.
        <button className={styles.buttong}>Get Started</button>
      </h4>
      <hr />
      <div className={styles.container}>
        <div className={styles.items}>
          <p className={styles.heading}>Log In</p>
          <p>Help</p>
        </div>
        
      </div>

      <div className={styles.container1}>
        <div className={styles.division1}>
          <p className={styles.heading}>Follow us</p>
          <FacebookIcon sx={{ cursor: "pointer" }} fontSize="large" />
          <TwitterIcon
            sx={{ marginLeft: "35px", cursor: "pointer" }}
            fontSize="large"
          />
          <YouTubeIcon
            sx={{ marginLeft: "35px", cursor: "pointer" }}
            fontSize="large"
          />
          <InstagramIcon
            sx={{ marginLeft: "35px", cursor: "pointer" }}
            fontSize="large"
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2024 StudConnect</p>
      </div>
    </div>
  );
}

export default Footer;
