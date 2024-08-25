import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Combo.css';

const Combo: React.FC = () => {
  const [visibleTable, setVisibleTable] = useState<string | null>(null);
  const [clientName, setClientName] = useState('');
  const [selectedPlato, setSelectedPlato] = useState<string | null>(null);
  const [selectedOpcionales, setSelectedOpcionales] = useState<string[]>([]);
  const [selectedBebida, setSelectedBebida] = useState<string | null>(null);

  const handleShowTable = (tableId: string) => {
    setVisibleTable(tableId);
  };

  const handleClearOrder = () => {
    setClientName('');
    setSelectedPlato(null);
    setSelectedOpcionales([]);
    setSelectedBebida(null);
  };

  const handleSaveOrder = () => {
    if (!selectedPlato) {
      alert('Por favor seleccione un plato fuerte.');
      return;
    }

    const order = {
      nombreCliente: clientName,
      platoFuerte: selectedPlato,
      opcionales: selectedOpcionales,
      bebida: selectedBebida,
    };
    localStorage.setItem('pedido', JSON.stringify(order));
    window.location.href = 'Factura.tsx';
  };

  return (
    <div className="container text-center">
      <h1>Orden de Servicio</h1>
      <label htmlFor="nombreCliente">Nombre del cliente:</label>
      <input
        type="text"
        id="nombreCliente"
        className="form-control"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <br /><br />

      <div className="row align-items-start">
        <div className="col">
          <h2>Plato Fuerte:</h2>
          <button
            onClick={() => handleShowTable('platoFuerte')}
            className="btn btn-primary"
          >
            Combo 1
          </button>
          <br /><br />
          <button
            onClick={() => handleShowTable('platoFuerte2')}
            className="btn btn-primary"
          >
            Combo 2
          </button>
          <br /><br />
          <button
            onClick={() => handleShowTable('platoFuerte3')}
            className="btn btn-primary"
          >
            Combo 3
          </button>
          <br /><br />
        </div>

        <div className="col">
          <h2>Opcionales:</h2>
          <button
            onClick={() => handleShowTable('opcionales')}
            className="btn btn-primary"
          >
            Combo 1
          </button>
          <br /><br />
          <button
            onClick={() => handleShowTable('opcionales2')}
            className="btn btn-primary"
          >
            Combo 2
          </button>
          <br /><br />
          <button
            onClick={() => handleShowTable('opcionales3')}
            className="btn btn-primary"
          >
            Combo 3
          </button>
          <br /><br />
        </div>

        <div className="col">
          <h2>Bebidas:</h2>
          <button
            onClick={() => handleShowTable('bebidas')}
            className="btn btn-primary"
          >
            Combo 1
          </button>
          <br /><br />
          <button
            onClick={() => handleShowTable('bebidas2')}
            className="btn btn-primary"
          >
            Combo 2
          </button>
          <br /><br />
          <button
            onClick={() => handleShowTable('bebidas3')}
            className="btn btn-primary"
          >
            Combo 3
          </button>
          <br /><br />
        </div>
      </div>

      {visibleTable === 'platoFuerte' && (
        <div id="platoFuerte">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="plato"
                    value="Arroz con camarones"
                    checked={selectedPlato === 'Arroz con camarones'}
                    onChange={() => setSelectedPlato('Arroz con camarones')}
                  />
                  Arroz con camarones (₡2500)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="plato"
                    value="Pollo en Salsa Blanca"
                    checked={selectedPlato === 'Pollo en Salsa Blanca'}
                    onChange={() => setSelectedPlato('Pollo en Salsa Blanca')}
                  />
                  Pollo en Salsa Blanca (₡2500)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="plato"
                    value="Macarrones con carne molida"
                    checked={selectedPlato === 'Macarrones con carne molida'}
                    onChange={() => setSelectedPlato('Macarrones con carne molida')}
                  />
                  Macarrones con carne molida (₡2000)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {visibleTable === 'platoFuerte2' && (
        <div id="platoFuerte2">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="plato"
                    value="Hamburguesa"
                    checked={selectedPlato === 'Hamburguesa'}
                    onChange={() => setSelectedPlato('Hamburguesa')}
                  />
                  Hamburguesa (₡1500)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="plato"
                    value="Pizza"
                    checked={selectedPlato === 'Pizza'}
                    onChange={() => setSelectedPlato('Pizza')}
                  />
                  Pizza (₡1500)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="plato"
                    value="Sandwich"
                    checked={selectedPlato === 'Sandwich'}
                    onChange={() => setSelectedPlato('Sandwich')}
                  />
                  Sandwich (₡1000)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {visibleTable === 'platoFuerte3' && (
        <div id="platoFuerte3">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="plato"
                    value="Pinto con huevo"
                    checked={selectedPlato === 'Pinto con huevo'}
                    onChange={() => setSelectedPlato('Pinto con huevo')}
                  />
                  Pinto con huevo (₡2000)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="plato"
                    value="Empanada"
                    checked={selectedPlato === 'Empanada'}
                    onChange={() => setSelectedPlato('Empanada')}
                  />
                  Empanada (₡1000)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="plato"
                    value="Pastel de papa"
                    checked={selectedPlato === 'Pastel de papa'}
                    onChange={() => setSelectedPlato('Pastel de papa')}
                  />
                  Pastel de papa (₡1000)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {visibleTable === 'opcionales' && (
        <div id="opcionales">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name="opcion"
                    value="Papas fritas"
                    checked={selectedOpcionales.includes('Papas fritas')}
                    onChange={() => {
                      const newOpcionales = selectedOpcionales.includes('Papas fritas')
                        ? selectedOpcionales.filter(o => o !== 'Papas fritas')
                        : [...selectedOpcionales, 'Papas fritas'];
                      setSelectedOpcionales(newOpcionales);
                    }}
                  />
                  Papas fritas (₡500)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name="opcion"
                    value="Ensalada"
                    checked={selectedOpcionales.includes('Ensalada')}
                    onChange={() => {
                      const newOpcionales = selectedOpcionales.includes('Ensalada')
                        ? selectedOpcionales.filter(o => o !== 'Ensalada')
                        : [...selectedOpcionales, 'Ensalada'];
                      setSelectedOpcionales(newOpcionales);
                    }}
                  />
                  Ensalada (₡500)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name="opcion"
                    value="Aros de cebolla"
                    checked={selectedOpcionales.includes('Aros de cebolla')}
                    onChange={() => {
                      const newOpcionales = selectedOpcionales.includes('Aros de cebolla')
                        ? selectedOpcionales.filter(o => o !== 'Aros de cebolla')
                        : [...selectedOpcionales, 'Aros de cebolla'];
                      setSelectedOpcionales(newOpcionales);
                    }}
                  />
                  Aros de cebolla (₡500)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {visibleTable === 'opcionales2' && (
        <div id="opcionales2">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name="opcion"
                    value="Maduros"
                    checked={selectedOpcionales.includes('Maduros')}
                    onChange={() => {
                      const newOpcionales = selectedOpcionales.includes('Maduros')
                        ? selectedOpcionales.filter(o => o !== 'Maduros')
                        : [...selectedOpcionales, 'Maduros'];
                      setSelectedOpcionales(newOpcionales);
                    }}
                  />
                  Maduros (₡500)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name="opcion"
                    value="Pure de papa"
                    checked={selectedOpcionales.includes('Pure de papa')}
                    onChange={() => {
                      const newOpcionales = selectedOpcionales.includes('Pure de papa')
                        ? selectedOpcionales.filter(o => o !== 'Pure de papa')
                        : [...selectedOpcionales, 'Pure de papa'];
                      setSelectedOpcionales(newOpcionales);
                    }}
                  />
                  Pure de papa (₡500)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name="opcion"
                    value="Verduras"
                    checked={selectedOpcionales.includes('Verduras')}
                    onChange={() => {
                      const newOpcionales = selectedOpcionales.includes('Verduras')
                        ? selectedOpcionales.filter(o => o !== 'Verduras')
                        : [...selectedOpcionales, 'Verduras'];
                      setSelectedOpcionales(newOpcionales);
                    }}
                  />
                  Verduras (₡500)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {visibleTable === 'opcionales3' && (
        <div id="opcionales3">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name="opcion"
                    value="Papa horneada"
                    checked={selectedOpcionales.includes('Papa horneada')}
                    onChange={() => {
                      const newOpcionales = selectedOpcionales.includes('Papa horneada')
                        ? selectedOpcionales.filter(o => o !== 'Papa horneada')
                        : [...selectedOpcionales, 'Papa horneada'];
                      setSelectedOpcionales(newOpcionales);
                    }}
                  />
                  Papa horneada (₡700)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name="opcion"
                    value="Platanos"
                    checked={selectedOpcionales.includes('Platanos')}
                    onChange={() => {
                      const newOpcionales = selectedOpcionales.includes('Platanos')
                        ? selectedOpcionales.filter(o => o !== 'Platanos')
                        : [...selectedOpcionales, 'Platanos'];
                      setSelectedOpcionales(newOpcionales);
                    }}
                  />
                  Platanos (₡300)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name="opcion"
                    value="Natilla"
                    checked={selectedOpcionales.includes('Natilla')}
                    onChange={() => {
                      const newOpcionales = selectedOpcionales.includes('Natilla')
                        ? selectedOpcionales.filter(o => o !== 'Natilla')
                        : [...selectedOpcionales, 'Natilla'];
                      setSelectedOpcionales(newOpcionales);
                    }}
                  />
                  Natilla (₡200)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {visibleTable === 'bebidas' && (
        <div id="bebidas">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="bebida"
                    value="Refresco"
                    checked={selectedBebida === 'Refresco'}
                    onChange={() => setSelectedBebida('Refresco')}
                  />
                  Refresco (₡1200)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="bebida"
                    value="Jugo de frutas"
                    checked={selectedBebida === 'Jugo de frutas'}
                    onChange={() => setSelectedBebida('Jugo de frutas')}
                  />
                  Jugo de frutas (₡650)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="bebida"
                    value="Agua"
                    checked={selectedBebida === 'Agua'}
                    onChange={() => setSelectedBebida('Agua')}
                  />
                  Agua (₡700)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {visibleTable === 'bebidas2' && (
        <div id="bebidas2">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="bebida"
                    value="Café"
                    checked={selectedBebida === 'Café'}
                    onChange={() => setSelectedBebida('Café')}
                  />
                  Café (₡700)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="bebida"
                    value="Horchata"
                    checked={selectedBebida === 'Horchata'}
                    onChange={() => setSelectedBebida('Horchata')}
                  />
                  Horchata (₡650)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="bebida"
                    value="Tamarindo"
                    checked={selectedBebida === 'Tamarindo'}
                    onChange={() => setSelectedBebida('Tamarindo')}
                  />
                  Tamarindo (₡650)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {visibleTable === 'bebidas3' && (
        <div id="bebidas3">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="bebida"
                    value="Cas"
                    checked={selectedBebida === 'Cas'}
                    onChange={() => setSelectedBebida('Cas')}
                  />
                  Cas (₡650)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="bebida"
                    value="Resbaladera"
                    checked={selectedBebida === 'Resbaladera'}
                    onChange={() => setSelectedBebida('Resbaladera')}
                  />
                  Resbaladera (₡650)
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="bebida"
                    value="Jugo de naranja"
                    checked={selectedBebida === 'Jugo de naranja'}
                    onChange={() => setSelectedBebida('Jugo de naranja')}
                  />
                  Jugo de naranja (₡650)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <br />
      <div className="text-center">
        <button onClick={handleClearOrder} className="btn btn-danger">
          Cancelar
        </button>
        <button onClick={handleSaveOrder} className="btn btn-success">
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default Combo;
