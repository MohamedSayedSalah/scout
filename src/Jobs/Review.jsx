import {Alert, Button, Heading, Pane, Paragraph, Text, toaster} from "evergreen-ui";
import React from "react";
import "./jobsStyle.css"

const Review = ({job, saveJob}) => {

    return <React.Fragment>

        <Pane margin={10} padding={15}>
            <Heading size={500}>Review</Heading>
        </Pane>

        <Pane alignContent={"center"} alignItems={"center"} textAlign={"center"}>

            <Button marginRight={16}
                    onClick={() => {
                        if (!job.title?.length){
                            toaster.danger(
                                'Please add a title '
                            )
                        } else{
                            toaster.notify(
                                'saved! check you Jobs page '
                            )
                            saveJob('draft')
                        }
                    }}
                    className={"button"} borderRadius={"4px"} appearance={"minimal"} intent="none">Save
                as Draft </Button>
            {
                job.state === 0 ?
                    <Button marginRight={16}
                            onClick={() => {
                                if (!job.title?.length){
                                    toaster.danger(
                                        'Please add a title '
                                    )
                                } else{
                                    toaster.notify(
                                        'saved! check you Jobs page '
                                    )
                                    saveJob('start')
                                }
                            }}
                            appearance="primary" borderRadius={"4px"} fontSize={"13px"} intent="none">Save &
                        start</Button>
                    :
                    <Button marginRight={16} appearance="primary" borderRadius={"4px"} fontSize={"13px"}

                            intent="none">Complete</Button>
            }

        </Pane>

    </React.Fragment>

}

export default Review;