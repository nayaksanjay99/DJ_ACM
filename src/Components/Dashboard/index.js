import React from 'react'
import {connect} from 'react-redux'
import Hedder from './Header'
import Volunteers from './Volunteers'

class Dashboard extends React.Component{

    getout=()=>{
        window.location.reload()
        this.props.history.push('/login')
    }

    render(){
        // if(this.props.activeUser.activeUser.fname!==""){
            return(
                
                    <div>
                    <Hedder/>
                    <Volunteers/>
                    {console.log('-------------')}
                    {console.log(this.props)}
                    {console.log(this.props.activeUser.activeUser.fname)}
                        <button onClick={this.getout}>Logout</button>
                    </div>
        
            )
        // }
        // else
        // return(
        //     <div>
        //         <h3>Session timed out</h3>
        //         {console.log(this.props)}
        //         <button onClick={this.getout}>Back to home page</button>
        //     </div>
        // )
    }
}



const mapStateToProps=(activeUser)=>{
    return{
        activeUser
    }
}

export default connect(mapStateToProps)(Dashboard)