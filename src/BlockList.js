import BlockItem from "./BlockItem";

function BlockList({ data, blockName, title }) {
  const listArray = data[blockName];

  return (
    <div>
      <h2 className="title">{title}</h2>
      {listArray &&
        listArray.map((item) => (
          <ul key={item.id}>
            <BlockItem name={item.name} link={item.link} />
          </ul>
        ))}
    </div>
  );
}

export default BlockList;
