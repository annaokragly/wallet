import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDHyVfQUBP1ndWxmzf8kmq9fmI63oNLSwE",
    authDomain: "wallet-37b31.firebaseapp.com",
    databaseURL: "https://wallet-37b31.firebaseio.com",
    projectId: "wallet-37b31",
    storageBucket: "wallet-37b31.appspot.com",
    messagingSenderId: "1080643114076",
    appId: "1:1080643114076:web:1567aa8818d52796274299"
};

firebase.initializeApp(config);

export const createTransactionDocument = async (transactionAuth, additionalData) => {
    console.log('transactionauth', transactionAuth);
    if (!transactionAuth) return;
    const transactionRef = firestore.collection('transactions').doc();

    const { name, amount, action } = transactionAuth;
    const createdAt = new Date();

    try {
        await transactionRef.set({
            name,
            action,
            amount,
            createdAt,
            ...additionalData
        })
    } catch (error) {
        console.log('error saving transaction', error.message);
    }

    return transactionRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getTransactionsCollection = async () => {
    let transactions = [];
    
    await firestore.collection("transactions").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            transactions.push(doc.data());
        });
    });
    return transactions;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;