const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>burhanuddin helmi</h1>
            <div className="links">
                <a href="#">About me</a>
                <a href="/create" style={{
                    color: "white", 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>my portfolio</a>
            </div>
        </nav>
      );
}
 
export default Navbar; 