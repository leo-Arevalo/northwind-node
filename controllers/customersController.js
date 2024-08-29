
const customersModel = require('../models/customersModel.js');


//=========== Obtener todos los Customers ============

const getCustomers = async (req, res) => {
    try {
        const customers = await customersModel.findAll()
        res.json(customers)
    }catch(error){
        res.json({message:error.message})
    }
}

// ============= Obtener un customer por ID ===============

const getCustomerById = async (req, res) => {

    try{
        const customer = await customersModel.findByPk(req.params.id);
        if(customer){
            res.json(customer);
        }else{
            res.status(404).json({error: 'Customer not found'});
        }
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

//=========== Crear un nuevo Customer ====================

const createCustomer = async (req, res) => {
    try{
        const newCustomer = await customersModel.create(req.body);
        res.status(201).json(newCustomer);
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }

};


//=========== Actualizar un Customer ====================

const updateCustomer = async (req, res) => {
    try{
        const [updated] = await customersModel.update(req.body, {
            where:{id: req.params.id }
        });
        if(updated){
            const updatedCustomer = await customersModel.findByPk(req.params.id);
            res.status(200).json(updatedCustomer);
        }else{
            res.status(404).json({error: 'Customer not found'})
        }

    }catch(error){
        res.status(500).json({message: error.message});
    }
};

//=========== Eliminamos un Customer ================

const deleteCustomer = async (req, res) => {
    try{

        const deleted = await customersModel.destroy({
            where: {id: req.params.id}
        });
        if(deleted){
            res.status(204).json();
        }else{
            res.status(404).json({ error:"customer not found"});
        }
    }catch(error){
        res.status(500).json({error: "Internal Server Error"});
    }
};


module.exports = {getCustomerById, getCustomers, createCustomer, updateCustomer, deleteCustomer}

