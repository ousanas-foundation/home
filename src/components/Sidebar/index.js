import React from 'react'
import WidgetSearch from './../WidgetSearch'
import WidgetCategory from './../WidgetCategory'
import WidgetRecentPost from './../WidgetRecentPost'
const Sidebar = () => {
    return(
        <div className="sidebar">			
						<WidgetSearch />
						<WidgetCategory />
						<WidgetRecentPost title="Recent Post" min="0" max="5" />
						
						
						<div className="widget widget_tag">							
							<div className="widget-title">
								<h3 className="title">Tags</h3>
							</div>
							<div className="tag-list">
								<a href="#">Media</a>
								<a href="#">Coin</a>
								<a href="#">BitCoin</a>
								<a href="#">CoinAge</a>
								<a href="#">Mobile</a>
								<a href="#">Winter</a>
								<a href="#">Recent</a>
								<a href="#">Currency</a>
								<a href="#">iOS</a>
								<a href="#">Modern</a>								
							</div>	
						</div>
						
					</div>
    )
}
export default Sidebar