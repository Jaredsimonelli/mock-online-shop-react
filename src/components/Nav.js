import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <ul id="navbar" className="nav justify-content-end" >

                <li className="nav-item">
                    <Link to="/" className="nav-link" id="new">New</Link>
                </li >

                <li className="nav-item">
                    <Link to="/shirts" className="nav-link" id="shirts">Shirts</Link>
                </li >

                <li className="nav-item">
                    <Link to="/hats" className="nav-link" id="hats">Hats</Link>
                </li >

                <li className="nav-item">
                    <Link to="/accessories" className="nav-link" id="accessories">Accessories</Link>
                </li >
            </ul >
        </>
    )
}

export default Nav