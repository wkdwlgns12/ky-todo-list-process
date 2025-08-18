import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <h1>오늘은 📆</h1>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

export default Header;
