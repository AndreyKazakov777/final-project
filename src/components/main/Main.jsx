import css from './Main.module.css'
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Main = () => {
    const user = useSelector(state => state.appReducer.activeUser)

    if (user === '') {
        return (
            <main className={(css.main + ' ' + css.noUser)}>
                <div className={css.dark}></div>
                <div className={(css.content + ' ' + css.contentNoUser)}>
                    <h1 className={css.title}>Самый удобный велопрокат в твоём городе!</h1>
                    <p>Если Ваш велосипед был украден, не нужно переживать.</p>
                    <p>Сообщите нам о краже велосипеда нажав на кнопку SOS )</p>
                    <Link to='/newcase'>
                        <button className={(css.btn + ' ' + css.btnNewCase)}>SOS</button>
                    </Link>
                </div>
                <div className={css.window}>
                    <Outlet />
                </div>
                <div className={css.container}>
                <h2>Аренда в THE BIKE это:</h2>
                
                <ul>- Бесплатный тест-драйв;</ul>
                <ul>- Техподдержка и обслуживание;</ul>
                <ul>- Доставка и забор;</ul>
                <ul>- Никакого залога;</ul>
                <ul>- Самые низкие цены.</ul>
            

                </div>
            </main>
             
        )
    } else {
        return (
            <main className={(css.main + ' ' + css.user)}>
                <div className={css.dark}></div>
                <div className={css.content + ' ' + css.contentUser}>
                    <Link to='/newcase'>
                        <button className={(css.btn + ' ' + css.btnNewCase)}> SOS <br/>-<br /> Сообщить о краже</button>
                    </Link>
                    <div className={css.work}>
                        <Link to='/cases'>
                            <button className={(css.btnWorkOrange)}>Список сообщений о кражах</button>
                        </Link>
                        <Link to='/officers'>
                            <button className={(css.btnWorkGreen)}>Ответственные сотрудники</button>
                        </Link>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main