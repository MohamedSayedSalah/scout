import {Heading, Pane, Text, Card, Badge, TickCircleIcon, WarningSignIcon, UnorderedList, ListItem} from "evergreen-ui";
import "./jobsStyle.css"
import React from "react";
import {data} from "./JobsData.js"

import './jobsStyle.css'

const Jobs = () => {
    const states = ["Drafts", "InProgress", "Completed"];

    const ProgressBar = (props) => {
        return (
            <div className="progress-bar">
                <Filler percentage={props.percentage}/>
            </div>
        )
    }

    const Filler = (props) => {
        return <div className="filler" style={{width: `${props.percentage}%`}}/>
    }

    const icon = (mileStone)=>{
        return mileStone ?  <TickCircleIcon size={12} color="success" marginRight={10}/> :
            <WarningSignIcon size={12} color="warning" marginRight={10}/>
    }

    return <Pane className={"row content"}>
        {data.map((jobs, index) => {
            return <Pane
                key={states[index]}
                backgroundColor="white"
                elevation={1}
                width={'60vw'}
                className={"jobCard"}
            >
                <Pane float={"left"} margin={20}>
                    <Heading size={300} marginTop="default">{states[index]}</Heading>
                </Pane>
                <Pane width={"90%"} className={"jobCardRightSide"}>
                    {jobs.map(job => {

                        const IMG = () => {
                            return require(`../resources/${Math.floor((Math.random() * 6) + 1)}.jpeg`)
                        }

                        return <Pane
                            elevation={1}
                            key={job.title}
                            margin={10}
                            className={"jobPane"}
                            hoverElevation={3}
                            height={"424px"}
                            width={"296px"}
                            background={"tint1"}>

                            <Pane>
                                <img
                                    src={IMG().default}
                                />
                            </Pane>

                            <Pane>
                                <div className="jobName">{job.title}</div>
                                <div className="jobState">{states[job.state]}</div>
                                <div className="jobState">{job.category?.name}</div>
                                <UnorderedList marginLeft={0} icon={<div/>}>
                                    <ListItem>
                                        {icon(job.complexity.mileStones[0])}
                                        <Text>MileStone1</Text>
                                    </ListItem>
                                    <ListItem>
                                        {icon(job.complexity.mileStones[1])}
                                        <Text>MileStone2</Text>
                                    </ListItem>
                                    <ListItem>
                                        {icon(job.complexity.mileStones[2])}
                                        <Text>MileStone3</Text>
                                    </ListItem>
                                </UnorderedList>
                                <ProgressBar percentage={index * 30 + 40}/>
                            </Pane>


                        </Pane>
                    })}
                </Pane>
            </Pane>
        })}
    </Pane>
}
export default Jobs;
