import { useRef } from 'react';

const Home = () => {
    const form = useRef();

    const submitPortfolio = (e) => {
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];

        // Simulate saving portfolio (replace with actual backend logic as needed)
        console.log("Portfolio submitted:", { name, description, url, image });

        // Clear form fields (optional)
        form.current.reset();
    }

    return (
        <div className="dashboard">
            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type="text" placeholder="Name" /></p>
                <p><textarea placeholder="Description"></textarea></p>
                <p><input type="text" placeholder="Url" /></p>
                <p><input type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                {/* Example sign-out button (remove if not needed in static version) */}
                {/* <button onClick={() => console.log("Sign out")}>Sign out</button> */}
            </form>
        </div>
    )
}

export default Home;
