import React from 'react'
import './sidebar.css'


function SideBarRow({selected, Icon, title,hideMobile}) {
    return (
        <div className={`sideBarRow ${selected && "selected"} ${hideMobile}`}>
            <Icon className="sideBarRow_icon"/>
            <h2 className="sideBarRow_title">{title}</h2>
        </div>
    )
}

export default SideBarRow
