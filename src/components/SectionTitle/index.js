import React from 'react'

const SectionTitle = (props) => {
    return(
        <div className="section-title section-title-2 text-center">
            <h2 className="title">{props.title}</h2>
            <h4 className="sub-title">{props.subTitle}</h4>
        </div>
    )
}
export default SectionTitle