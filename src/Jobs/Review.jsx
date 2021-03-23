import {Alert, Button, Heading, Pane, Paragraph, Text, toaster} from "evergreen-ui";
import React, {useState} from "react";
import "./jobsStyle.css"

const Review = ({job, saveJob}) => {
    const [successful , setSuccess] = useState(false) ;
    const [failure, setFailure] = useState(false)
    const success = ()=>{
        setTimeout(()=>setSuccess(false), 3000) ;
        return <div
            className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-green-700 bg-green-100 border border-green-300 ">
            <div slot="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-check-circle w-5 h-5 mx-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            <div className="text-xl font-normal  max-w-full flex-initial">
               your job has been saved
            </div>
            <div className="flex flex-auto flex-row-reverse">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="feather feather-x cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
    }

    const failed = ()=>{
        setTimeout(()=>setFailure(false), 3000) ;
        return <div
            className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-red-100 bg-red-700 border border-red-700 ">
            <div slot="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-alert-octagon w-5 h-5 mx-2">
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            </div>
            <div className="text-xl font-normal  max-w-full flex-initial">
               you need to add a title
            </div>
            <div className="flex flex-auto flex-row-reverse">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="feather feather-x cursor-pointer hover:text-red-400 rounded-full w-5 h-5 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </div>
    }


    return <React.Fragment>

        { successful && success()}
        { failure && failed()}
        <Pane margin={10} padding={15}>
            <Heading size={500}>Review</Heading>
        </Pane>

        <Pane alignContent={"center"} alignItems={"center"} textAlign={"center"}>
            <Button marginRight={16}
                    onClick={() => {
                        {success()}
                        if (!job.title?.length){
                            setFailure(true)
                        } else{
                            setSuccess(true);
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
                                    setFailure(true);
                                } else{
                                    setSuccess(true);
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