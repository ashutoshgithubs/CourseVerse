import React from 'react';
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

export default function Card(props) {
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //It means current course is alreay liked, now I have to unlike it, i,e, to remove from likedCourse array.
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("Like removed");
        }
        else{
            //current course is not liked yet
            //So like the course, i.e, insert it in the likedCourse array
            //There will be two state of that array---> either empty or contained some liked courses
            //Case 1
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            //case 2 --> here I have to update the prev state of array. Add the current course & prev courses too.
            else{
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked successfully")
        }
    }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md drop-shadow-xl overflow-hidden hover:scale-105 transition-all duration-200' >
        <div className='relative'>
            <img src={course.image.url} alt='img' className='object-cover'></img>
            <button onClick={clickHandler}  className='rounded-full absolute right-2 bottom-[-12px] bg-white w-[40px] h-[40px] flex items-center justify-center'>
                {
                    likedCourses.includes(course.id)?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                }
            </button>
        </div>
        <div className='p-4 '>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='text-white mt-2'>
            {course.description.length<100?(course.description):(course.description.substr(0,100))+"..."}
            </p>
        </div>
       
    </div>
  )
}
