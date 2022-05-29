import React, { useEffect, useState } from 'react';
import useTools from '../../../../hooks/useTools/useTools';
import Loading from '../../../Shared/Loading/Loading';
import MyTool from '../MyTool/MyTool';
import './MyTools.css';

const MyTools = () => {

    const [tools] = useTools();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (tools.length > 0) {
            setLoading(false);
        }
    }, [tools])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='container section-container'>
            <div className='section-header'>
                <h2>Our Latest Tools</h2>
                <p>Here is our new stock of tools</p>
            </div>
            <div className='tools-container'>
                {
                    tools?.slice(7).reverse().map(tool => <MyTool
                        key={tool._id}
                        tool={tool}
                    ></MyTool>)
                }
            </div>
        </div>
    );
};

export default MyTools;