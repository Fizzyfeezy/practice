import React from 'react'
import Columns from './Columns';

function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>name</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Columns />
                </tr>
                <tr>
                    <Columns />
                </tr>
            </tbody>
        </table>
    )
}

export default Table
