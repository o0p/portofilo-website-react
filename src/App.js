import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setloading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, seValue] = useState(0);

  return <h2>tabs project setup</h2>;
}

export default App;
