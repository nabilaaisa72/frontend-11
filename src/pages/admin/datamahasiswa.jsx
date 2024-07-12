import axios from "axios";
import GetMahasiswa from "./GetMahasiswa";

const DataMahasiswa = ({data}) => {
    return ( 
        <>
            <GetMahasiswa mahasiswa={data} />
        </>
     );
}

export const getServerSideProps = async ({query}) => {
    const nim = query.nim
    //panggil API
    let url = `http://localhost:3307/mahasiswa`
    if(nim) {
        url = `http://localhost:3307/mahasiswa/${nim}`
    }

    const res = await axios.get(url)
    const data = res.data

    return {
        props: {
            data,
        },
    };
}

export default DataMahasiswa;

// import axios from "axios";
// import GetMahasiswa from "./getmahasiswa";

// const DataMahasiswa = ({data}) => {
//     return ( 
//         <>
//             <GetMahasiswa mahasiswa={data} />
//         </>
//      );
// }

// export const getServerSideProps = async ({query}) => {
//     const nim = query.nim
//     //panggil API atau ambil data dari sumber exsternal
//     let url = `http://localhost:3307/mahasiswa`
//     if(nim) {
//         url = `http://localhost:3307/mahasiswa/${nim}`
//     }

//     const res = await axios.get(url)
//     const data = res.data

//     return {
//         props: {
//             data,
//         },
//     };
// }

// export default DataMahasiswa;