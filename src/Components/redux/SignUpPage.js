import React from 'react';
import axiosWithAuth from '../../Components/redux/withAuth/AxiosWithAuth';

class SignUp extends React.Component {

    state = {
        info : {
            name: '',
            password: '',
            phone: '',
            email: '',
            location: ''
        }
    }


    onHandle = e => {
        this.setState({
            info : {
                ...this.state.info, [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = e => {
        e.preventDefault()
        
        axiosWithAuth().post('/auth/register', this.state.info)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
        this.props.history.push('/DashBoard')
    }


    render() {
        
        return(
            <div className='sign'>
                <div className='left'>
                    <h1> Sauti </h1>

                    <h2> Grow your business </h2>

                    <p> The sauti Trade and Market Information platform provides official, simplified, and real time trade procedures, market prices, and exchange rates </p>

                </div>


        <div className='container'>

                <form className="right" onSubmit={this.onSubmit}>
                <h1 className='create'>Create Account </h1>
                    <label>Full Name </label>
                    <input 
                    type='text'
                    name='name'
                    value={this.state.info.name}
                    onChange={this.onHandle}
                    />

                    <label>Password</label>
                    <input 
                    type='password'
                    name='password'
                    value={this.state.info.password}
                    onChange={this.onHandle}
                    />

                    <label>Phone</label>
                    <input 
                    type='text'
                    name='phone'
                    value={this.state.info.phone}
                    onChange={this.onHandle}
                    />

                    <label>Email</label>
                    <input 
                    type='email'
                    name='email'
                    value={this.state.info.email}
                    onChange={this.onHandle}
                    />

                    <label>Location</label>
                    <input 
                    type='text'
                    name='location'
                    value={this.state.info.location}
                    onChange={this.onHandle}
                    />

                    <button>Sign Up</button>

                </form>
            </div>
            </div>

        )
    }
}

export default SignUp