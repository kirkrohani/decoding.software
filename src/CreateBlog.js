import React from 'react';
import './css/App.css';

class CreateBlog extends React.Component {

  render () {
    const {title, description,} = this.props.post;
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
         <div className='content'>
          <div className='ui form'> <div className='field'>
                    <label>Title</label>
                      <input type='text' defaultValue={title} /> </div>
                    <div className='field'>
                      <label>Description</label>
                        <input type='text' defaultValue={description} />
                    </div>
                   <div className='ui two bottom attached buttons'>
                    <button className='ui basic blue button'> {submitText} </button>
                    <button className='ui basic red button'>Cancel </button>
                  </div>
            </div>
          </div>
       </div> );
  }
}

export default CreateBlog;