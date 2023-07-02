import './emailForm.css'
import InputAndLabel from "../inputAndLabel/InputAndLabel";
import {useEffect, useState} from "react";

function EmailForm () {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [messages, setMessages] = useState('')
    const [content, setContent] = useState([])

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleContent = (e) => {
        setMessages(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const NewContent = {
            email: email,
            phone: phone,
            messages: messages
        }
        setContent([...content, NewContent])
        console.log(content)
        e.target.reset()
        console.log(content)
        alert("Mensagem enviada!")

    }
    useEffect(() => {
        console.log(content);
    }, [content]);

    return(
        <div className="email-form-container">
            <form onSubmit={handleSubmit}>
                <InputAndLabel
                    onChange={(e) => (handleEmail(e))}
                    title="Email:"/>
                <InputAndLabel
                    onChange={(e) => (handlePhone(e))}
                    title="Telefone:"/>
                <div>
                    <label>Mensagem:</label>
                    <textarea
                    onChange={(e) => (handleContent(e))}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default EmailForm
