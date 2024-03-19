import "../sidebar.scss";
function Links({ classStyle = "links" }) {
  const links = ["Home", "Services", "Portfolio", "About", "Contacts"];
  return (
    <div className={classStyle}>
      {links.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}

export default Links;
