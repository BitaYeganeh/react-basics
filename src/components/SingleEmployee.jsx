import { useEffect, useState } from "react";
import axios from "axios";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router";

const SingleEmployee = () => {
    const {id} = useParams();
    const [employee, setEmployee] = useState(null);
    console.log("Employee: ", employee);
    const [isloading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);  

    const [formData, setFormData] = useState({
        name: employee?.name || "",
        title: employee?.title || "",
        age: employee?.age || "",
    }); 

const url = `https://react-basics-ye98.onrender.com/employees/${id}`;

const {data, loading, error} = useAxios (url);

    const handleChange = (e) => {
        setFormData((prevState) => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    };


    const toggleEdit = () => {
        setIsEditing(!isEditing);
    }
    const handleSave = () => {
        axios
        .put(`https://react-basics-ye98.onrender.com/employees/${id}`, formData)
        .then((response) => {
            setEmployee(response.data);
            setIsEditing(false);
        })
        .catch((error) => {
            console.log("Error: ", error.message);

        }) 
        .finally(() => {
            setIsLoading(false);
        });
    };
    console.log("Data: ", data);
    console.log("Loading: ", loading);

    useEffect(() => {
        if (data) {
        setEmployee(data);
        setFormData({
            name: data.name,
            title: data.title,
            age: data.age,
        });
    }
        
        // axios
        //  .get(`https://react-basics-ye98.onrender.com/employees/${id}`)
        //  .then((response) => {
        //     setEmployee(response.data);
        //     setFormData({
        //         name: response.data.name,
        //         title: response.data.title,
        //         age: response.data.age,
        //     });
        // })
        // .finally(() => {
        //     setIsLoading(false);
        // });
    }, [id, data, loading]);

    if (loading || isloading) {
        return <div>Loading...</div>;
    }

    if (isEditing) {
        return (
        <div>
        <form>

        <lable htmlFor="name">Name:</lable>
        <input 
        type="text" 
        name="name" 
        value={formData?.name} 
        onChange={handleChange}/>

        <lable htmlFor="title">Title:</lable>
        <input 
        type="text" 
        name="title" 
        value={formData?.title} 
        onChange={handleChange}/>

        <lable htmlFor="age">Age:</lable>
        <input 
        type="number" 
        name="age" 
        value={formData?.age} 
        onChange={handleChange}/>
        
        </form>
        <button onClick={toggleEdit}>Cancel</button>
        <button onClick={handleSave}>Save</button>
        </div>
        );
    }

    return (
        <div>
            <h3>Employee Details</h3>
            <p>Name: {employee?.name}</p>
            <p>Title: {employee?.title}</p>
            <p>Age: {employee?.age}</p>
            <p>Is Favourite: {employee?.isFavourite ? "Yes" : "No"}</p>
            <button className="editButton" onClick={toggleEdit}>Edit</button>
        </div>
    )
};
export default SingleEmployee;