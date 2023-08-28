import { UserCard } from "@/components/UserCard";

const getData = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json();
  return data

}

export default async function Home() {

  const users = await getData();
  return  (
    <>
    { users?.map((user: any, i:number)=>{
    return (
     <div key={i}>
        <UserCard user={user}/>
     </div>
    )
  })}
  
  </>)

}
