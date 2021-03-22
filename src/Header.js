import {Pane, Text, SidebarTab, Paragraph, Tablist, Tab} from 'evergreen-ui'
import React, {useState} from "react";
import "./Jobs/jobsStyle.css"
import {Link, BrowserRouter} from "react-router-dom";

const Header = ({setSelectedTab}) => {
    const tabs = ['Your Jobs', 'New Job']
    const [selectedIndex, setSelectedIndex] = useState(0)
    return <div className={"topBar"}>
            <div className={"topbar-navigation"}>
            {tabs.map((tab, index) => (
                <Tab
                    key={tab}
                    id={tab}
                    onSelect={() => setSelectedIndex(index)}
                    isSelected={index === selectedIndex}
                    aria-controls={`panel-${tab}`}
                >
                    <Link className={"navi"} to={tab === 'Your Jobs' ? '/jobs' : '/jobs/new'}>
                        <div >{tab}</div>
                    </Link>
                </Tab>
            ))}
            </div>
    </div>


}

export default Header;