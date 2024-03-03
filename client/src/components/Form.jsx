import { useState } from "react";

const Form = () => {
    const [task, setText] = useState();
    const onFormSubmit = () => {

    }
    const onInputChange = (e) => {
        setText(e.target.value);
    }
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input className="input" onChange={onInputChange} placeholder="Enter a todo..." type="text" />
        </form>
    )
}
export default Form;