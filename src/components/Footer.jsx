import footerSvg from '../assets/footer.svg'

export default function Footer() {
    return (
        <footer>
            <img src={footerSvg} />
            <div className="footer-text">
                <h1>thank you for coming!</h1>
                <p>made by alice</p>
            </div>
            <a  href="https://www.figma.com/design/C4na4CdPfd7ZpfOi6U7Vit/zesty?node-id=0-1&t=2RRuhtqC6lFgyIMa-1"
                target="_blank"
                title="see the design process for this site!">
                    <img src={`${import.meta.env.BASE_URL}icon.png`} />
            </a>
        </footer>
    )
}