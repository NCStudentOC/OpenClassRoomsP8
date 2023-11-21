import { useState } from 'react';
import arrow from '../assets/arrow.png'


function Collapse({ title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    function OpenCollapse() {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse_container ">
            <div className="collapse_contain">
                <h3 className="collapse_contain_title">{title}</h3>
                <img className={`collapse_arrow ${isOpen ? 'rotate' : ''}`} src={arrow} alt='Chevron' onClick={OpenCollapse} />
            </div>
            {isOpen && <div className="collapse_content">{text}</div>}
        </div>
    )
}

export default Collapse;
