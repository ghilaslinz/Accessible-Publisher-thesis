import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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
import ClearIcon from "@material-ui/icons/Clear";
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
 
  
 
 
  position: 'absolute',
};
export const CustomCell = () => {
  const [showNestedQuestion, setShowNestedQuestion] = useState(false);

  const [rowCountArrayNested, setRowCountArrayNested] = useState([]);
  const [colCountArrayNested, setColCountArrayNested] = useState([]);

  const [rowCountNested, setRowCountNested] = useState("");
  const [colCountNested, setColCountNested] = useState("");

  const classes = useStyles();

  const CreateNestedTable = async () => {
    rowCountArrayNested.length = 0;
    colCountArrayNested.length = 0;

    for (let i = 1; i <= rowCountNested; i++) {
      rowCountArrayNested.push(i);
    }
    setRowCountArrayNested(rowCountArrayNested);

    for (let i = 1; i <= colCountNested; i++) {
      colCountArrayNested.push(i);
    }
    setColCountArrayNested(colCountArrayNested);

    setShowNestedQuestion(false);
  };
  function showquestion() {
    setShowNestedQuestion(true);
  }

  const handleClose = (e) => {
    setShowNestedQuestion(false);
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
        <AddIcon aria-label="Add Cell"  onClick={showquestion} style={style}/>
      <TableCell contentEditable width="100px" className={classes.table} 
           
          >

        {rowCountArrayNested.map((rowNested, indexx) => (
          
          <TableRow key={indexx} scope="row">
            {colCountArrayNested.map((colNested, indexx) => (
              <CustomCell contentEditable />
            
            ))}
          </TableRow>
        ))}
          
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
                  <TableCell >Enter the number of Row</TableCell>
                  <TableCell>Enter the number of Column</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <input
                    aria-label="number of row"
                      type="number"
                      id="txtrows"
                      value={rowCountNested}
                      onChange={(e) => setRowCountNested(e.target.value)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <input
                    aria-label="number of column"
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
