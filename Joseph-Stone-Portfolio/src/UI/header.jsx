import '../styles/header.css'

export default function Header({ children }) {
    return (
        <header>
            <h1>Joseph Stone</h1>
            {children}
        </header>
    )
}