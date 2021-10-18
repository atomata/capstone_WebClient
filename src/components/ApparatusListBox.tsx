import Button from '@mui/material/Button';
import styled from "styled-components";
import apparatusList from "../data/ApparatusList.json";

const ListBox = styled.div `
background: #FFFAF0;
border: 1px solid black;
height: inherit;
width: inherit;
overflow-y: scroll;

.heading {
font-size:20px;
text-align: center;
font-family: Trebuchet MS;
font-weight: bold;
color: black;
}

.button {
  text-align: center;
  margin: 5px;
}
`

const ApparatusListBox = () => {

  const DisplayList = () =>
  <div>{ 
    apparatusList.map ((apparatusDetail) => {
      if (apparatusDetail.SubApparatusList == null) 
      return (<div className="button"><Button variant="contained" onClick={() => { alert('onClick'); }}>{apparatusDetail.Name}</Button><br/></div>);
     else
      return (
        <>
        <div className="button"><Button variant="contained"  onClick={() => { alert('onClick'); }}>{apparatusDetail.Name}</Button><br/></div>
        { 
          Object.keys(apparatusDetail.SubApparatusList ).map((key) => 
            (<div className="button"><Button variant="contained" color="secondary">{apparatusDetail.SubApparatusList[key].Name}</Button><br/></div>))
        }
        </>

      );

      }
    )

  }</div>;
  

    return (
      <div>
        <ListBox>
        <h1 className="heading"> Selected Apparatus List</h1>
        <DisplayList  />  
        </ListBox>
      </div>

    );
  };
export default ApparatusListBox;
