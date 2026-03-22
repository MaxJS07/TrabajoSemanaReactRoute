import React from "react";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary fixed-top "  data-bs-theme="dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">ESTUDIANTES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/components">COMPONENTES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/calculator">CALCULADORA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/tasks">TAREAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/card">CARTAS</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;











