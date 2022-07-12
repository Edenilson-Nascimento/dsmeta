import logo from "../../asserts/img/logo.svg"
import "./styles.css"


function Header() {
    return(
      <>
       <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://www.linkedin.com/in/edenilson-nascimento-09635b150/">@Edenilson Nascimento</a>
            </p>
        </div>
    </header>
      </>
    )
  }
  
  export default Header