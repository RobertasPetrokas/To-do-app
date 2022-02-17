import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

interface INoteProps {
  date: string;
  content: string;
  id: number;
  onDelete: (id: number) => void;
}

function Note(props: INoteProps) {
  const { date, content, id, onDelete } = props;
  console.log(props);

  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <div className="note">
      <h1>{date}</h1>
      <p>{content}</p>
      <button onClick={deleteHandler}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
