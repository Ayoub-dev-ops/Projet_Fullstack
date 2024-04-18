const ProfilePage = () => {
    const name = "Your Name";
    const age = 22;
    const email = "yourname@example.com";
    const bio = "Write a short bio about yourself.";

    return (
        <div>
            <h1>Profile</h1>
            <p>Welcome to my profile page!</p>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Bio: {bio}</p>
            <br />
            <h1>Contact me!</h1>
            <form action="mailto:yourname@example.com" method="post" encType="text/plain">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <br />
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" />
                <br />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" cols="50"></textarea>
                <br />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ProfilePage;