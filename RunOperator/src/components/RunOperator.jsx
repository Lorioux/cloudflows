import React, {useState} from "react";
import PropTypes from 'prop-types';
import { Card, CardContent, FormGroup, TextField } from "@mui/material";


const ShellOperator = ({}) => {

}
const Operator = ({}) => {
    const [operator, setOperator] = useState('shell')
    return (
        <form>
            <Card>
                <CardContent sx={{rowGap: 4, columnGap: 4, display: "flex", flexDirection: "column" }}>
                    <FormGroup sx={{rowGap: 4, columnGap: 4, display: "flex", flexDirection: "row" }}>
                        <TextField type={"text"} variant={"outlined"} label={"Name"} required/>
                        <TextField type={"text"} variant={"outlined"} label={"Id"} required/>
                    </FormGroup>
                    <TextField type={"text"}    variant={"outlined"} label={"WorkDir"} required />

                </CardContent>
            </Card>
        </form>
    )
}

const RunOperator = ({id, name, on}) => {
  const [ixputs, setInputs] = useState(null);
  const [oxputs, setOxputs] = useState(null);
  const [workdir, setWorkDir] = useState(null);

  const [operator, setOperator] = useState(null)

  return (
        <div>
            <Operator />
        </div>
    );
};


export default RunOperator;
