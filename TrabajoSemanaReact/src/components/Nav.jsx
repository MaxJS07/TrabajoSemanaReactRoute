import React from "react";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary "  data-bs-theme="dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Estudiantes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/components">Componentes</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;











