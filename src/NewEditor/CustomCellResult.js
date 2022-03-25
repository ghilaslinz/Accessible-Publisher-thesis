import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MainButton } from "react-floating-button-menu";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@material-ui/icons/Clear";
import { v4 as uuidv4 } from "uuid";
const useStyles = makeStyles({
  table: {
    minWidth: 150,
    border: "3px solid rgba(224, 224, 224, 1)",
    "& .MuiTableCell-root": {
      border: "3px solid rgba(224, 224, 224, 1)",
    },
  },
});
const style = {
 // position: "absolute",
};

const remove = {
 // position: "absolute",
//  marginTop: "20px",
};

export const CustomCell = (props) => {
  const [showNestedQuestion, setShowNestedQuestion] = useState(false);

  const [rowCountArrayNested, setRowCountArrayNested] = useState([]);
  const [colCountArrayNested, setColCountArrayNested] = useState([]);

  const [rowCountNested, setRowCountNested] = useState("");
  const [colCountNested, setColCountNested] = useState("");
  const [CellText, setCellText] = useState([]);

  const classes = useStyles();

  const CreateNestedTable = async () => {
    for (let i = 0; i < rowCountNested; i++) {
      for (let j = 0; j < colCountNested; j++) {
        props.handleAddCell(
          props.element.id,
          uuidv4(),
          true,
          props.parentId,
          i,
          j,
          rowCountNested,
          colCountNested
        );
      }
    }
    setShowNestedQuestion(false);
  };
  function showquestion() {
    setShowNestedQuestion(true);
  }

  const handleClose = (e) => {
    setShowNestedQuestion(false);
  };

  const renderTable = (parentId) => {
    const parentElements = [];
    Object.entries(props.element.table)
      .filter((entry) => entry[1].parent === parentId)
      .map((item) =>
        parentElements.push({
          ...item[1],
          id: item[0],
        })
      );
    const table = [];
    if (parentElements.length) {
      for (let i = 0; i < parentElements[0].totalRows; i++) {
        table.push(
          <TableRow>
            {parentElements.map((element) => {
              if (element.row === i) {
                return (
                  <CustomCell
                    element={props.element}
                    handleAddCell={props.handleAddCell}
                    parentId={element.id}
                    selfId={element.id}
                    text={element.text}
                    handleEditCellText={props.handleEditCellText}
                    handleDeleteCell={props.handleDeleteCell}
                  />
                );
              }
            })}
          </TableRow>
        );
      }
    }
    return table;
  };

  return (
    <>
      {/*
            <MainButton
          onClick={showquestion}
          isOpen={showNestedQuestion}
          iconResting={<AddIcon style={{ fontSize: 20 }} nativeColor="white" />}
          iconActive={
            <ClearIcon style={{ fontSize: 20 }} nativeColor="white" />
          }
          backgroundColor="black"
          size={30}
        />

        */}
     {/* <AddIcon onClick={showquestion} style={style} /> */}
   {/*   <RemoveIcon
        style={remove}
        onClick={() => props.handleDeleteCell(props.element.id, props.selfId)}
   />*/}
      <TableCell width="100px" className={classes.table}>
        <TextField
       		inputProps={
            { readOnly: true, }
          }
  
          value={props.text}
        />
        {renderTable(props.parentId)}
      </TableCell>

      {showNestedQuestion ? (
        <Dialog
          open={showNestedQuestion}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a nested table</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Enter the number of Row</TableCell>
                  <TableCell>Enter the number of Column</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <input
                      type="number"
                      id="txtrows"
                      value={rowCountNested}
                      onChange={(e) => setRowCountNested(e.target.value)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <input
                      type="number"
                      id="txtcols"
                      value={colCountNested}
                      onChange={(e) => setColCountNested(e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={CreateNestedTable}
                    >
                      Add Nested Table
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={CreateNestedTable} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </>
  );
};
