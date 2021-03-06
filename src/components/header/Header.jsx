import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                {/* <span className="headerTitleSm">Build with React & Node</span> */}
                <span className="headerTitleLg">Engineers Diary</span>
            </div>
            <img 
                src="https://eusic-2018.challenges.org/wp-content/uploads/sites/6/2015/11/header-image-5.jpg" 
                alt="" 
                className="headerImg" 
            />
        </div>
    )
}
