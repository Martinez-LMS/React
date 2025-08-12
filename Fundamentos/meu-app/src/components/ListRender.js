import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Matheus-", "pedro-", "leo"]);
  return (
    <div>
        <ul>
            {list.map((item)=>(
                <li>{list}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender