import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import TextField from '@mui/material/TextField';
import { INoteContent } from "./App";

interface ICreateAreaProps {
    addNote: (note: INoteContent) => void;
}

function CreateArea(props: ICreateAreaProps) {

    const [isExpanded, setExpanded] = useState(false);

    const [inputText, setInputText] = useState<INoteContent>({ date: "", content: "" });

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const { name, value } = event.target;

        setInputText((prevValue: INoteContent) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitNote(event: { preventDefault: () => void; }) {
        event.preventDefault();
        props.addNote(inputText);
        const note = {
            date: "",
            content: ""
        };
        setInputText(note);
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <TextField className="date"
                    onChange={handleChange}
                    value={inputText?.date}
                    defaultValue={new Date()}
                    name="date"
                    label="Date"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />}
                <textarea
                    onClick={expand}
                    onChange={handleChange}
                    name="content"
                    placeholder="Task description..."
                    rows={isExpanded ? 3 : 1}
                    value={inputText?.content} />

                <Zoom in={isExpanded}>

                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>

    );
}

export default CreateArea;
