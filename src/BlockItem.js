function BlockItem({ name, link }) {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </li>
  );
}

export default BlockItem;
