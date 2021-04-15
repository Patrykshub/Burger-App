import { Component } from "react";


import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios.orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
          const order = {
              ingredients: this.props.ingredients,
              price: this.props.price,
              customer: {
                  name: 'Patryk B',
                  address: {
                      street: 'Teststreet 1',
                      zipCode: '123123',
                      country: 'Poland'
                  },
                  email: 'test@test.com'
              },
              deliveryMethod: 'fasttest'
          }
         axios.post('/orders.json', order)
         .then(response => {
             this.setState({loading: false});
             this.props.history.push('/');
         })
            
         .catch(error => {
             this.setState({loading: false});
        
         });
        console.log(this.props.ingredients);
    }

    render () {
        let form = (
                <form>
                    <Input inputtype="input" type="text" name="name" placeholder="Your name"/>
                    <Input inputtype="input" type="email" name="email" placeholder="Your Mail"/>
                    <Input inputtype="input" type="text" name="street" placeholder="Your Street"/>
                    <Input inputtype="input" type="text" name="postal" placeholder="Your Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>  
                {form}
            </div>
        )
    }
}


export default ContactData;