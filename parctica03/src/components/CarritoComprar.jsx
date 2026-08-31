import React, { useState } from "react";

const CarritoComprar = () => {
  const [carrito, setCarrito] = useState([]);

  const productos = [
    { id: 1, nombre: "Laptop", precio: 3500 },
    { id: 2, nombre: "Mouse", precio: 80 },
    { id: 3, nombre: "Monitor", precio: 900 },
  ];

  const AgregarCarrito = (producto) => {
    const data = carrito.find((prod) => prod.id === producto.id);

    if (data) {
      setCarrito(
        carrito.map((pro) =>
          pro.id === producto.id ? { ...pro, cant: pro.cant + 1 } : pro,
        ),
      );
    } else {
      setCarrito([
        ...carrito,
        {
          ...producto,
          idCarrito: Date.now(),
          cant: 1,
        },
      ]);
    }
  };

  const EliminarCarrito = (id) => {
    setCarrito(carrito.filter((prev) => prev.idCarrito !== id));
  };

  const aumento = (id) => {
    setCarrito(
      carrito.map((data) => {
        if (data.id === id) return { ...data, cant: data.cant + 1 };
        return data;
      }),
    );
  };

  const disminir = (id) => {
    setCarrito(
      carrito.map((data) => {
        if (data.id === id) return { ...data, cant: data.cant - 1 };
        return data;
      }),
    );
  };
  return (
    <div>
      <h1>Carrito de Compra</h1>
      <h2>Lista de Producto</h2>
      <ul>
        {productos.map((prod, index) => (
          <li key={index}>
            {prod.nombre} - S/.{prod.precio}{" "}
            <button onClick={() => AgregarCarrito(prod)}>Agregar</button>
          </li>
        ))}
      </ul>
      <h2>Carrito de Compra</h2>
      <ul>
        {carrito.map((prov, index) => (
          <li key={index}>
            {prov.nombre}
            <button onClick={() => aumento(prov.id)}> + </button>
            {prov.cant}
            <button onClick={() => disminir(prov.id)} disabled={prov.cant == 1}>
              {" "}
              -{" "}
            </button>
            <button onClick={() => EliminarCarrito(prov.idCarrito)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3>
        Total: S/
        {carrito.reduce(
          (prev, current) => prev + current.precio * current.cant,
          0,
        )}
      </h3>
    </div>
  );
};

export default CarritoComprar;
