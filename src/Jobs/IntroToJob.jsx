import {Heading, Pane, Paragraph, Text} from "evergreen-ui";
import React from "react";


const IntroToJob = ({job}) => {

    return <React.Fragment>
        <Pane margin={10} padding={15}>
            <Heading size={500}>Intro To Job Posting</Heading>
        </Pane>

        <Pane alignContent={"center"} alignItems={"center"} textAlign={"center"}>
            <Paragraph>
                {job.description}
            </Paragraph>
        </Pane>

    </React.Fragment>

}

export default IntroToJob;