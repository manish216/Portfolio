import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import Fade from 'react-reveal/Fade';
import TimeLine from "../projects-timeline/projects-timeline.component";
import TimeLine1 from "../projects-timeline/projects-timeline1.component";
import TimeLine2 from "../projects-timeline/projects-timeline2.component";
import TimeLine3 from "../projects-timeline/projects-timeline3.components";

const VALUES = ["2018", "2019"];

const EXAMPLE = [
    {
        data: "Aug 2018",
        status: "status",
        statusB: <TimeLine />,
        statusE: "In Progress"
    },
    {
        data: "Jan 2019",
        status: "status",
        statusB: <TimeLine1 />,
        statusE: "Done"
    },
    {
        data: "Apr 2019",
        status: "status",
        statusB: <TimeLine2 />,
        statusE: "Done"
    },
    {
        data: "Aug 2019",
        status: "status",
        statusB: <TimeLine3 />,
        statusE: "Done"
    },
];

export default class HorizantalTimeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curIdx: 0,
            prevIdx: -1
        };
    }

    //state = { value: 0, previous: 0 };

    render() {
        const { curIdx, prevIdx } = this.state;
        const curStatus = EXAMPLE[curIdx].statusB;
        const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].statusB : '';

        return (
            <div style={{paddingTop:"10rem"}}>
                {/* Bounding box for the Timeline */}
                <div
                    style={{
                        width: "40%",
                        height: "100px",
                        margin: "0 auto",
                        paddingTop: "0px",
                        fontSize: "15px",
                        color: "#dfdfdf"
                    }}
                >

                    <HorizontalTimeline
                        styles={{
                            backgroundColor: "transparent",
                            foreground: "#1A79AD",
                            outline: "#dfdfdf",

                        }}
                        index={this.state.curIdx}
                        indexClick={index => {
                            const curIdx = this.state.curIdx;
                            this.setState({ curIdx: index, prevIdx: curIdx });
                        }}
                        values={EXAMPLE.map(x => x.data)}
                    />
                </div>
                <div className="text-center">
                    {/* any arbitrary component can go here */}
                    {/* {curStatus} - {prevStatus} */}
                    {curStatus}
                </div>
            </div>
        );
    }
}
