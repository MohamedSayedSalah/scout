import {Button, Heading, Pane, SidebarTab, Tablist, Text} from "evergreen-ui";

import React, {useState} from "react";
import IntroToJob from "./IntroToJob";
import Category from "./Category.jsx";
import Complexity from "./Complexity.jsx";
import Details from "./Details.jsx";
import Material from "./Material";
import Review from "./Review";
import "./jobsStyle.css"
import {data} from "./JobsData.js"
const NewJob = () => {
    const tabs = ['Intro', 'Category', 'Complexity', 'Details', 'Material', 'Review']
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [job, setJob] = useState({
        state: 0,
        complexity: {
            individualTalentSelection: false,
            autoTalentSelection: false,
            mileStones: [false, false, false]
        }
    });

    const saveJob = (type)=>{
        if (type === 'draft'){
          data[0].push(job) ;
        }else if (type === 'start'){
            job.state = 1 ;
            data[1].push(job) ;
        }else {
            job.state = 2;
            data[2].push(job) ;
        }

    }

    return <Pane className={"row content"}>
        <Pane
            elevation={1}
            className={"newJob"}
            backgroundColor="white"
            width={'45vw'}
            height={'80vh'}
            margin={24}
        >
            <Pane display={"flex"}>
                <Pane width={'10vw'}>
                    <Pane margin={20}>
                        <Heading display={"flex"}
                                 flexDirection={"row"}>
                            New Job
                        </Heading>
                    </Pane>
                    <Pane
                        justifyContent="center"
                        alignItems="center"
                        width={"100px"}
                        marginLeft={"10px"}
                    >

                        <Tablist textAlign={"center"} marginBottom={16} flexBasis={240} marginRight={24}>
                            {tabs.map((tab, index) => (
                                <SidebarTab
                                    key={tab}
                                    id={tab}
                                    onSelect={() => setSelectedIndex(index)}
                                    isSelected={index === selectedIndex}
                                    aria-controls={`panel-${tab}`}
                                >
                                    {tab}
                                </SidebarTab>
                            ))}
                        </Tablist>
                    </Pane>
                </Pane>

                <Pane background={"#f0f0f0"} margin={30} height={"70vh"} elevation={1} width={"100vw"}>
                    {tabs.map((tab, index) => (

                        <div key={tab}>
                            {tabs[selectedIndex] === tab && tab === 'Intro' ? <IntroToJob job={job}/> : ''}
                            {tabs[selectedIndex] === tab && tab === 'Category' ?
                                <Category job={job} setJob={setJob}/> : ''}
                            {tabs[selectedIndex] === tab && tab === 'Complexity' ?
                                <Complexity job={job} setJob={setJob}/> : ''}
                            {tabs[selectedIndex] === tab && tab === 'Details' ?
                                <Details job={job} setJob={setJob}/> : ''}
                            {tabs[selectedIndex] === tab && tab === 'Review' ? <Review job={job} saveJob={saveJob}/> : ''}
                        </div>

                    ))}
                </Pane>

            </Pane>
        </Pane>
    </Pane>

}
export default NewJob;