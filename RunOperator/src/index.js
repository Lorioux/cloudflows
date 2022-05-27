// import React from "react"
import {createRoot} from "react-dom/client"
import RunOperator from "./components/RunOperator"

const container = document.getElementById('root')
const root = createRoot(container)
root.render (
    <RunOperator />
)