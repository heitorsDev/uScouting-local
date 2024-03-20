import { useState, useEffect } from "react";
import AccountView from "./AccountView";
import Competitions from "./Competitions";



export default function DashBoard(){


    return (
        <>
            <AccountView></AccountView>
            <div>
                <Competitions></Competitions>
            </div>
        </>
    )
}