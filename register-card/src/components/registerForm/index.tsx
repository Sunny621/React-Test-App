import React, { Component } from 'react';
import Header from '../header';

interface IProps {

}

interface IState {
    cardNumber: string,
    cvc: string,
    expiryDate: string
}

class RegisterForm extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            cardNumber: '',
            cvc: '',
            expiryDate: ''
        }
    }

    setCardNumber = (value: string) => {
        this.setState({ cardNumber: value } as IState);
    }

    setCvc = (value: string) => {
        this.setState({ cvc: value } as IState);
    }

    setExpiryDate = (value: string) => {
        this.setState({ expiryDate: value } as IState);
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { cardNumber, cvc, expiryDate } = this.state;
        const NumberRegex = /^\d+$/;

        if (
            cardNumber &&
            NumberRegex.test(cardNumber) &&
            cvc &&
            NumberRegex.test(cvc) &&
            expiryDate
        ) {
            // TODO: call form submitting API
            console.log("submit result", cardNumber, cvc, expiryDate);
            this.setState({
                cardNumber: '',
                cvc: '',
                expiryDate: ''
            });
        }
    }

    render() {
        return (
            <div className="register-main">
                <div className="register-form">
                    <Header />
                    <div className="register-body">
                        <p>Welcome</p>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <label>Credit Card Number</label>
                            <input
                                type='text'
                                className="card-number"
                                placeholder="Input your card number"
                                name="creditCardNumber"
                                value={this.state.cardNumber}
                                required
                                onChange={({ target: { value } }) => this.setCardNumber(value)}
                            />
                            <label>CVC Code</label>
                            <input
                                type='text'
                                className="cvc-code"
                                placeholder="CVC"
                                name="cvc"
                                maxLength={3}
                                value={this.state.cvc}
                                required
                                onChange={({ target: { value } }) => this.setCvc(value)}
                            />
                            <label>Expiry Date</label>
                            <input
                                type='text'
                                className="expiry-date"
                                placeholder="MM/YY"
                                name="expriyDate"
                                value={this.state.expiryDate}
                                required
                                onChange={({ target: { value } }) => this.setExpiryDate(value)}
                            />
                            <input type='submit' className="submit-btn" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterForm;