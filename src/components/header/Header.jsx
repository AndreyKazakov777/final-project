import css from './Header.module.css'
import logo from './logo-bike.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { unsetUser, unsetToken } from '../../store/actionCreators/app'
import { unsetCases, setLoadedCases } from '../../store/actionCreators/cases'
import { unsetOfficers, setLoadedOfficers} from '../../store/actionCreators/officers'

const Header = () => {
    const user = useSelector(state => state.appReducer.activeUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(unsetUser()) 
        dispatch(unsetToken()) 
        dispatch(unsetCases())
        dispatch(setLoadedCases(false))
        dispatch(unsetOfficers())
        dispatch(setLoadedOfficers(false))

        navigate('/')
    }

    return (
        <header className={css.header}>
            <div className={css.nameCompany}>
                <img className={css.logo} src={logo} alt='logo' />
                <div className={css.name}>THE BIKE - лучший велопрокат!</div>
            </div>
            <div className={css.login}>
                <div className={css.user}>{user}</div>
                {user === '' && <Link to='/auth'>
                    <button className={css.btnLogin}>Личный кабинет</button>
                </Link>}
                {user !== '' && <button className={css.btnLogin} onClick={handleClick}>Выйти</button>}
            </div>
        </header>
    )
}

export default Header
