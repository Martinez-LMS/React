import {useState} from 'react'

const ListRender = () => {


    const [user, setUsers] = useState([
      {name: "Matheus", age: 30},
      {name: "Pedro", age: 25},
      {name: "Leo", age: 20},
    ]);

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4);
      console.log(randomNumber);
      setUsers((prevUsers) => {
        return prevUsers.filter((user, i) => i !== randomNumber);
      });
    };

    
    const [list] = useState(["Matheus-", "pedro-", "leo"]);
  return (
    <div>
        <ul>
            {list.map((item, i)=>(
                <li> key={i}{list}</li>
            ))}
        </ul>
        <ul>
          {user.map((user) => (
            <li key={useState.id}>
              {user.name} - {user.age}
              </li>))}
        </ul>
        <button onClick={deleteRandom}>Deletar random user</button>
    </div>
  )
}

export default ListRender