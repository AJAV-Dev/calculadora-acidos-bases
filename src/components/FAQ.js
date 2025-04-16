import React from 'react';

const FAQ = () => {
    return (
    <div>
        <h2>Preguntas Frecuentes</h2>
        <h3>¿Cómo se calcula la molaridad de una solución porcentual?</h3>
        <p className="justificado">
            Usando como ejemplo el 70% de ácido nítrico concentrado: el 70% de ácido nítrico significa que 100 gramos de este ácido contienen 70 gramos de HNO3. La concentración se expresa al 70 % en peso/peso o al 70 % en peso de HNO3. Algunos químicos y analistas prefieren trabajar en unidades de concentración ácida de molaridad (moles/litro). Para calcular la molaridad de un ácido nítrico al 70 % en peso, el número de moles de HNO3 presente en 1 litro de ácido debe calcularse. Sabiendo que la densidad del ácido es de 1.413 g/mL, podemos calcular el peso de 1 L de HNO3 al 70% que sea de 1413 gramos. Saber que la solución es del 70 % en peso permitiría entonces el número de gramos de HNO3 a calcular: (0,700)(1413 g) = 989,1 gramos de HNO3 por litro. División de los gramos de HNO3 por      el peso molecular del HNO3 (63,01 g/mol) da el número de moles de HNO3 / L o Molaridad, que es 15,7 M.
        </p>
        <h3>¿Cuál es la ecuación utilizada para la conversión de molaridad?</h3>
        <p className="justificado">
            La siguiente ecuación se utiliza para calcular la molaridad ácida y base donde la concentración se da en % en peso:
            <br />
        <br />
        <p className="centrado"> <strong >[(% × d) / MW] × 10 = Molaridad</strong></p>
        <br />
        donde: % = % en peso; d = Densidad (o gravedad específica); MW = peso molecular (o peso de la fórmula).
        <br />
        <br />
        La ecuación anterior se puede utilizar para calcular la molaridad del 70 % en peso de ácido nítrico:
        <br />
        <p className="centrado">  <strong>[(70 × 1,413) / 63,01] × 10 = 15,7 M</strong> 
        </p>
        </p>
        <br />
        <h3>¿Cómo calculo la normalidad de un ácido o base a partir de su molaridad?</h3>
        <p className="justificado">
            Existe una relación entre normalidad y molaridad. La normalidad sólo puede calcularse cuando se trata de reacciones, porque la normalidad es una función de equivalentes. La normalidad se refiere a compuestos que tienen múltiples funcionalidades químicas, como el ácido sulfúrico, el H<sub>2</sub>SO<sub>4</sub>. Una solución de 1 M de H<sub>2</sub>SO<sub>4</sub> contendrá un mol de H<sub>2</sub>SO<sub>4</sub> en 1 litro de solución, pero si la solución se titula con una base, se demostrará que contiene dos moles de ácido. Esto se debe a que una sola molécula de H<sub>2</sub>SO<sub>4</sub> contiene dos protones ácidos (iones H<sup>+</sup>). Por lo tanto, una solución de 1 M de H<sub>2</sub>SO<sub>4</sub> será 2 N. La normalidad de una solución es la molaridad multiplicada por el número de equivalentes por mol.
        </p>
        <h3>¿Por qué la calculadora utiliza un porcentaje de peso del 56,6% en lugar del 28% para el hidróxido de amonio?</h3>
        <p className="justificado">
            28% amoníaco (NH<sub>3</sub>) es igual a aproximadamente un 56,6% de hidróxido de amonio. Esto es de acuerdo a la información suministrada de la ficha técnica del producto <a href="https://www.sigmaaldrich.com/product/mm/ax1303" target="_blank" rel="noopener noreferrer" className='link'>AX1303</a> de Sigma Aldrich, donde informan el % de amoníaco y no el % de hidróxido de amonio. Nuestra calculadora está diseñada para utilizar el % de hidróxido de amonio.
    </p>
    </div>
    );
};

export default FAQ;