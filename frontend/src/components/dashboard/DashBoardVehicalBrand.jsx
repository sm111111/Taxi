import React from 'react';
import './DashBoardVehicalBrand.css';
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const DashBoardVehicalBrand = () => {
    return (
        <div className='DashBoardVehicalBrand-container'>
            <div className="top-DashBoardVehicalBrand">Vehicle Brand</div>

            <div className="inside-table">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>


                        <tr>
                            <td>Audi</td>
                            <td>Enable</td>
                            <td>
                                <MdEdit className='DashBoardVehicalBrand-icons' /> <AiOutlineDelete className='DashBoardVehicalBrand-icons' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashBoardVehicalBrand;
