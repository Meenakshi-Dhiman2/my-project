require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
//Middleware to parse json bodies
app.use(express.json());
app.use(cors());


//Connect to mongoDB (async/await style)
async function connectDB()
{
    try
    {
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log('MongoDB connected');
    }
    catch (error)
    {
        console.error('MongoDB connection failed:', error);
        process.exit(1);  //Exit process if DB connection fails
    }  
}

connectDB();

//Define Mongoose schema amd model
const employeeSchema = new mongoose.Schema(
    {
        empNo:     {type: Number, required: true },
        empName:   {type: String, required: true, unique: true },
        empSal:     {type: Number, required: true },
        
    },
    {
        timestamps: false,
        versionKey: false
    });

const Employee = mongoose.model('Employee', employeeSchema);

//Create or Add new employee
app.post('/api/employees', async (req, res) => {
    try
    {
        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        //res.status(201).json(savedEmployee);
        res.status(201).json ({ message: 'Employee Added Successfully'});
    }
    catch (error)
    {
        res.status(400).json({message: error.message });
    }
});

//Get employees find all record
app.get('/api/employees', async (req, res) => {
    try
    {
        const employees = await Employee.find();
        res.json(employees);
    }
    catch (error)
    {
        res.status(500).json({message: error.message });
    }
});

//Get employee by ID
app.get('/api/employees/:id', async (req, res) => {
    try
    {
        const employee = await Employee.findById(req.params.id);
        if (!employee)
            return res.status(404).json({ message: 'Employee not found'});
        res.json(employee);

    }
    catch (error)
    {
        res.status(500).json({ message:error.message});
       
    }
});


//Delete employee by ID
app.delete('/api/employees/:id', async (req, res) => {
    try
    {
const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
         if (!deletedEmployee)
            return res.status(404).json({ message: 'Employee not found'});
        res.json({message: "Employee Deleted Successfully"});
    }
    catch (error)
    {
        res.status(500).json({ message:error.message});
       
    }
    
});

//Update employee by ID
app.put('/api/employees/:id', async (req, res) => {
    try
    {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if(!updatedEmployee)
            return res.status(404).json({message: 'Employee not found'});
            res.json({message: 'Employee  Updated Successfully'});
    }
    catch (error)
    {
       res.status(400).json({ message:error.message}); 
    }

});

  
app.listen(PORT,() => {
    console.log(`Server started on http://localhost:${PORT}`);
});