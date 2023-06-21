import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const Tableau = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Colonne 1</TableCell>
                        <TableCell>Colonne 2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Ligne 1, Colonne 1</TableCell>
                        <TableCell>Ligne 1, Colonne 2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Ligne 2, Colonne 1</TableCell>
                        <TableCell>Ligne 2, Colonne 2</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Tableau;
