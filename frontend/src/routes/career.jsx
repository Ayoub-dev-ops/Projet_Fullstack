const CareerPage = () => {
    const name = "Career Name";
    const bio = "Write a short bio about yourself.";

    return (
        <div>
            <h1>Career</h1>
            <p>Welcome to my career page!</p>
            <h2>{name}</h2>
            <p>Bio: {bio}</p>
            <br />
        </div>
    );
};

export default CareerPage;