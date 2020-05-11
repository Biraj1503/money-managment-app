import React,{Component} from 'react'
import {connect} from 'react-redux'
import {transAction} from '../Srore/Actions/transaction'
import {removeTransaction} from '../Srore/Actions/removeTransaction'
import CreateTransaction from '../components/Transaction/createTransaction'
import UpdateTransaction from '../components/Transaction/UpdateTransaction'
class DashBoard extends Component{
  state={
    openModal:false,
    updateModal:false,
    id:''
  }
  openModalHan=()=>{
    this.setState({
        openModal:true
    })
  }
  closeModal=()=>{
    this.setState({
        openModal:false
    })
  }
   updateModal=(id)=>{
     this.setState({
       updateModal:true,
       id
     })
   }

   closeUpdateModal=()=>{
     this.setState({
       updateModal:false,
       id:''
     })
   }
  componentDidMount(){
    this.props.transAction()
  }

  render(){
    let {auth,trans} = this.props
    return(
      <div className='col-md-6'>
        <h3>Wellcome {auth.user.name}</h3>
        <p> {auth.user.email}</p>
        <p>Balance : {auth.user.balance}</p>
        <button onClick={this.openModalHan} className='btn btn-primary'>Create Transaction</button>

        <CreateTransaction
          isOpen={this.state.openModal}
          close={this.closeModal}
        />

        <br/>
          <h1>Transaction : </h1>
        <br/>

        <ul className='list-group'>
          {
            trans.map(trans=>(
              <li className='list-group-item' key={trans._id}>
                  <p>Type : {trans.type}</p>
                  <p>Amount : {trans.amount}</p>
                  <p>Note : {trans.note}</p>
                    {
                      this.state.id === trans._id
                      ?
                      <UpdateTransaction
                      isOpen={this.state.updateModal}
                      close={this.closeUpdateModal}
                      trans={trans}
                      />
                      :null
                    }
                  <button onClick={()=>this.props.removeTransaction(trans._id)} className='btn btn-danger'>Remove</button>
                  <br/><br/>
                  <button onClick={()=>this.updateModal(trans._id)} className='btn btn-success'>Update</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    auth:state.auth,
    trans:state.trans
  }
}
export default connect(mapStateToProps,{transAction,removeTransaction})(DashBoard)
