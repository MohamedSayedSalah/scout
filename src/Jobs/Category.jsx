import {Card, Heading, Pane, Paragraph, Text} from "evergreen-ui";
import React from "react";
import {categories} from "./JobsData";

const Category = ({job,setJob}) => {
    console.log(job)
    return <Pane>
        <Pane margin={10} padding={15}>
            <Heading size={500}>Category</Heading>
        </Pane>

        <Pane marginLeft={"3vh"}>
            {categories.map((category) => {
                return <Pane
                    display={"flex"}

                    elevation={job.category?.name === category.name ? 4 :  1}
                    float="left"
                    backgroundColor="white"
                    width={"8vw"}
                    height={"8vh"}
                    margin={"1.5vh"}
                    border
                    hoverElevation={2}
                    activeElevation={1}
                    onClick={()=>{
                        setJob({...job, category })
                    }}
                    alignItems={"center"}
                    justifyContent={"center"}
                    textAlign={"center"}
                    background={category.base}
                    borderColor={job.category?.name === category.name ? category.dark:  category.base}
                    className={"category"}

                >
                    <Text margin={5}  fontSize={"15px"} fontFamily={"Lucida Console, Monospace;"}   >{category.name}</Text>
                </Pane>

            })}
        </Pane>

    </Pane>

}

export default Category;