import CreateAcc from "./CreateAcc"


export default function SetStorage(){

    const accIsNew = localStorage.getItem("IsNew")
    if (accIsNew==null){
        localStorage.setItem("IsNew", "false")
        localStorage.setItem("Competitions", JSON.stringify({}))
    }
    const func = () =>{
        console.log("OK")
    }

    return(
        <>
            <CreateAcc func={func}></CreateAcc>
        </>
    )
}