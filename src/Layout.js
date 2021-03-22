import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Pane, Text} from 'evergreen-ui'
import NewJob from "./Jobs/NewJob";
import Header from "./Header";
import Jobs from "./Jobs/Jobs";
import "./Jobs/jobsStyle.css"
import Footer from "./Footer";
/*import BrowserRouter from "react-router-dom/modules/BrowserRouter";*/

function Layout() {
    const [selectedTab, setSelectedTab] = useState(null);

    return (
        <div className={"box"}>
            <Router>
                <Header className={"row header"} setSelectedTab={setSelectedTab}/>
                <Switch>
                    <Route path='/jobs/new'>
                        <NewJob/>
                    </Route>
                    <Route path='/'>
                        <Jobs/>
                    </Route>
                    <Route path='/jobs'>
                        <Jobs/>
                    </Route>

                </Switch>
                <Footer className={"row footer"}/>
            </Router>
        </div>
    )

}

export default Layout;
