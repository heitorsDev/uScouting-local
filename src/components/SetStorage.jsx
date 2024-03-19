import CreateAcc from "./CreateAcc"

export default function SetStorage(){
    localStorage.clear()

    
    


    return(
        <>
            {accIsNew==null ? <CreateAcc></CreateAcc> : <></>}
        </>
    )
}