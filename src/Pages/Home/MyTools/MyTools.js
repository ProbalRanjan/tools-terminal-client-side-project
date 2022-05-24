import React from 'react';
import useTools from '../../../hooks/useTools/useTools';
import MyTool from '../MyTool/MyTool';
import './MyTools.css';

const MyTools = () => {

    const [tools] = useTools();

    return (
        <div className='container section-container'>
            <div className='section-header'>
                <h2>Our New Tools</h2>
                <p>Here is our new stock of tools</p>
            </div>
            <div className='tools-container'>
                {
                    tools.slice(-6).map(tool => <MyTool
                        key={tool._id}
                        tool={tool}
                    ></MyTool>)
                }
            </div>
            {/* <Link style={{ textDecoration: "none" }} to='/manageinventory'>
                <button className='global-button manage-btn'>Manage Inventory</button>
            </Link> */}
        </div>
    );
};

export default MyTools;