export default function ChildComponent({person}){
  const   {
name, 
info: { age, city, hobbies },
    } = person;
return (
    <>
    <h1>{name}</h1>
    <p> Age: {age} </p>
    <p>City: {city}</p>
    <p>Hobbies: {hobbies}</p>
    <ul>
        {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
        ))}
    </ul>
    </>
);
}