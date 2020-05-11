import React,{Component} from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {addTransaction} from '../../Srore/Actions/addTransaction'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 :'500'
  }
}
class CreateTransaction extends Component {
  state={
    amount:0,
    type:'',
    note:''
  }
  changeHandeler=e=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  submitHandeler=e=>{
    e.preventDefault()
    this.props.addTransaction(this.state)
    this.setState({
      amount:0,
      type:'',
      note:''
    })
  }
  render(){
    let {amount,note} = this.state
    return(
      <Modal
      isOpen={this.props.isOpen}
      onRequestClose={this.props.close}
      contentLabel='Create A New Transaction'
      style={customStyles}
      >
        <form onSubmit={this.submitHandeler}>
          <h1>Create a New Transaction</h1>
          <div className='form-group'>
            <label htmlFor="amount">Amount : </label>
            <input type="number" name="amount" value={amount} placeholder="Enter amount.." onChange={this.changeHandeler} className='form-control' id='amount'/>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type : </label>
            <select id='type' className="form-control" name="type" onChange={this.changeHandeler}>
              <option>Selected A Type</option>
              <option value="expense">expense</option>
              <option value="income">income</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="note">Note : </label>
            <textarea name="note" value={note}  placeholder="Enter Note.." className='form-control' onChange={this.changeHandeler}/>
          </div>
          <input type="submit"  value="submit" className='btn btn-primary'/>
        </form>
      </Modal>
    )
  }
}
export default connect(null,{addTransaction})(CreateTransaction)
