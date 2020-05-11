// import React,{Component} from 'react'
// import Modal from 'react-modal'
// import {connect} from 'react-redux'
// import {updateTrans} from '../../Srore/Actions/updateTrans'

// class UpdateTransaction extends Component {
//   state={
//     amount:0,
//     note:''
//   }
//   componentDidMount(){
//     this.setState({
//       amount:this.props.trans.amount,
//       note:this.props.trans.note
//     })
//   }
//   changeHandeler=e=>{
//     this.setState({
//       [e.target.name] : e.target.value
//     })
//   }
//   submitHandeler=e=>{
//     e.preventDefault()
//     this.props.updateTrans(this.props.trans._id,this.state)
//     this.props.close()
//   }
//   render(){
//     let {amount,note} = this.state
//     return(
//       <Modal
//       isOpen={this.props.isOpen}
//       onRequestClose={this.props.close}
//       contentLabel='Create A New Transaction'
//       style={customStyles}
//       >
//         <form onSubmit={this.submitHandeler}>
//           <h1>Create a New Transaction</h1>
//           <div className='form-group'>
//             <label htmlFor="amount">Amount : </label>
//             <input type="number" name="amount" value={amount} placeholder="Enter amount.." onChange={this.changeHandeler} className='form-control' id='amount'/>
//           </div>
//
//           <div className="form-group">
//             <label htmlFor="note">Note : </label>
//             <textarea name="note" value={note}  placeholder="Enter Note.." className='form-control' onChange={this.changeHandeler}/>
//           </div>
//           <input type="submit"  value="submit" className='btn btn-primary'/>
//         </form>
//       </Modal>
//     )
//   }
// }
// export default connect(null,{updateTrans})(UpdateTransaction)
import React,{Component} from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {updateTrans} from '../../Srore/Actions/updateTrans'
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
class UpdateTransaction extends Component {
  state={
    amount:this.props.trans.amount,
    type:this.props.trans.type,
    note:this.props.trans.note
  }
  changeHandeler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitHan=(e)=>{
    e.preventDefault()
    this.props.updateTrans(this.props.trans._id,this.state)
    this.props.close()
  }
  render(){
    let {amount,type,note} = this.state
    return(
      <Modal
      isOpen={this.props.isOpen}
      onRequestClose={this.props.close}
      contentLabel='Update A Transaction'
      style={customStyles}
      >
        <form onSubmit={this.submitHan}>
          <h1>Update Transaction</h1>
          <div class="form-group">
            <label for="amount">Amount : </label>
            <input type="number" name="amount" value={amount} id='amount' className='form-control' onChange={this.changeHandeler}/>
          </div>
          <div class="form-group">
            <label for="type"> Type : </label>
            <select id='type' class="form-control" name="type" onChange={this.changeHandeler}>
            <option value={type}>income</option>
            <option value={type}>expense</option>
            </select>
          </div>
          <div class="form-group">
            <label for="note">Note : </label>
            <textarea name="note" value={note} className='form-control' id='note' onChange={this.changeHandeler}></textarea>
          </div>
          <input type="submit" name="submit" value="submit" className='btn btn-success'/>
        </form>
      </Modal>
    )
  }
}
export default connect(null,{updateTrans})(UpdateTransaction)
