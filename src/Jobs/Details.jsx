import {Heading, Label, Pane, Paragraph, Text, Textarea, TextareaField, TextInput} from "evergreen-ui";
import React from "react";


const Details = ({job, setJob}) => {

    return <Pane>
        <Pane margin={10} padding={15}>
            <Heading size={500}>Intro To Job Posting</Heading>
        </Pane>

        <Pane display={"flex"} flexDirection={"column"}>

            <Heading marginLeft={20}>Title</Heading>
            <TextInput
                width={"20vw"}
                marginLeft={20}
                name="text-input-name"
                placeholder="enter job title"
                onChange={(e) => {
                    setJob({
                        ...job,
                        title: e.target.value
                    })
                }}
                value={job.title}
            />
            <TextareaField
                label="Description (public)"
                placeholder="Job description"
                width={"20vw"}
                margin={20}
                onChange={(e) => {
                    setJob({
                        ...job,
                        description: e.target.value
                    })
                }}
                value={job.description}
            />

            <TextareaField
                label="Further Details"
                placeholder="enter further details"
                width={"20vw"}
                margin={20}
                onChange={(e)=>{
                    setJob({
                        ...job,
                        details : e.target.value
                    })
                }}
                value={job.details}
            />

        </Pane>

    </Pane>

}

export default Details;