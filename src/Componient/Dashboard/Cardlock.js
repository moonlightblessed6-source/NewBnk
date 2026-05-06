import styled from "styled-components";





export const Cardlocks = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;

.lock-unlock-card{
    width: 80%;
    margin: auto;
}

.locekedcard{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightgray;
    padding: 10px 20px;
    border-radius: 3px;
}

.locekedcard svg{
    font-size: 25px;
}
.unlock-card{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0px;
    gap: 10px;
    cursor: pointer;
}


.iflock{
    padding: 20px 0px;
    font-size: 14px;
}


.headings{
     font-size: 14px;
     margin-bottom: 15px;
     font-weight: 500;
}

ul{
    display: flex;
    flex-direction: column;
   gap: 10px;
   font-size: 13px;
   width: 95%;
   margin: auto;
}

.mones{
      margin-top: 20px;
    font-size: 14px;  
    
}

.margto{
    margin-block: 10px;
    font-size: 14px; 
}
.loststs{
    font-size: 14px; 
}






@media screen and (max-width: 925px) {
    .lock-unlock-card{
    width: 95%;
   

}
}

`