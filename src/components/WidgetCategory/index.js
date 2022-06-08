import React from 'react'
const WidgetCategory = () => {
    return(
        <div className="widget widget_catagory">
            <div className="widget-title">
                <h3 className="title">Catagory</h3>
            </div>	
            <ul className="catagory-items">
                <li><a href="#">Mobile App  (10)</a></li>
                <li><a href="#">Trending Post  (15)</a></li>
                <li><a href="#">App Category  (20)</a></li>
                <li><a href="#">Lifestyle  (25)</a></li>
                <li><a href="#">Photography  (30)</a></li>
                <li><a href="#">Videos  (35)</a></li>
            </ul>								
        </div>
    )
}
export default WidgetCategory