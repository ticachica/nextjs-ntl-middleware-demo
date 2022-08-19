export async function getStaticProps() {
    return {
        props: {
            message: "This is a static page - and now this prop!",
        },
    };
}

const Page = ({ message }) => {
    return (
        <main>
            <h1 id="message">{message}</h1>
        </main>
    ) 
};

export default Page;