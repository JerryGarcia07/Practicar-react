import React from "react";

const Formularios = ({ producto, handleSubmit, handleChane }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input
        type="text"
        value={producto.nombre}
        onChange={handleChane}
        name="nombre"
      />
      <label>Precio:</label>
      <input
        type="text"
        value={producto.precio}
        onChange={handleChane}
        name="precio"
      />
      <label>Stock:</label>
      <input
        type="text"
        value={producto.stock}
        onChange={handleChane}
        name="stock"
      />
      <label>Categoría:</label>
      <input
        type="text"
        value={producto.categoria}
        onChange={handleChane}
        name="categoria"
      />
      <button type="submit">Agregar producto</button>
    </form>
  );
};

export default Formularios;
