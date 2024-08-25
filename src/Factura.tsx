import React, { useEffect, useState } from 'react';
import './Factura.css';

interface Pedido {
    nombreCliente: string;
    platoFuerte: string;
    opcionales: string[];
    bebida: string;
  }
  
  type PrecioItems = 
    | "Arroz con camarones"
    | "Pollo en Salsa Blanca"
    | "Macarrones con carne molida"
    | "Hamburguesa"
    | "Pizza"
    | "Sandwich"
    | "Pinto con huevo"
    | "Empanada"
    | "Pastel de papa"
    | "Papas fritas"
    | "Ensalada"
    | "Aros de cebolla"
    | "Maduros"
    | "Pure de papa"
    | "Verduras"
    | "Papa horneada"
    | "Platanos"
    | "Natilla"
    | "Refresco"
    | "Jugo de frutas"
    | "Agua"
    | "Café"
    | "Horchata"
    | "Tamarindo"
    | "Cas"
    | "Resbaladera"
    | "Jugo de naranja";
  
  const precios: Record<PrecioItems, number> = {
    "Arroz con camarones": 2500,
    "Pollo en Salsa Blanca": 2500,
    "Macarrones con carne molida": 2000,
    "Hamburguesa": 1500,
    "Pizza": 1500,
    "Sandwich": 1000,
    "Pinto con huevo": 2000,
    "Empanada": 1000,
    "Pastel de papa": 1000,
    "Papas fritas": 500,
    "Ensalada": 500,
    "Aros de cebolla": 500,
    "Maduros": 500,
    "Pure de papa": 500,
    "Verduras": 500,
    "Papa horneada": 700,
    "Platanos": 300,
    "Natilla": 200,
    "Refresco": 1200,
    "Jugo de frutas": 650,
    "Agua": 700,
    "Café": 700,
    "Horchata": 650,
    "Tamarindo": 650,
    "Cas": 650,
    "Resbaladera": 650,
    "Jugo de naranja": 650
  };
  
  const Factura: React.FC = () => {
    const [pedido, setPedido] = useState<Pedido | null>(null);
    const [subtotal, setSubtotal] = useState<number>(0);
    const [iva, setIva] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
  
    useEffect(() => {
      const storedPedido = localStorage.getItem('pedido');
      console.log('Stored pedido:', storedPedido); // Verifica el contenido del localStorage
      if (storedPedido) {
        const parsedPedido: Pedido = JSON.parse(storedPedido);
        console.log('Parsed pedido:', parsedPedido); // Verifica el objeto parseado
        setPedido(parsedPedido);
        calculateTotals(parsedPedido);
        setTimeout(() => {
          localStorage.clear();
          window.location.href = '/combos'; // Cambiado a la ruta correcta en tu enrutador
        }, 10000);
      }
    }, []);
  
    const getPrecio = (elemento: string): number => {
      console.log('Element to get price for:', elemento); // Verifica qué elemento se está pasando
      return precios[elemento as PrecioItems] || 0;
    };
  
    const calculateTotals = (pedido: Pedido) => {
      let subtotalCalc = getPrecio(pedido.platoFuerte);
      pedido.opcionales.forEach(opcional => {
        subtotalCalc += getPrecio(opcional);
      });
      subtotalCalc += getPrecio(pedido.bebida);
  
      const ivaCalc = subtotalCalc * 0.15;
      const totalCalc = subtotalCalc + ivaCalc;
  
      setSubtotal(subtotalCalc);
      setIva(ivaCalc);
      setTotal(totalCalc);
    };
  
    if (!pedido) {
      return <div>Cargando...</div>;
    }
  
    return (
      <div>
        <h1>Factura</h1>
        <div id="factura">
          <p><strong>Nombre del cliente:</strong> {pedido.nombreCliente}</p>
          <p><strong>Plato Fuerte:</strong> {pedido.platoFuerte}</p>
          <p><strong>Opcionales:</strong> {pedido.opcionales.length > 0 ? pedido.opcionales.join(', ') : 'Ninguno'}</p>
          <p><strong>Bebida:</strong> {pedido.bebida !== '' ? pedido.bebida : 'Ninguna'}</p>
          <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
          <p><strong>Impuesto sobre el valor agregado (IVA):</strong> ${iva.toFixed(2)}</p>
          <p><strong>Total:</strong> ${total.toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default Factura;