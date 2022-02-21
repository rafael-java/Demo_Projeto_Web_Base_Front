// import React, { useEffect } from "react";
// import "./eventsDetails.css";
// import { useSelector } from "react-redux";
// import { Card, Image, Button, Carousel } from "react-bootstrap";
// import "../../Assets/audio.mp3";
// import { useState } from "react";
// import { useParams } from "react-router";
// import image0 from "../../Assets/logoTipoNightFun.png";
// import image3 from "../../Assets/photo3.png";
// import image4 from "../../Assets/photo4.png";
// import image5 from "../../Assets/photo5.png";
// import image6 from "../../Assets/photo6.png";
// import { getEventsbyId, generateTicket } from "../../services/api";
// import CardEstablishment from "../../Components/CardEstablishment/CardEstablishment";

// export default function EventsDetails() {
//   const [event, setEvent] = useState(null);
//   const [ticket, setTicket] = useState(null);
//   const { id } = useParams();

//   function askTicket() {
//     generateTicket(id)
//       .then((response) => {
//         let data = response.data;
//         setTicket(data);
//       })
//       .catch((err) => {
//         console.log("err || ", err);
//       });
//   }

//   useEffect(() => {
//     getEventsbyId(id)
//       .then((response) => {
//         setEvent(response.data);
//       })
//       .catch((err) => {});
//   }, []);

//   function bla() {
//     return "oi";
//   }

//   postComment(bla())
//     .then((response) => {
//       if (response.status === 200) {
//         PROCESSAR;
//       }
//     })
//     .catch((error) => {
//       if (error.response.status === 404) {
//       }
//     });

//   return (
//     <div>
//       <div onClick={getEstablishment}>{estado ? <div>Testo</div> : null}</div>
//     </div>
//   );
// }
