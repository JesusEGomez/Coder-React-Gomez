import "./style.css"
import { FaWindowClose } from "react-icons/fa"

const Sidebar = ({onClose, children, isOpen}) =>{
    return(
        <div className="sideBar "
        style={{
            transform: isOpen ? "translateX(0)" : "translateX(100%)"
        }}>
            <div className="close-button-container">
            <FaWindowClose onClick={onClose} className="close-Button" />
            </div>
            {children}
        </div>
    )


}

export default Sidebar