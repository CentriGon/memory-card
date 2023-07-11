

export const NavBar = (props) => {



    return <nav>
        <h1> Cat Memory Game </h1>
        <h2> {`Score: ${props.score}`}</h2>
    </nav>
}