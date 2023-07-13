import css from './Footer.module.css'

const Footer = () => {

    return (
        <footer className={css.footer}>
            <div className={css.content}>
            <a href="https://ru.freepik.com/free-vector/collection-of-bike-logo-template_12262925.htm#query=%D0%B2%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4%20logo&position=21&from_view=search&track=ais">Изображение от Freepik</a>
            <div>© ООО "ЗеБайк", 2023</div>
            <div className={css.contact}>Cлужба поддержки: 8(800)000-00-00</div>
            </div>
        </footer>
    )
}

export default Footer