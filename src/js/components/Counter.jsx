import react from "react";

const Counter = ({seconds})=>{
    if (seconds >= 10){
        console.log("it worked")
    }
    return(
        <div> here are the seconds: {seconds}
        </div>
    );
};
export default Counter