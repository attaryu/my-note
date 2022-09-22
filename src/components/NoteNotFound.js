import React from "react";
import { MdSearchOff } from "react-icons/md"

export default function NoteNotFound() {
   return (
      <div className="note-not-found">
         <MdSearchOff className="note-not-found__icon" />
         <p className="note-not-found__text">
            note not <br /> found
         </p>
      </div>
   )
} 