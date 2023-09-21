import React, { useState } from 'react';
import { IfcViewerAPI } from 'web-ifc-viewer'

interface Node {
  expressID: number;
  name: string;
  children: Node[];
}

interface SpatialTreeProps {
  createTree: () => Node;
  modelID: number;
}

// Componente para los nodos con hijos (BranchNode)
const BranchNode = ({ node,modelID}: { node: Node, modelID: number }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setIsChecked(value);
  };

  const handleTitleClick = () => {
    //todojunto(model.modelID, node.expressID);
  };

  const handleCaretClick = () => {
    // Toggle the 'active' class for nested elements
    const nestedElement = document.getElementById(`nested-${node.expressID}`);
    if (nestedElement) {
      nestedElement.classList.toggle('active');
    }
  };

  return (
    <li>
      <div>
        <span className="caret" onClick={handleCaretClick}></span>
        <span onClick={handleTitleClick}>{node.name}</span>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      </div>
      <ul id={`nested-${node.expressID}`} className="nested">
        {node.children.map((child) =>
          child.children.length > 0 ? (
            <BranchNode key={child.expressID} node={child} modelID={modelID} />
          ) : (
            <LeafNode key={child.expressID} node={child} modelID={modelID} />
          )
        )}
      </ul>
    </li>
  );
}

// Componente para los nodos sin hijos (LeafNode)
function LeafNode({ node,modelID}: { node: Node, modelID: number }) {
  const handleCheckboxChange = () => {
    //viewer.IFC.selector.highlightIfcItemsByID(modelID, chequear());
  };

  const handleLeafClick = () => {
    //viewer.IFC.selector.pickIfcItemsByID(modelID, [node.expressID], true);
    //todojunto(model.modelID, node.expressID);
  };

  return (
    <li className="leaf-node">
      <span onClick={handleLeafClick}>{node.name}</span>
      <input type="checkbox" checked={true} onChange={handleCheckboxChange} />
    </li>
  );
}

// Componente principal SpatialTree
function SpatialTree({ createTree, modelID }: SpatialTreeProps) {
  
  const rootNode = createTree();

  return (
    <div>
      <h1>Árbol Espacial</h1>
      <ul>
        {rootNode.children.map((child) => (
          <BranchNode key={child.expressID} node={child} modelID={modelID} />
        ))}
      </ul>
    </div>
  );
}

export default SpatialTree;