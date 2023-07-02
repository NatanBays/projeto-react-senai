


function InputAndLabel (props) {
    return(
        <div>
            <label>{props.title}</label>
            <input
            onChange={props.onChange}
            />
        </div>
    )
}
export default InputAndLabel
