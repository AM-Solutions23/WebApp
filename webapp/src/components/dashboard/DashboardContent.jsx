import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

class DashboardContent extends React.Component {
    render() {
        return (
            <main>
                <div className="btn-toggle" onClick={() => this.props.handleToggle()}>
                    <FontAwesomeIcon icon='bars' />
                </div>
                {this.props.DashboardPageContent}
            </main>
        )
    }
}

export default DashboardContent