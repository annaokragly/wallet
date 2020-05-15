import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import History from '../history/history.component';
import Form from '../form/form.component';
import { createTransactionDocument, getTransactionsCollection } from '../../firebase/firebase.util';

import { addTransaction } from '../../redux/jar/jar.actions';

import {
    WalletContainer,
    WalletTitle,
    WalletBalance,
    ButtonsBarContainer,
    WalletMainContainer
} from './wallet.styles';

const Wallet = ({ addTransaction }) => {
    const [balance, setBalance] = useState({ money: 0 });
    const {money} = balance;
    const [transaction, setTransaction] = useState({ name: '', amount: '', action: '' });
    const { name, amount, action } = transaction;
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getTransactionsCollection();
            setData(result);
        };
        fetchData();
    }, []);

    const basicBalance = () => {
        let money = 0;
        data.forEach(item => {
            if (item.action === 'Added') {
                money = money + parseInt(item.amount);
            } else {
                money = money - parseInt(item.amount);
            }
        });
        return money;
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setTransaction({ ...transaction, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
    };

    const clearForm = () => {
        setTransaction({ name: '', amount: '', action: '' });
    };

    const handleAdd = async event => {
        const addSum = parseInt(amount);

        if (addSum <= 0) {
            alert("Don't use negative numbers");
        } else {
            transaction.action = "Added";
            setBalance({ money: money + addSum });

            createTransactionDocument(transaction, { name });
            clearForm();
        }
    };

    const handleWithdrawal = async event => {
        const withdrawSum = parseInt(amount);

        if (withdrawSum <= 0) {
            alert("Don't use negative numbers");
        } else if (basicBalance() > withdrawSum) {
            transaction.action = "Withdrawal";
            setBalance({ money: money - withdrawSum });
            setTransaction({ action: "Withdrawed" });

            createTransactionDocument(transaction, { name });
            addTransaction(transaction);
            clearForm();
        } else {
            alert("You don't have enough money to withdraw " + withdrawSum + "zł :( Go earn some money first!!!");
        }
    };

    return (
        <WalletMainContainer>
            <WalletContainer>
                <WalletTitle>Balance:</WalletTitle>
                <WalletBalance> {basicBalance() + parseInt(money)} zł</WalletBalance>

                <form onSubmit={handleSubmit}>
                    <Form
                        name='name'
                        type='text'
                        placeholder='Transaction name'
                        handleChange={handleChange}
                        value={name}
                        required
                    />
                    <Form
                        name='amount'
                        type='number'
                        placeholder='Amount to add/withdraw'
                        handleChange={handleChange}
                        value={amount}
                        required
                    />
                    <ButtonsBarContainer>
                        <CustomButton id="add" type='submit' onClick={() => { handleAdd(); }}>Add</CustomButton>
                        <CustomButton id="withdraw" type='submit' onClick={() => { handleWithdrawal(); }}>Withdraw</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </WalletContainer>
            <History firebaseItems={data} />
        </WalletMainContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addTransaction: (transaction) => dispatch(addTransaction(transaction))
});


export default connect(null, mapDispatchToProps)(Wallet);