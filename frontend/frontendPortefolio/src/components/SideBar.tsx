import React from "react";

function SideBar() {
  const items = ["Présentation personelle", "Mes projets", "Me contacter"];

  return (
    <>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SideBar;
