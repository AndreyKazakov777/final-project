import css from './FormSignup.module.css'
import img from './professional-cyclist-woman.jpg' 
import { SERVER, REQUESTS, CLIENT_ID } from '../../config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputText from '../../elements/input-text/InputText'

const axios = require('axios').default

const FormSignup = () => {
    const reg = new RegExp(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/)

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLasttName] = useState('')
    const [clientID, setClientID] = useState(CLIENT_ID)
    const [messages, setMessage] = useState([])
    const [isSending, setIsSending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        let msgs = []
        if (reg.test(email) === false) {
            msgs = [ ...msgs, 'Некорректный e-mail']
        } 
        if (password.length === 0) {
            msgs = [ ...msgs, 'Не указан Пароль']
        } 
        if (clientID.length === 0) {
            msgs = [ ...msgs, 'Не указан Client ID']
        } 
        if (msgs.length === 0) {
                setIsSending(true)
                axios
                    .post(SERVER + REQUESTS.POST_SIGN_UP, {
                            email: email,
                            password: password,
                            clientId: clientID,
                            firstName: firstName,
                            lastName: lastName
                        }, {
                        headers: {
                        'Content-Type': 'application/json'
                        }
                    })
                    .then(response => {
                        if (response.data)  {
                            setIsSending(false)
                            navigate('/auth')
                        }
                    })
                    .catch(error => {
                        if (error.response) {
                            let errMessage = ''
                            switch (error.response.status) {
                                case 400: errMessage = 'Такой email уже зарегестрирован'
                                    break
                                default: errMessage = `Ошибка: ${error.response.status} - ${error.response.statusText}`
                            }
                            msgs = [ ...msgs, errMessage]
                        } else {
                            console.error(error)
                            msgs = [ ...msgs, error.message]
                        }
                        setMessage(msgs)
                        setIsSending(false)
                    })
        }
        setMessage(msgs)
    }

    return (
        <div className={css.registration}>
            <img className={css.img} src={img} alt="photo" />
            <div className={css.container}>
                <h1 className={css.title}>Введите свои данные <br />
                </h1>
                <form onSubmit={(e) => handleSubmit(e)} className={css.form}>
                    <div className={css.input}>
                        <p>E-mail (обязательное поле)</p>
                        <InputText
                            autofocus={true}
                            placeholder={"E-mail"}
                            validate={value => (reg.test(value) === false)}
                            onChange={value => { 
                                setEmail(value)
                                setMessage([])
                            }}
                            errorMessage={value => 'Введите корректный e-mail'}
                        />
                    </div>
                    <div className={css.input}>
                        <p>Пароль (обязательное поле)</p>
                        <InputText
                            placeholder={"Пароль"}
                            isPassword
                            validate={value => (value.length === 0)}
                            onChange={value => {
                                setPassword(value)
                                setMessage([])
                            }}
                            errorMessage={value => 'Введите пароль'}
                        />
                    </div>
                    <div className={css.input}>
                        <p>Имя</p>
                        <InputText
                            placeholder={"Имя"}
                            onChange={value => {
                                setFirstName(value)
                                setMessage([])
                            }}
                        />
                    </div>
                    <div className={css.input}>
                        <p>Фамилия</p>
                        <InputText
                            placeholder={"Фамилия"}
                            onChange={value => {
                                setLasttName(value)
                                setMessage([])
                            }}
                        />
                    </div>
                    <div className={css.input}>
                        <p>Client ID (обязательное поле)</p>
                        <InputText
                            placeholder={"Client ID"}
                            inputValue={clientID}
                            validate={value => (value.length === 0)}
                            onChange={value => {
                                setClientID(value)
                                setMessage([])
                            }}
                            errorMessage={value => 'Введите Client ID'}
                        />
                    </div>
                    <div>
                        {isSending && <div className={css.isSending}>Регистрация...</div>}
                        {!isSending && <button className={css.btnReg}>Зарегистрироваться</button>}
                        {messages.map((message, index) => (
                            <div className={css.message} key={index}>{message}</div>
                        ))}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormSignup
