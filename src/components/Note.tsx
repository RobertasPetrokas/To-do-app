import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props: { date: string | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; content: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; onDelete: (arg0: any) => void; id: any; }) {
  console.log(props);
  return (
    <div className="note">
      <h1>{props.date}</h1>
      <p>{props.content}</p>
      <button onClick={() => {
          props.onDelete(props.id);
    }}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
