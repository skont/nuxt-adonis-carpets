import axios from 'axios';

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    //const result = await axios.get(`http://localhost:3000/api/ping`)

    const result = await axios('http://192.168.1.14:4000/api/v1/Ping');

    //console.log(result.data)
    const d = result.data

    // Pass data to the page via props
    return { props: { d } }
}


const Ping = ({ d }) => {

    return (
        <div>
        <ul>
            <li>Service Version: {d.version}</li>
            <li>Running since: {d.startUp}</li>
            <li>Number of requests since start: {d.numberOfRequests}</li>

        </ul>
        </div>
    )

}

export default Ping