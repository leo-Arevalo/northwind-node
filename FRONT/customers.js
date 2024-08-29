
//DOMContentLoad espera que se cargue toda la pagina
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("#customerForm");
    const customerIdField = document.querySelector("#customerId");
    const customerTableBody = document.querySelector("#customerTableBody");

    //==================================================


    form.addEventListener('submit', async (event) => {
        event.preventDefault(); //evitamos que al hacer clic envie el form y actualice

        const customerId = customerIdField.value;
        const formData = new FormData(form); //El formulario debe tener el campo name establecido para funcionar.

        let url = 'http://localhost:3030/northwind/customers';
        let method = 'POST';

        if (customerId) {
            url = `http://localhost:3030/northwind/customers/${customerId}`;
            method = 'PUT';
        }

        const dataToSend = JSON.stringify(Object.fromEntries(formData));
        console.log('Data to Send:', dataToSend); //debugging line

        try {
            const response = await fetch(url, {
                method: method,
                body: dataToSend,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                alert('Customer saved Successfully');
                form.reset();
                customerIdField.value = '';
                loadCustomers();
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }

        } catch (error) {
            alert(`Network Error:${error.message}`);
        }

    });

    //===============================================================

    const loadCustomers = async () => {
        try {

            const response = await fetch('http://localhost:3030/northwind/customers');
            if (response.ok) {
                const customers = await response.json();
                customerTableBody.innerHTML = ''; //limpiamos la tabla antes de agregar nuevas filas.
                customers.forEach(customer => {
                    const row = document.createElement('tr');

                    row.innerHTML = `
                        <td>${customer.company}</td>
                        <td>${customer.first_name}</td>
                        <td>${customer.last_name}</td>
                        <td>${customer.email_address}</td>
                        <td>
                            <button class="edit">Edit</button>
                            <button class="delete">Delete</button>
                        </td>
                    `;
                    //Agregando event listeners para los botones
                    const editButton = row.querySelector('.edit');
                    const deleteButton = row.querySelector('.delete');
                    editButton.addEventListener("click", () => editCustomer(customer.id));
                    deleteButton.addEventListener("click", () => deleteCustomer(customer.id));


                    customerTableBody.appendChild(row);
                });
            } else {
                alert('Failed to load customers');
            }
        } catch (error) {
            console.log('Network Error: ${error.message}');
            alert(`Network Error: ${error.message}`);
        }
    };

    //================================ EDIT CUSTOMER ========================

    const editCustomer = async (id) => {
        try {
            //Realizamos una solicitud GET para obtener los datos del cliente con el id
            const response = await fetch(`/northwind/customers/${id}`);
            //si tenemos una respuesta
            if (response.ok) {
                //convertimos la respuesta a formato JSON para obtener los datos
                const customer = await response.json();
                /*iteramos sobre cada clave del objeto customer
                    Object.keys devuelve un array con todas las claves de un arreglo.
                    OJO! claves no valor, seria algo asi como [nombre, apellido, edad]
                    y no [leopoldo, gomez, 45]
                    Luego para cada clave busca el campo(input)en el formulario que coincida
                */
                Object.keys(customer).forEach(key => {
                    //busca el elemento del FORMULARIO que coincida con el nombre de la clave
                    const input = document.querySelector(key);
                    //si existe un elemento con ese id, asigna el valor del cliente a ese campo
                    if (input) {
                        input.value = customer[key];
                    }
                });
                //asigna el ID del cliente al campo oculto para su posterior uso al editar
                customerIdField.value = id;
            } else {
                //si no encontramos el cliente
                alert(`Customer not found`);
            }
        } catch (error) {
            alert(`Network Error: ${error.message}`);
        }

    };

    //================================ DELETE CUSTOMER ========================

    const deleteCustomer = async (id) => {
        if (confirm('Are you sure you want to delete this customer?')) {
            try {
                const response = await fetch(`/northwind/customers/${id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    alert(`Customer deleted successfully`);
                    loadCustomers();
                } else {
                    alert(`Failed to delete customer`);
                }

            } catch (error) {
                alert(`Network Error: ${error.message}`);
            }
        }


    };


    //load customers when the page loads
    loadCustomers();

})













