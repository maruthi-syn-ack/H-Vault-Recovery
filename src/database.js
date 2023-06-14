import db from './dbserver.js';
import mongoose from 'mongoose';
// import mongoose from 'mongoose/browser';
// // const mongoose = require('mongoose');

// const uri = "mongodb://localhost:27017/";
// const dbName = "patient";
// //connect to db
// mongoose.connect(uri + dbName,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });

// const db = mongoose.connection;



const patientSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    name: {
        type: String,
        required: [true, "please check your data no name"]  // validation of name
    },

    DOB: {
        type: Number,
    },
    bloodGroup: {
        type: String
    },
    phone_number: {
        type: Number
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    origin: {
        type: String
    },
    cidhash: {
        file: {
            type: mongoose.Schema.Types.Mixed
        }
    }
});


const Patient = mongoose.model('pid', patientSchema);


export function insert(dataObj, cid, hash) {

    const patient = new Patient({
        _id: 1,
        name: dataObj.name,
        DOB: dataObj.dob,
        bloodGroup: dataObj.bloodGroup,
        phone_number: dataObj.phone_number,
        email: dataObj.email,
        gender: dataObj.gender,
        origin: dataObj.origin,
        martialStatus: dataObj.maritialStatus,
        cidhash: {
            file: {
                cid: cid,
                hash: hash
            }
        }
    })

    console.log("inserted")
    patient.save()
    return patient
}

export function update(patient, cid, hash) {
    const newData = {
        [cid]: {
            cid: cid,
            hash: hash
        }

    }
    const field = 'cidhash.file'
    patient.cidhash.file = { ...patient.get(field), ...newData };
    Patient.updateOne({ _id: patient._id }, { $set: { cidhash: patient.cidhash } })

}