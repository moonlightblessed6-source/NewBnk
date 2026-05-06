import styled from "styled-components";





export const Transactions = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;
font-size: 12px;
.transactiosn{
    width: 80%;
    margin: auto;
    padding: 20px 0px;
}

.topstranc{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    padding: 20px 0px;
    cursor: pointer;
}
.historyess{
    display: flex;
    justify-content: space-between;
    padding: 5px 0px;
   
  
}



.transaction-item{
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    border: 1px solid lightgray;
  
}


.mysys{
    display: flex;
    gap: 20px;
}



.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-block: 20px;
}

.pagination button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: #155724;
  color: white;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}


@media screen and (max-width: 925px) {
    
    .transactiosn{
        width: 95%;
    }
}
`