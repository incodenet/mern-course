import React from 'react';
import {Link} from "react-router-dom";

export const LinkList = ({list}) => {
    if(!list.length) {
        return <p className="center">No links yet!</p>
    }

    return(
        <table>
            <thead>
            <tr>
                <th>No</th>
                <th>From (origonal)</th>
                <th>To (increased)</th>
                <th>Open</th>
            </tr>
            </thead>

            <tbody>
            {list.map((link, index) => {
                return (
                    <tr key={link._id}>
                        <td>{index + 1}</td>
                        <td>{link.from}</td>
                        <td>{link.to}</td>
                        <td>
                            <Link to={`/detail/${link._id}`}>View</Link>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
};