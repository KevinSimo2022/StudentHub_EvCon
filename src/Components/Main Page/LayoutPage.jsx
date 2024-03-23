import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import styles from '../Navbar/navbar.module.css'
import Component1 from './Component1'
import TealButton from './TealButton'
import NextEvent from '../../Pages/HomePageComps/NextEvent'
import { EventNoteSharp } from '@mui/icons-material'
import Event from '../Event/Event'
import { useSelector, useDispatch } from "react-redux";
import BookmarkCard from "../BookmarkCard/BookmarkCard";
import { removeFromBookmark } from "../../redux/bookmark/action";
import Description from "../Description/Description";
import './Lay.css'
// import tealButton from './TealButton'
import meet from './meet.png'
export default function LayoutPage() {
  // const bookmarks = useSelector((state) => state.bookmarks);
  // const dispatch = useDispatch();

  // const handelClick = (item) => {
  //   dispatch(removeFromBookmark(item.id));
  // };

  // console.log("Heloow, ", bookmarks);
    const isAuth = useSelector(state => state.auth.isAuth)
    
    if (isAuth) {
return <Redirect to="/home"/>
    }
    return (
        <div>

{/* <Description /> */}
   
     
            <Navbar />

             <img className={styles.blueBlob} src="https://secure.meetupstatic.com/next/images/blobs/green-blob.svg" alt="img"/>

            <section className={styles.sec1}>
                <div className={styles.sec1Grid}>
                    <div className={styles.sec1sec1}>
                        <h1 className={styles.sec1h1}>Welcome to StudentHub Events Connect!</h1>
                        <p className={styles.sec1p}>Discover academic conferences, workshops, and networking events in Kigali's universities. Streamline your educational experience and expand your horizons with us!<br></br><span>Join now to start exploring!</span>
</p>
                    </div>   
                    <div className={styles.sec1img}>
                        <img className={styles.sec1img} width="427px" height="290px" src={meet} alt="img" />
                    </div>
                </div>
            </section>
            
           
          
            <div className={styles.nextSec}>
      <div>

<NextEvent/>
</div>

<div className={styles.next2}>

<h1>Check out what’s happening:</h1>

<div className={styles.tealcont}>

<TealButton label="Starting Soon"/>

<TealButton label="Today"/>

<TealButton label="Tommorow"/>

<TealButton label="This Week"/>

<TealButton label="Online"/>

<TealButton label="In Person"/>

<TealButton label="Trending Near you"/>

</div>

</div>

            </div>
            {/* {bookmarks.length > 0 && <h1>Saved Events</h1>}
      {bookmarks.length > 0 &&
        bookmarks.map(
          ({
            id,
            img_url,
            event_mode,
            date,
            event_name,
            event_place,
            attendees
          }) => (
            <BookmarkCard
              key={id}
              id={id}
              img_url={img_url}
              event_mode={event_mode}
              date={date}
              event_name={event_name}
              event_place={event_place}
              attendees={attendees}
              handelClick={handelClick}
            />
          )
        )} */}
            <Footer />
            
 </div>



     

   
   
  );
}
