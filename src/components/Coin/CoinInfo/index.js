import React, { useState } from 'react'
import './styles.css'

const CoinInfo = ({ heading, desc }) => {
    const shortDesk=desc.slice(0,350) + "<p style='color:var(--grey)'> Read More...</p>";
    const longDesc=desc + "<p style='color:var(--grey)'> Read Less...</p>";

    const [flag,setFlag]=useState(false)
    
    return (
        <div className='grey-wrapper'>
            <h2  className='coin-info-heading'>{heading}</h2>
           {desc.length>350 ? ( <p
            onClick={()=>setFlag(!flag)} 
            className='coin-info-desc' 
            dangerouslySetInnerHTML={{__html:!flag ? shortDesk :longDesc}}/>
            ):(<p dangerouslySetInnerHTML={{__html:desc}}/>)
            }
        </div>
    )
}

export default CoinInfo