import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const WidgetSearch = () => {
    return(
        <div className="widget widget_search">
            <form className="form-inline">
                <div className="form-group">
                    <div className="input-group">						      
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="input-group-addon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default WidgetSearch