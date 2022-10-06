import React from 'react'

const Helmet = (props) => {
    document.title = 'Maltimart -' + props.title
    return (
        <div className='w-100'>
            {props.childrent}
        </div>
    )
}

export default Helmet