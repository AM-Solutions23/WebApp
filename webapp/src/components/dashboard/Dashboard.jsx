import React from 'react'
import DashboardContent from './DashboardContent'
import SideNavBar from './SideNavBar/SideNavBar'
import DashboardIndex from './Dashboard-index'

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.content = <DashboardIndex />
        this.state = {
            toggled: false
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(){
       this.setState({
           toggled:!this.state.toggled,
       })
    }
 

    render(){
        return(
            <React.Fragment>
                <div className={`app ${this.state.toggled ? 'toggled':''}`}>
                <SideNavBar toggled={this.state.toggled} collapsed={this.state.collapsed} onToggle={this.handleToggle} />
                <DashboardContent handleToggle={this.handleToggle} DashboardPageContent={this.content}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard