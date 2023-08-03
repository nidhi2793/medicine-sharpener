import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";
import React from "react";

function List({ medicines }) {
  return (
    <>
      {medicines.length === 0 && <span>No medicine in stock</span>}
      {medicines.length > 0 && (
        <Table>
          <TableHead>
            <TableRow>
              {["Name", "Description", "Price", "Quantity"].map((head) => (
                <TableCell
                  style={{
                    color: "black",
                    fontWeight: "700",
                  }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {medicines.map((medicine) => (
              <TableRow key={medicine.name}>
                <TableCell>{medicine.name}</TableCell>
                <TableCell>{medicine.description}</TableCell>
                <TableCell>{medicine.price}</TableCell>
                <TableCell>{medicine.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}

export default List;
