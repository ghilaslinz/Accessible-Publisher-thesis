import React, { Fragment, useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import Button from "@material-ui/core/Button";
import "./NestedDataTable.css";
import "reactjs-popup/dist/index.css";
import { CustomCell } from "./CustomCell";
import { v4 as uuidv4 } from "uuid";
import { dividerClasses } from "@mui/material";

const selfId = uuidv4();

export default function NestedDataTable(props) {
  const [rowCount, setRowCount] = useState("");
  const [colCount, setColCount] = useState("");

  const [rowCountArray, setRowCountArray] = useState([]);
  const [colCountArray, setColCountArray] = useState([]);

  const [showTable, setShowTable] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);

  const CreateTable = async () => {
    setShowTable(false);
    rowCountArray.length = 0;
    colCountArray.length = 0;

    for (let i = 1; i <= rowCount; i++) {
      rowCountArray.push(i);
    }
    setRowCountArray(rowCountArray);

    for (let i = 1; i <= colCount; i++) {
      colCountArray.push(i);
    }
    setColCountArray(colCountArray);

    for (let i = 0; i < rowCountArray.length; i++) {
      for (let j = 0; j < colCountArray.length; j++) {
        props.handleAddCell(
          props.element.id,
          uuidv4(),
          false,
          null,
          i,
          j,
          rowCountArray.length,
          colCountArray.length
        );
      }
    }

    setShowTable(true);
    setShowQuestion(false);
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
            {parentElements
              .sort((a, b) => {
                if (a.row < b.row) {
                  return -1;
                }
                if (b.row < a.row) {
                  return 1;
                }
                if (a.row === b.row && a.col < b.col) {
                  return -1;
                }

                if (b.row === a.row && b.col < a.col) {
                  return 1;
                }
                if (b.row === a.row && b.col === a.col) {
                  return 0;
                }
              })
              .map((element) => {
                if (element.row === i) {
                  return (
                    <CustomCell
                      element={props.element}
                      handleAddCell={props.handleAddCell}
                      parentId={element.id}
                      handleEditCellText={props.handleEditCellText}
                      text={element.text}
                      selfId={element.id}
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
      {showQuestion && !props.showTable ? (
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
                  value={rowCount}
                  onChange={(e) => setRowCount(e.target.value)}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <input
                  type="number"
                  id="txtcols"
                  value={colCount}
                  onChange={(e) => setColCount(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={CreateTable}
                >
                  Create Table
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : null}
      {showTable || props.showTable ? (
        <div>
          <caption contentEditable width="48" className="TabCaption "></caption>

          <div>
            <br />
            <Table>
              <TableHead>{renderTable(null)}</TableHead>
            </Table>
          </div>
        </div>
      ) : null}
    </>
  );
}
