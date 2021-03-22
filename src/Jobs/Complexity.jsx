import {
    Checkbox,
    Heading,
    Label,
    ListItem,
    OrderedList,
    Pane,
    Paragraph,
    Radio,
    Text,
    TextInput,
    UnorderedList
} from "evergreen-ui";
import React from "react";


const Complexity = ({job, setJob}) => {

    return <Pane>
        <Pane margin={10} padding={15}>
            <Heading size={500}>Service Complexity</Heading>
        </Pane>

        <Pane margin={20}>

            <Pane display={"flex"} flexDirection={"column"} margin={20}>
                <Label fontSize={13}>Number of Artworks/Variations</Label>
                <TextInput width={"10vw"}
                           onChange={(e) => {
                               setJob({...job, complexity: {...job.complexity, variations: e.target.value}})
                           }}

                           value={job.complexity?.variations}
                           name="text-input-name"
                           placeholder="Text input placeholder..."
                />
            </Pane>

            <Pane display={"flex"} marginLeft={20}>
                <Radio flex={1} name="group"
                       onChange={() => {
                           setJob({
                               ...job,
                               complexity: {
                                   ...job.complexity,
                                   individualTalentSelection: !job.complexity.individualTalentSelection
                               }
                           })

                       }}
                       checked={job.complexity?.individualTalentSelection}

                       label="Auto talent selection"/>
                <Radio flex={2} name="group"
                       onChange={() => {
                           setJob({
                               ...job,
                               complexity: {
                                   ...job.complexity,
                                   autoTalentSelection: !job.complexity.autoTalentSelection
                               }
                           })
                       }}
                       checked={job.complexity?.autoTalentSelection}
                       label="Individual talent selection"/>
            </Pane>

            <Pane margin={20}>
                <Heading> Deliverables & Milestones</Heading>
                <Pane width={"15vw"}>
                    <UnorderedList>
                        <ListItem height={"2vh"} width={"20vw"} display={"inline-flex"} alignItems={"center"}
                                  icon={<span/>}>
                            <Checkbox onChange={(e) => {
                                let arr = job.complexity?.mileStones;
                                arr[0] = !arr[0]
                                setJob({
                                    ...job,
                                    complexity: {
                                        ...job.complexity,
                                        mileStones: arr
                                    }
                                })
                            }}
                                      checked={job.complexity.mileStones[0]}
                            /> <Text marginLeft={10}>MileStone 1: (Draft/Mockup) </Text>
                        </ListItem>
                        <ListItem height={"2vh"} width={"20vw"} display={"inline-flex"} alignItems={"center"}
                                  icon={<span/>}>
                            <Checkbox onChange={(e) => {
                                let arr = job.complexity?.mileStones;
                                arr[1] = !arr[1]
                                setJob({
                                    ...job,
                                    complexity: {
                                        ...job.complexity,
                                        mileStones: arr
                                    }
                                })

                            }}
                                      checked={job.complexity.mileStones[1]}
                            /> <Text marginLeft={10}>MileStone 2: First Iteration (Design/Layout) </Text>
                        </ListItem>
                        <ListItem height={"2vh"} width={"20vw"} display={"inline-flex"} alignItems={"center"}
                                  icon={<span/>}>
                            <Checkbox onChange={(e) => {
                                let arr = job.complexity?.mileStones;
                                arr[2] = !arr[2]
                                setJob({
                                    ...job,
                                    complexity: {
                                        ...job.complexity,
                                        mileStones: arr
                                    }
                                })
                            }}
                                      checked={job.complexity.mileStones[2]}
                            /> <Text marginLeft={10}>MileStone 3: Final Deliverables </Text>
                        </ListItem>
                    </UnorderedList>
                </Pane>
            </Pane>

        </Pane>

    </Pane>

}

export default Complexity;