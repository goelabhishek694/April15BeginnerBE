import React, { useEffect, useState } from 'react'
import moment from 'moment';
import {Input, Row, Col, Divider, message} from "antd"
import {useNavigate, useParams} from "react-router-dom";
import { CalendarOutlined } from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/loaderSlice';
import { MovieById } from '../calls/movies';
import { GetAllTheatresByMovie } from '../calls/shows';
function SingleMovie() {
    const [movie, setMovie] = useState(null);
    const [theatres, setTheatres] = useState([]);
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const handleDate = (e) => {
        setDate(moment(e.target.value).format('YYYY-MM-DD'));
        navigate(`/movie/${params.movieId}?date=${e.target.value}`)
    }

    const getData = async () => {
        try {
          dispatch(showLoading());
          const movieResponse = await MovieById(params.movieId);
          if (movieResponse.success) {
            setMovie(movieResponse.data);
          } else {
            message.error(movieResponse.message);
          }
          dispatch(hideLoading());
        } catch (err) {
          message.error(err.message);
          dispatch(hideLoading());
        }
    };

    const getAllTheatres = async () => {
        try {
          dispatch(showLoading());
          const theatreResponse = await GetAllTheatresByMovie({movie:params.movieId, date});
          if (theatreResponse.success) {
            console.log(theatreResponse.data);
            
            setTheatres(theatreResponse.data);
          } else {
            message.error(theatreResponse.message);
          }
          dispatch(hideLoading());
        } catch (err) {
          message.error(err.message);
          dispatch(hideLoading());
        }
    };

    useEffect(() => {
        getData()
    },[]);

    useEffect(() => {
        getAllTheatres()
    },[]);
  return (
    <>
     <div className="inner-container">
       {movie && (
         <div className="d-flex single-movie-div">
           <div className="flex-Shrink-0 me-3 single-movie-img">
             <img src={movie.poster} width={150} alt="Movie Poster" />
           </div>
           <div className="w-100">
             <h1 className="mt-0">{movie.name}</h1>
             <p className="movie-data">
               Language: <span>{movie.language}</span>
             </p>
             <p className="movie-data">
               Genre: <span>{movie.genre}</span>
             </p>
             <p className="movie-data">
               Release Date:{" "}
               <span>{moment(movie.date).format("MMM Do YYYY")}</span>
             </p>
             <p className="movie-data">
               Duration: <span>{movie.duration} Minutes</span>
             </p>
             <hr />
             <div className="d-flex flex-column-mob align-items-center mt-3">
               <label className="me-3 flex-shrink-0">Choose the date:</label>
               <Input
                 onChange={handleDate}
                 type="date"
                 min={moment().format("YYYY-MM-DD")}
                 className="max-width-300 mt-8px-mob"
                 value={date}
                 placeholder="default size"
                 prefix={<CalendarOutlined />}
               />
             </div>
           </div>
         </div>
       )}
       {theatres.length === 0 && (
         <div className="pt-3">
           <h2 className="blue-clr">
             Currently, no theatres available for this movie!
           </h2>
         </div>
       )}
       {theatres.length > 0 && (
         <div className="theatre-wrapper mt-3 pt-3">
           <h2>Theatres</h2>
           {theatres.map((theatre) => {
             return (
               <div key={theatre._id}>
                 <Row gutter={24} key={theatre._id}>
                   <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                     <h3>{theatre.name}</h3>
                     <p>{theatre.address}</p>
                   </Col>
                   <Col xs={{ span: 24 }} lg={{ span: 16 }}>
                     <ul className="show-ul">
                       {theatre.shows
                         .sort(
                           (a, b) =>
                             moment(a.time, "HH:mm") - moment(b.time, "HH:mm")
                         )
                         .map((singleShow) => {
                           return (
                             <li
                               key={singleShow._id}
                               onClick={() =>
                                 navigate(`/book-show/${singleShow._id}`)
                               }
                             >
                               {moment(singleShow.time, "HH:mm").format(
                                 "hh:mm A"
                               )}
                             </li>
                           );
                         })}
                     </ul>
                   </Col>
                 </Row>
                 <Divider />
               </div>
             );
           })}
         </div>
       )}
     </div>
   </>
  )
}

export default SingleMovie