
function Child({person}) {

  return (
    <div>
      <header>
        <h3>Name: </h3>
        <div>{person.name}</div>
        <h3>Age: </h3>
        <div>{person.info.age}</div>
        <h3>City: </h3>
        <div>{person.info.city}</div>
        <h3>Job: </h3>
        <div>{person.info.job}</div>
        <h3>Hobbies: </h3>
        <div>{person.info.hobbies.map(h=>h)}</div>
      </header>
    </div>
  );
}

export default Child;
