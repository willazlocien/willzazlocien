import React, { useState, useEffect } from 'react';
import "materialize-css";
import "react-leaflet";
import {
  CardPanel, Table,
  Col, Row
} from "react-materialize";
import Button from "react-materialize/lib/Button";
import Lista from "./Lista";
import axios from 'axios';


function Test() {
	// const [name, setName] = useState('');
	// const [age, setAge] = useState('');
	// const [salary, setSalary] = useState('');
	// const [hobby, setHobby] = useState('');
    const [APIdata, setAPIdata] = useState([]);
    const [refresh, setRefresh] = useState([]);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	const objt = { name, age, salary, hobby };

	// 	axios
	// 		.post(
	// 			'https://sheet.best/api/sheets/600d993c-a53f-48a2-9968-d30dd7747162',
	// 			objt
	// 		)
	// 		.then((data) => {
	// 			setRefresh(data);
	// 		});


            
	// };

    useEffect(() => {
        axios.get('https://sheet.best/api/sheets/600d993c-a53f-48a2-9968-d30dd7747162')
        .then((incomingData) => {
                setAPIdata(incomingData.data);
        })
    },[refresh]
    );

    const items = APIdata.map((data) => {
        return (
          <Table>
            <tr className="hoverable">
              <td className='tabela'>{data.Lokal}</td>
              <td className='tabela'>{data.Metraz}</td>
              <td className='tabela'>{data.Pietro}</td>
              <td className='tabela'>{data.Cena}</td>
              <td className='tabela'>{data.Dostepnosc}</td>
              
            </tr>
          </Table>
        );
      })
      const items2 = Lista.map((data) => {
        return (
          <Table>
            <tr className="">
              <td className='tabela center'>{data.Rzut}</td>
            </tr>
          </Table>
        );
      })
	return (
		<Row className='white'>
             {/* <form id="contact-form">
                    <Row>
                      <Col m={6} s={12}>
                        <div className="form-group">
                        <label>Name</label>
					<input
						placeholder="Enter your Name"
						onChange={(e) => setName(e.target.value)}
					/>
                        </div>
                      </Col>
                      <Col m={6} s={12}>
                      <label>Age</label>
					<input
						placeholder="Enter your Age"
						onChange={(e) => setAge(e.target.value)}
					/>
                      </Col>
                    </Row>
                    <div className="form-group">
                   <label>Salary</label>
					<input
						placeholder="Enter your Hobby"
						onChange={(e) => setSalary(e.target.value)}
					/>
                    </div>
                    <div className="form-group">
                    <label>Hobby</label>
					<input
						placeholder="Enter your Hobby"
						onChange={(e) => setHobby(e.target.value)}
					/>
                    </div>
                    <Button color="blue" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
                  </form> */}

<Col s={8}>              
{items}</Col>   
<Col s={4}>              
{items2}</Col>   

		</Row>
	);
}

export default Test;