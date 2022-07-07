import logo from '../images/logo.svg'
const Header = () => {
    return ( 
        <div className="header">
            <h1 className="balance">My balance <span>$921.48</span></h1>
            <img src={logo} alt="" />
        </div>
     );
}
 
export default Header;