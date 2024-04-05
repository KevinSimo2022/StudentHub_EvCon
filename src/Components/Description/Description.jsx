import styles from "./description.module.css";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToAttending, removeFromAttending } from "../../redux/attend/action";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Description() {
  const { id } = useParams();
  const [state, setState] = useState(false);

  console.log("Param Id = ", id);

  const data = [
    {
      "id": 1,
    "img_url": "https://th.bing.com/th/id/R.d7e789c3b8bcb2b7880dd3b4b1d3edd6?rik=ytog4A4XipK5yA&riu=http%3a%2f%2ftechnobrains.io%2fwp-content%2fuploads%2f2021%2f07%2fflutter-Featured-Blog-Image2.jpg&ehk=qNtlUWmyUkVCjiGvmi7dbdWp32XXAQM3qbdnfOtyuBw%3d&risl=&pid=ImgRaw&r=0",
    "date": "5/19/2022",
    "event_name": "Flutter Programming Monthly - January",
    "event_place": "Kigali",
    "attendees": 24,
    "event_mode": "online",
    "category": "Technology",
    "public_details": "Let us meet online and get to know each other a bit and share some music choicws, favourite songs, artists and maybe sing with each other.Event link will be added later.",
    "presentation_details": "Call for Presentation: Coming soon",
    "workshop_details": "We are looking for Intermediate level Flutter content it can be a 20 minutes presentation or a 45 minutes hands on workshop code.",
    "hosted_by": "Kevin Simo & John Doe"
  },
  {
    "id": 2,
    "img_url": "https://th.bing.com/th?id=OIF.pJdxPnJ%2fE%2bO3L3lrxjqoXA&rs=1&pid=ImgDetMain",
    "date": "6/25/2024",
    "event_name": "Navigating Careers & Building Businesses",
    "event_place": "Kigali",
    "attendees": 102,
    "event_mode": "In-person",
    "category": "Career & Business",
    "public_details": "How to build yourself a successful carreer and businesses",
    "presentation_details": "Call for Presentation: Coming soon",
    "workshop_details": "Azure Saturday is a free community-focused Azure event dedicated to educating and engaging members of the local technical community. Azure Saturday draws upon the expertise of Azure IT professionals, developers and solutions architects who come together to share their real-world experiences, lessons learned, best practices, and general knowledge with other like-minded individuals.      ",
    "hosted_by": "Kevin Simo & John Doe"
  },
  {
    "id": 3,
    "img_url": "https://th.bing.com/th/id/R.9c0496ddd11caf5550c8053aaf92e95e?rik=mvuLQEzotvgcCQ&pid=ImgRaw&r=0",
    "date": "8/11/2022",
    "event_name": "FREE Online Event for Learning Communication, Leadership & Networking",
    "event_place": "Kigali",
    "attendees": 3,
    "event_mode": "online",
    "category": "Community & Environment",
    "public_details": "Hey everyone, we are glad to announce our monthly meetup for January. I hope you are all excited as we are.",
    "presentation_details": "Call for Presentation: Coming soon",
    "workshop_details": "What determines a good fate of happiness, or a bad fate of misfortune? We will have a Skype session to learn how Buddhism answers to these questions.Learn the wisdom of Buddha and lead a life of everlasting peace and joy",
    "hosted_by": "Kevin Simo & John Doe"
  },
  {
    "id": 4,
    "img_url": "https://formcake.com/images/aws-activate-logo.png",
    "date": "3/11/2022",
    "event_name": "Unleashing AWS for Development",
    "event_place": "Kigali",
    "attendees": 4,
    "event_mode": "online",
    "category": "Technology",
    "public_details": "Run code without provisioning or managing infrastructure. Simply write and upload code as a .zip file or container image.",
    "presentation_details": "Automatically respond to code execution requests at any scale, from a dozen events per day to hundreds of thousands per second.",
    "workshop_details": "Save costs by paying only for the compute time you use—by per-millisecond—instead of provisioning infrastructure upfront for peak capacity.",
    "hosted_by": "Damodar Lohani and Ambika Dulal"
  },
  {
    "id": 5,
    "img_url": "https://coreviewsystems.com/wp-content/uploads/data-engineering-cover-pic-FInal3-1024x485.png",
    "date": "6/27/2022",
    "event_name": "Data Engineering with Google Cloud A Masterclass by Dan Sullivan",
    "event_place": "Kigali",
    "attendees": 78,
    "event_mode": "online",
    "category": "Technology",
    "public_details": "lets you run code for virtually any type of application or backend service without provisioning or managing servers. You can trigger Lambda from over 200 AWS services and software as a service (SaaS) applications, and only pay for what you use.",
    "presentation_details": "Call for Presentation: Coming soon",
    "workshop_details": "Optimize code execution time and performance with the right function memory size. Respond to high demand in double-digit milliseconds with Provisioned Concurrency code.",
    "hosted_by": "Kevin Simo & John Doe"
  },
  {
    "id": 6,
    "img_url": "https://secure-content.meetupstatic.com/images/classic-events/231269622/333x188.webp",
    "date": "8/7/2022",
    "event_name": "Lets Talk About Life...",
    "event_place": "Kigali",
    "attendees": 6,
    "event_mode": "online",
    "category": "Religion & Spirituality",
    "public_details": "Process data at scale Execute code at the capacity you need, as you need it. Scale to match your data volume automatically and enable custom event triggers.",
    "presentation_details": "Call for Presentation: Coming soon",
    "workshop_details": "Use Amazon Simple Storage Service (Amazon S3) to trigger AWS Lambda data processing in real time after an upload, or connect to an existing Amazon EFS file system to enable massively parallel shared access for large-scale file processing.",
    "hosted_by": "Kevin Simo & John Doe"
  },
  {
    "id": 7,
    "img_url": "https://th.bing.com/th/id/OIP.bHi86q8SSjKlgF8VhgqOJQAAAA?rs=1&pid=ImgDetMain",
    "date": "4/7/2022",
    "event_name": "Learn how to create a Customer Journey Map",
    "event_place": "Kigali",
    "attendees": 83,
    "event_mode": "online",
    "category": "Art & Culture",
    "public_details": "Run interactive web and mobile backends Combine AWS Lambda with other AWS services to create secure, stable, and scalable online experiences.",
    "presentation_details": "Call for Presentation: Coming soon",
    "workshop_details": "Whatever the confusion may be, the root cause is that you most likely don't have a clear grasp of the customer’s journey to purchasing your product or service.",
    "hosted_by": "Damodar Lohani and Ambika Dulal"
  },
  {
    "id": 8,
    "img_url": "https://cdn.leverageedu.com/blog/wp-content/uploads/2020/03/06190810/Knowledge-Management.png",
    "date": "5/4/2022",
    "event_name": "Business Mastery Workshop",
    "event_place": "Kigali",
    "attendees": 8,
    "event_mode": "online",
    "category": "Career & Business",
    "public_details": "Learn how to communicate to resolve or diffuse group conflicts Make better decisions about using technology for group work based on key practical and conceptual considerations",
    "presentation_details": "Call for Presentation: Coming soon",
    "workshop_details": "Recently revised and updated!  Effective teamwork and group communication are essential for your professional and personal success.  In this course you will learn to: make better decisions, be more creative and innovative, manage conflict and work with difficult group members, negotiate for preferred outcomes, improve group communication in virtual environments, develop a better overall ",
    "hosted_by": "Kevin Simo & John Doe"
  },
  {
    "id": 9,
    "img_url": "https://www.autoentrepreneurduweb.fr/wp-content/uploads/Le-storytelling-c%E2%80%99est-quoi.jpg",
    "date": "10/1/2022",
    "event_name": "How to write a proper story",
    "event_place": "Kigali",
    "attendees": 86,
    "event_mode": "In-person",
    "category": "Writing",
    "public_details": "To create the best stories you can possibly make",
    "presentation_details": "Call for Presentation: Coming soon",
    "workshop_details": "Discover the art of crafting compelling narratives at the 'How to Write a Proper Story' event, where storytelling techniques are explored and shared.",
    "hosted_by": "Kevin Simo & John Doe"
  },
  {
    "id": 10,
    "img_url": "https://modules.ilabs.uw.edu/wp-content/uploads/M19_Early-STEM_page04-1024x768.jpg",
    "date": "10/9/2022",
    "event_name": "Advancing STEM Education: Bridging Theory and Practice",
    "event_place": "Kigali",
    "attendees": 100,
    "event_mode": "online",
    "category": "Science & Education",
    "public_details": "Improve STEM for the future",
    "presentation_details": "Call for Presentation: Coming soon",
    "workshop_details": "Join us for 'Advancing STEM Education: Bridging Theory and Practice' workshop, where educators and professionals collaborate to enhance STEM learning experiences.",
    "hosted_by": "Damodar Lohani and Ambika Dulal"
  }
  ];

  const a = data[id - 1];

  const eventsAttending = useSelector((state) => state.attending);
  console.log("Event Attending 121", eventsAttending);

  const dispatch = useDispatch();
  const handelClick = (a) => {
    if (state === false) {
      dispatch(addToAttending(a));
      setState(true);
    } else {
      dispatch(removeFromAttending(a.id));
      setState(false);
    }
  };

  return (
    <div>
      <div className={styles.container1}>
        <p className={styles.data}>{a.date}</p>
        <h1 className={styles.event}>{a.event_name}</h1>
        <div className={styles.host}>
          <img
            className={styles.user}
            src="https://etfbild.com/wp-content/uploads/2016/10/avatar.png"
            alt="user"
          />
          <div>
            <p className={styles.p1}>Hosted by</p>
            <p className={styles.p2}>{a.hosted_by}</p>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={a.img_url} alt="event" />
          <Link to="/home">
            <Button
              className={styles.button}
              sx={{ maxWidth: "160px", marginLeft: "160px" }}
              variant="contained"
              color="error"
              onClick={() => handelClick(a)}
            >
              {state ? "Attening" : "Attend Event"}
            </Button>
          </Link>
        </div>
        <h2>Details</h2>
        <p>{a.public_details}</p>
        <p>{a.presentation_details}</p>
        <p>{a.workshop_details}</p>
      </div>
    </div>
  );
}

export default Description;
