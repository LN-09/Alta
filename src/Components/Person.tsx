type personNameProps = {
  name: {
    first: string;
    last: string;
  };
};

// export default function Person(props: personNameProps) {
//   return (
//     <h2>
//       {props.name.first} {props.name.last}
//     </h2>
//   );
// }

export const Person: React.FC<personNameProps> = ({ name }) => {
  return (
    <h2>
      {name.first} {name.last}
    </h2>
  );
};
