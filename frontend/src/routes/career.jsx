const CareerPage = () => {
    const name = "Career Page";
    const bio = "This is the career page of my portfolio.";

    return (
        <div>
            <h1>Career</h1>
            <p>Welcome to my career page!</p>
            <h2>{name}</h2>
            <p>Bio: {bio}</p>
            <iframe src="../public/Profile.pdf" width="100%" height="500px"></iframe>
            <br />
        </div>
    );
};

export default CareerPage;