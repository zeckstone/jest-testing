import axios from "axios";

const fetchData = async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/2');

        return data;
    } catch (err) {
        return err.code;
    }
}

const loadData = async () => {
  const data = await fetchData();
  console.log('Here\'s the Response:', data);
}

loadData();

// const constantTime = 1657496224159;
// // console.log(new Date().getTime())
// setInterval(() => {
//     const seconds = (new Date().getTime() - constantTime)/1000;
//     const minutes = (seconds / 60) >= 1 ? Math.floor(seconds / 60) : 0;
//     const hours = (minutes / 60) >= 1 ? Math.floor(minutes / 60) : 0;
//     const _minutes = minutes > 9 && minutes < 60 ? `${minutes}` : 
//         `${(minutes < 10 ? `0${minutes}` 
//         : (minutes % 60 < 10 ? `0${minutes % 60}` : minutes % 60))}`;
//     const _hours = hours > 9 ? `${hours}` : `0${hours}`;

//     console.log(`${_hours}:${_minutes}`);
// }, 1000);


