import React, { useEffect, useState } from "react";
import { reads } from "../constants";
import { useNavigate } from "react-router-dom";
import "../styles/reads.css"
import PopupModal from "./modal";


function Book({ reads }){

  const [bookSelected, setBookSelected] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = async () => {
      
      await setBookSelected(reads)
      await setIsOpen(true)

  }

    

    return(    
    <div className="w-fit">
      <div className="box-out" onClick={handleClick}>
        <div className="book books-1" style={{ backgroundImage: `url(${reads.backgroundurl})` }}></div>
      </div>

      <PopupModal
      isOpen = {isOpen}
      closeModal={() => setIsOpen(false)}
      book = {bookSelected}>
      </PopupModal>

    </div>


    )
}


export default Book