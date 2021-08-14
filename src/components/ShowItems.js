//import React, { Component } from 'react';

const Show = (props) => {
    const { Items, dleteItems } = props;
    let length = Items.length;
    const TheItems = length ? (
        Items.map(
            Items => {
                return (
                    <div key={Items.id} className='item'>
                        <div className='name' title='name'>
                            {Items.name}
                        </div>
                        <div className='age'>
                            {Items.age}
                        </div>
                        <div className='del' onClick={() => { dleteItems(Items.id) }}>
                            (&times;)
                        </div>

                    </div>
                )
            }
        )


    ) : (<div className='nodata'>
        No Data To Show Here
    </div>);

    return (
        <div className='show'>
            <div id='Tite'>


                <span className='tite'>Name</span>
                <span className='tite'>age</span>
                <span id='tite'>Action</span>
            </div>
            {TheItems}
        </div>
    )

}
export default Show;