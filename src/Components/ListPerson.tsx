type ListPersonName = {
  name: {
    last: string;
    first: string;
  }[];
};
export default function ListPerson({ name }: ListPersonName) {
  return (
    <div>
      {name.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
}
