import { useState } from 'react';
import emailjs from 'emailjs-com';

const ProfilePage = () => {
    const name = "Ayoub ERROUICHAQ";
    const age = 22;
    const email = "polomalgax@example.com";
    const bio = "I'm a cool guy!";
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = import.meta.env.SERVICE_ID;
        const templateID = import.meta.env.TEMPLATE_ID;
        const userID = import.meta.env.USER_ID;

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log(result.text);
                alert('Email envoyé avec succès!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, (error) => {
                console.error(error.text);
                alert('Erreur lors de l\'envoi de l\'email. Veuillez réessayer.');
            });
    };

    return (
        <div>
            <div>
            <h1>Profile</h1>
            <p>Welcome to my profile page!</p>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Bio: {bio}</p>
        </div>
            <h1>Contactez-moi !</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nom :</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <br />
                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <br />
                <label htmlFor="subject">Sujet :</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                />
                <br />
                <label htmlFor="message">Message :</label><br />
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <br />
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default ProfilePage;