import React, {useState, useEffect} from 'react';
const url = 'https://course-api.com/react-tabs-project';


export default () => {
     const [loading, setLoading] = useState(true);
     const [jobs, setJobs] = useState([]);
     const [value, setValue] = useState(0);

     const fetchJobs = async () => {
          const response = await fetch(url);
          const newJobs = await response.json();
          setJobs(newJobs);
          setLoading(false);
     }

     useEffect(() => {
          fetchJobs();
     }, []);

     if(loading) {
          return(
               <h3>Loading...</h3>
          )
     }
     const {company, dates, duties, title } = jobs[value];
     return(
          <section>
               <div>
                    <h2>Experiensies</h2>
               </div>
               <div className="btn-container">
                    {jobs.map((item, index) => {
                         return(
                              <button key={item.id} onClick={() => setValue(index)}>{item.company}</button>
                         )
                    })}
               </div>
               <div>
                    <h3>{title}</h3>
                    <h3>{company}</h3>
                    <p>{dates}</p>
                    { duties.map((duty, index) => {
                         return (
                              <div key={index}>
                                   <p>{duty}</p>
                              </div>
                         )
                    }) }
               </div>
          </section>
     )
}